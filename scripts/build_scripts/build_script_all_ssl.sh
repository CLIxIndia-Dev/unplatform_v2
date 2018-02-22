#!/bin/bash

# This script assumes that you have checked out the release / version
# that you want to build.
# This script must be run from the <project root>/scripts/build_scripts directory

cd ../../
BUILD_ROOT=`pwd`
echo The build root is $BUILD_ROOT

# Detect the platform (similar to $OSTYPE)
# see http://stackoverflow.com/questions/394230/detect-the-os-from-a-bash-script
# We have only three build platform variants: windows, linux, osx.
lowercase(){
    echo "$1" | sed "y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/"
}

OS=`lowercase \`uname\``
# OS="`uname`"
UN2_BUILD_OS="platform_undetected"
case $OS in
  linux | freebsd)
    OS='Linux'
    UN2_BUILD_OS="linux"
    ;;
  mingw* | msys* | cygwin | windowsnt)
    OS='Windows'
    UN2_BUILD_OS="windows"
    ;;
   dar*)
    OS='Mac'
    UN2_BUILD_OS="osx"
    ;;
  *) ;;
esac
echo Build platform is $UN2_BUILD_OS
echo Build OS is $OS from `lowercase \`uname\``


# reset the directory to get rid of previous build artifacts
# Tradeoff of using git clean here, is that it also removes useful things
# like ui/node_modules (building the UI) and modules/.
# It also forces git to remove the tool repos which makes the build longer.
# git clean -x -d -f -f
rm -rf $BUILD_ROOT/bundle/
rm -rf $BUILD_ROOT/build/
rm -rf $BUILD_ROOT/dist/
rm -rf $BUILD_ROOT/static/ui/

find . -type f -name '*.pyc' -exec rm -f '{}' \;

# remove the sqlite3 database used to store sessions
if [ -f $BUILD_ROOT/unplatform.sqlite3 ]
then
  rm $BUILD_ROOT/unplatform.sqlite3
fi
# remove the sqlite3 database WAL files
if [ -f $BUILD_ROOT/unplatform.sqlite3-shm ]
then
  rm $BUILD_ROOT/unplatform.sqlite3-shm
  rm $BUILD_ROOT/unplatform.sqlite3-wal
fi

if [ ! -d $BUILD_ROOT/bundle ]
then
  mkdir $BUILD_ROOT/bundle/
fi
if [ ! -d $BUILD_ROOT/bundle/static ]
then
  mkdir $BUILD_ROOT/bundle/static
fi
if [ ! -d $BUILD_ROOT/static/ui ]
then
  echo Making directory $BUILD_ROOT/static/ui
  mkdir -p $BUILD_ROOT/static/ui
else
  echo Directory $BUILD_ROOT/static/ui exists
fi

# copy the session expired template
if [ ! -d $BUILD_ROOT/bundle/templates ]
then
  mkdir $BUILD_ROOT/bundle/templates
fi
cp $BUILD_ROOT/templates/* bundle/templates/

# create and move the sqlite3 database for sessions
cd $BUILD_ROOT
python session_migration.py
mv $BUILD_ROOT/unplatform.sqlite3 $BUILD_ROOT/bundle/
mv $BUILD_ROOT/unplatform.sqlite3-shm $BUILD_ROOT/bundle/
mv $BUILD_ROOT/unplatform.sqlite3-wal $BUILD_ROOT/bundle/

# update the virtual environment
pip install -r $BUILD_ROOT/requirements.txt
pip install -r $BUILD_ROOT/test_requirements.txt

# generate the UI
cd $BUILD_ROOT/ui

case $UN2_BUILD_OS in
    'windows')
        echo Compiling only UI for Windows...
        cd $BUILD_ROOT/ui
        npm install
        npm run compile:prod
        cp -rf $BUILD_ROOT/ui/dist/* $BUILD_ROOT/static/ui/
        ;;
    *)
        echo Compiling the UI...
        cd $BUILD_ROOT/ui
        npm install
        npm run compile:prod
        cp -rf $BUILD_ROOT/ui/dist/* $BUILD_ROOT/static/ui/
        ;;
esac

cp -r $BUILD_ROOT/static/assets/ $BUILD_ROOT/bundle/static/assets/

if [ ! -d $BUILD_ROOT/bundle/static/ui ]
then
  mkdir -p $BUILD_ROOT/bundle/static/ui
fi

# run the existing server-side API tests
# run tests after generating the UI, because some test for presence of index.html
cd $BUILD_ROOT

# Test directories for the test fixture index.html files
if [ ! -d $BUILD_ROOT/static/oea ]
then
  mkdir -p $BUILD_ROOT/static/oea
fi
if [ ! -d $BUILD_ROOT/static/content ]
then
  mkdir -p $BUILD_ROOT/static/content
fi

pytest --no-cov

# Now move the generated UI files to the bundle
mv $BUILD_ROOT/static/ui/* $BUILD_ROOT/bundle/static/ui/

# copy over the self-signed SSL certs
mkdir $BUILD_ROOT/bundle/unplatform
cp $BUILD_ROOT/unplatform/unplatform.cert.dummy.pem $BUILD_ROOT/bundle/unplatform/
cp $BUILD_ROOT/unplatform/unplatform.key.dummy.pem $BUILD_ROOT/bundle/unplatform/

# copy the Tools in modules over
mkdir $BUILD_ROOT/bundle/modules
cp -r $BUILD_ROOT/modules/* $BUILD_ROOT/bundle/modules/

# copy the README
cp $BUILD_ROOT/README.md $BUILD_ROOT/bundle/

# copy the license, notices, and third-party licenses
mkdir $BUILD_ROOT/bundle/licenses
cp $BUILD_ROOT/LICENSE.md $BUILD_ROOT/bundle/
cp $BUILD_ROOT/LICENSE_OpenSansFont.txt $BUILD_ROOT/bundle/licenses
cp $BUILD_ROOT/LICENSE_PyOpenSSL.txt $BUILD_ROOT/bundle/licenses
cp $BUILD_ROOT/LICENSE_Requests.txt $BUILD_ROOT/bundle/licenses
cp $BUILD_ROOT/LICENSE_VarelaFont.txt $BUILD_ROOT/bundle/licenses
cp $BUILD_ROOT/LICENSE_wicg_inert.txt $BUILD_ROOT/bundle/licenses
cp $BUILD_ROOT/NOTICES.md $BUILD_ROOT/bundle/

# copy the licenses from Unplatform UI node_modules
# Do this later for OEA and content_player, too...
echo Copying Unplatform UI node_modules licenses
for i in $(find $BUILD_ROOT/ui/node_modules -maxdepth 2 \( -name 'LICENSE*' -o -name 'LICENCE*' \) ); do
  LICENSE_FILE="$(basename $i)"
  TMP_DIR="$(dirname $i)"
  TMP_DIR="$(basename $TMP_DIR)"
  TARGET_DIR="$BUILD_ROOT/bundle/licenses/$TMP_DIR"
  if [ ! -d $TARGET_DIR ]
  then
    mkdir $TARGET_DIR
  fi
  LICENSE_FULL_PATH="$BUILD_ROOT/ui/node_modules/$TMP_DIR/$LICENSE_FILE"
  if [ -f $LICENSE_FULL_PATH ]
  then
    cp -rf $LICENSE_FULL_PATH $TARGET_DIR
  fi
done

# copy the Python license files
echo Copying Unplatform Python license files
pip install yolk3k
# Tips from https://unix.stackexchange.com/a/7012
# Tips from https://stackoverflow.com/a/2172367
rm -rf $BUILD_ROOT/tmp_package
IFS=$'\n'
set -f
for i in $(cat < $BUILD_ROOT/requirements.txt); do
  mkdir $BUILD_ROOT/tmp_package
  cd $BUILD_ROOT/tmp_package
  if [[ $i == -e* ]]; then
    # Download directly from GIT / find the license file / clean up
    REPO=$(expr "$i" : '.*git://\(.*\)@')
    PACKAGE=$(expr "$i" : '.*CLIxIndia-Dev/\(.*\)\.git')
    COMMIT=$(expr "$i" : '.*@\(.*\)#')
    git clone https://$REPO
    cd $(find . -type d | head -2 | tail -1)  # head -1 should be current directory, "."
    git checkout $COMMIT
    # For web.py also copy over the CherryPy WSGI server license manually
    if [[ $PACKAGE == "webpy" ]]; then
      CHERRY_PY_SUBDIR="$BUILD_ROOT/bundle/licenses/$PACKAGE/web/wsgiserver"
      CHERRY_PY_LICENSE="web/wsgiserver/LICENSE.txt"
      if [ ! -d $CHERRY_PY_SUBDIR ]
      then
        mkdir -p $CHERRY_PY_SUBDIR
      fi
      if [ -f $CHERRY_PY_LICENSE ]
      then
        cp -rf $CHERRY_PY_LICENSE $CHERRY_PY_SUBDIR
      fi
    fi
    cd ..
  else
    # Use yolk3k to download / unzip / find the license file / clean up
    PACKAGE=$(expr "$i" : '\(.*\)==')
    yolk -F $PACKAGE
    FILE=$(find . -name "$PACKAGE*" | sort -n | tail -1)
    echo Expanding $FILE
    if [[ $FILE == *.zip ]]; then
      unzip $FILE
    else
      tar -zxvf $FILE
    fi
    rm $FILE
  fi
  TARGET_DIR="$BUILD_ROOT/bundle/licenses/$PACKAGE"
  if [ ! -d $TARGET_DIR ]
  then
    mkdir $TARGET_DIR
  fi
  # 3 grabs enum34 license, too?
  cp -rf $(find . -maxdepth 3 \( -name '*LICENSE*' -o -name '*LICENCE*' \) ) $TARGET_DIR
  cd $BUILD_ROOT
  rm -rf $BUILD_ROOT/tmp_package
done
set +f

# copy package.json so unplatform can report its version
cp $BUILD_ROOT/package.json $BUILD_ROOT/bundle/

# copy unplatform requirements.txt files for reference
cp $BUILD_ROOT/requirements.txt $BUILD_ROOT/bundle/unplatform-requirements.txt
cp $BUILD_ROOT/test_requirements.txt $BUILD_ROOT/bundle/unplatform-test_requirements.txt

# generate the latest releases of each tool, from the release branch
if [ ! -d $BUILD_ROOT/tool-repos ]
then
  mkdir $BUILD_ROOT/tool-repos
fi
cd $BUILD_ROOT/tool-repos

# Content player
echo Processing Content Player
cd $BUILD_ROOT/tool-repos
if [ ! -d content_player ]
then
  git clone git@github.com:CLIxIndia-Dev/content_player.git
  cp content_player/.env.example content_player/.env
fi
cd content_player

# remove our local config to prevent git merge conflicts
rm -f client/html/layouts/application.html

git pull origin master
cd client
npm install
cd ..

# put in our content player local config so it builds properly
cp -f $BUILD_ROOT/scripts/content_player_build_config/application.html client/html/layouts/application.html

npm run build
mkdir $BUILD_ROOT/bundle/static/content_player/
cp -rf $BUILD_ROOT/tool-repos/content_player/build/prod/*  $BUILD_ROOT/bundle/static/content_player/
rm -rf $BUILD_ROOT/bundle/static/content_player/.git/

# copy the license files over from node_modules
echo Copying NPM license files from content player
for i in $(find $BUILD_ROOT/tool-repos/content_player/client/node_modules -maxdepth 2 \( -name 'LICENSE*' -o -name 'LICENCE*' \) ); do
  LICENSE_FILE="$(basename $i)"
  TMP_DIR="$(dirname $i)"
  TMP_DIR="$(basename $TMP_DIR)"
  if [ ! -d $BUILD_ROOT/bundle/licenses/$TMP_DIR ]
  then
    mkdir $BUILD_ROOT/bundle/licenses/$TMP_DIR
  fi
  cp -rf $BUILD_ROOT/tool-repos/content_player/client/node_modules/$TMP_DIR/$LICENSE_FILE $BUILD_ROOT/bundle/licenses/$TMP_DIR
done

# OEA Open Embedded Assessments
echo Processing Open Assessments Client
cd $BUILD_ROOT/tool-repos

if [ ! -d "OpenAssessmentsClient" ]
then
  git clone git@github.com:CLIxIndia-Dev/OpenAssessmentsClient.git
fi
cd OpenAssessmentsClient
git checkout master

# remove our local config to prevent git merge conflicts
rm -f client/html/layouts/application.html
rm -f client/html/layouts/author.html
rm -f client/html/layouts/partials/_head.html
rm -f client/config/settings.js

git pull origin master

cd client
npm install
cd ..

# put in our OEA local config so it builds properly
cp -f $BUILD_ROOT/scripts/oea_build_config/application.html client/html/layouts/application.html
cp -f $BUILD_ROOT/scripts/oea_build_config/author.html client/html/layouts/author.html
cp -f $BUILD_ROOT/scripts/oea_build_config/_head.html client/html/layouts/partials/_head.html
cp -f $BUILD_ROOT/scripts/oea_build_config/settings.js client/config/settings.js

npm run build

mkdir $BUILD_ROOT/bundle/static/oea/
cp -rf $BUILD_ROOT/tool-repos/OpenAssessmentsClient/build/prod/*  $BUILD_ROOT/bundle/static/oea/
rm -rf $BUILD_ROOT/bundle/static/oea/.git/

# copy the license files over from node_modules
echo Copying NPM license files from OEA
for i in $(find $BUILD_ROOT/tool-repos/OpenAssessmentsClient/client/node_modules -maxdepth 2 \( -name 'LICENSE*' -o -name 'LICENCE*' \) ); do
  LICENSE_FILE="$(basename $i)"
  TMP_DIR="$(dirname $i)"
  TMP_DIR="$(basename $TMP_DIR)"
  if [ ! -d $BUILD_ROOT/bundle/licenses/$TMP_DIR ]
  then
    mkdir $BUILD_ROOT/bundle/licenses/$TMP_DIR
  fi
  cp -rf $BUILD_ROOT/tool-repos/OpenAssessmentsClient/client/node_modules/$TMP_DIR/$LICENSE_FILE $BUILD_ROOT/bundle/licenses/$TMP_DIR
done

# biomechanics game
echo Processing Biomechanics game
cd $BUILD_ROOT/tool-repos

if [ ! -d "runkittyrun" ]
then
  git clone git@github.com:CLIxIndia-Dev/runkittyrun.git
fi
cd runkittyrun
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/runkittyrun/
cp -rf $BUILD_ROOT/tool-repos/runkittyrun/en/* $BUILD_ROOT/bundle/static/runkittyrun/
rm -rf $BUILD_ROOT/bundle/static/runkittyrun/.git/

# Physics Video player
echo Processing Physics Video player
cd $BUILD_ROOT/tool-repos
if [ ! -d "physics-video-player" ]
then
  git clone git@github.com:CLIxIndia-Dev/physics-video-player.git
fi
cd physics-video-player
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/physics-video-player/
cp -rf $BUILD_ROOT/tool-repos/physics-video-player/* $BUILD_ROOT/bundle/static/physics-video-player/
rm -rf $BUILD_ROOT/bundle/static/physics-video-player/.git/

# Police Quad
echo Processing Police Quad
cd $BUILD_ROOT/tool-repos
if [ ! -d "policequad" ]
then
  git clone git@github.com:CLIxIndia-Dev/policequad.git
fi
cd policequad
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/policequad/
cp -rf $BUILD_ROOT/tool-repos/policequad/*  $BUILD_ROOT/bundle/static/policequad/
rm -rf $BUILD_ROOT/bundle/static/policequad/.git/

# Open Story tool
echo Processing Open Story tool
cd $BUILD_ROOT/tool-repos
if [ ! -d "open-story-tool" ]
then
  git clone git@github.com:CLIxIndia-Dev/open-story-tool.git
fi
cd open-story-tool
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/open-story-tool/
cp -rf $BUILD_ROOT/tool-repos/open-story-tool/* $BUILD_ROOT/bundle/static/open-story-tool/
rm -rf $BUILD_ROOT/bundle/static/open-story-tool/.git/

# Turtle Blocks
echo Processing Turtle Blocks
cd $BUILD_ROOT/tool-repos
if [ ! -d "turtle-blocks" ]
then
  git clone git@github.com:CLIxIndia-Dev/turtle-blocks.git
fi
cd turtle-blocks
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/turtle-blocks/
cp -rf $BUILD_ROOT/tool-repos/turtle-blocks/* $BUILD_ROOT/bundle/static/turtle-blocks/
rm -rf $BUILD_ROOT/bundle/static/turtle-blocks/.git/

# StarLogoNova simulations
echo Processing StarLogoNova Simulations
cd $BUILD_ROOT/tool-repos
if [ ! -d "StarLogoNova" ]
then
  # Use SSH version until we figure out licensing for SLN
  # git clone https://github.com/CLIxIndia-Dev/StarLogoNova.git
  git clone git@github.com:CLIxIndia-Dev/StarLogoNova.git
fi
cd StarLogoNova
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/StarLogoNova/
cp -rf $BUILD_ROOT/tool-repos/StarLogoNova/* $BUILD_ROOT/bundle/static/StarLogoNova/
rm -rf $BUILD_ROOT/bundle/static/StarLogoNova/.git/

# Rotation of Earth Animation
echo Processing Rotation of Earth Animation
cd $BUILD_ROOT/tool-repos
if [ ! -d "Rotation_of_Earth_Animation" ]
then
  git clone https://github.com/CLIxIndia-Dev/Rotation_of_Earth_Animation.git
fi
cd Rotation_of_Earth_Animation
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/Rotation_of_Earth_Animation/
cp -rf $BUILD_ROOT/tool-repos/Rotation_of_Earth_Animation/* $BUILD_ROOT/bundle/static/Rotation_of_Earth_Animation/
rm -rf $BUILD_ROOT/bundle/static/Rotation_of_Earth_Animation/.git/

# Motions_of_the_Moon_Animation
echo Processing Motions_of_the_Moon_Animation
cd $BUILD_ROOT/tool-repos
if [ ! -d "Motions_of_the_Moon_Animation" ]
then
  git clone https://github.com/CLIxIndia-Dev/Motions_of_the_Moon_Animation.git
fi
cd Motions_of_the_Moon_Animation
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/Motions_of_the_Moon_Animation/
cp -rf $BUILD_ROOT/tool-repos/Motions_of_the_Moon_Animation/* $BUILD_ROOT/bundle/static/Motions_of_the_Moon_Animation/
rm -rf $BUILD_ROOT/bundle/static/Motions_of_the_Moon_Animation/.git/


# Astroamer_Planet_Trek_Activity
echo Processing Astroamer_Planet_Trek_Activity
cd $BUILD_ROOT/tool-repos
if [ ! -d "Astroamer_Planet_Trek_Activity" ]
then
  git clone https://github.com/CLIxIndia-Dev/Astroamer_Planet_Trek_Activity.git
fi
cd Astroamer_Planet_Trek_Activity
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/Astroamer_Planet_Trek_Activity/
cp -rf $BUILD_ROOT/tool-repos/Astroamer_Planet_Trek_Activity/* $BUILD_ROOT/bundle/static/Astroamer_Planet_Trek_Activity/
rm -rf $BUILD_ROOT/bundle/static/Astroamer_Planet_Trek_Activity/.git/

# Astroamer_Element_Hunt_Activity
echo Processing Astroamer_Element_Hunt_Activity
cd $BUILD_ROOT/tool-repos
if [ ! -d "Astroamer_Element_Hunt_Activity" ]
then
  git clone https://github.com/CLIxIndia-Dev/Astroamer_Element_Hunt_Activity.git
fi
cd Astroamer_Element_Hunt_Activity
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/Astroamer_Element_Hunt_Activity/
cp -rf $BUILD_ROOT/tool-repos/Astroamer_Element_Hunt_Activity/* $BUILD_ROOT/bundle/static/Astroamer_Element_Hunt_Activity/
rm -rf $BUILD_ROOT/bundle/static/Astroamer_Element_Hunt_Activity/.git/

# Solar_System_Animation
echo Processing Solar_System_Animation
cd $BUILD_ROOT/tool-repos
if [ ! -d "Solar_System_Animation" ]
then
  git clone https://github.com/CLIxIndia-Dev/Solar_System_Animation.git
fi
cd Solar_System_Animation
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/Solar_System_Animation/
cp -rf $BUILD_ROOT/tool-repos/Solar_System_Animation/* $BUILD_ROOT/bundle/static/Solar_System_Animation/
rm -rf $BUILD_ROOT/bundle/static/Solar_System_Animation/.git/

# Astroamer_Moon_Track
echo Processing Astroamer_Moon_Track
cd $BUILD_ROOT/tool-repos
if [ ! -d "Astroamer_Moon_Track" ]
then
  git clone https://github.com/CLIxIndia-Dev/Astroamer_Moon_Track.git
fi
cd Astroamer_Moon_Track
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/Astroamer_Moon_Track/
cp -rf $BUILD_ROOT/tool-repos/Astroamer_Moon_Track/* $BUILD_ROOT/bundle/static/Astroamer_Moon_Track/
rm -rf $BUILD_ROOT/bundle/static/Astroamer_Moon_Track/.git/

# Ratio-Patterns
echo Processing Ratio-Patterns
cd $BUILD_ROOT/tool-repos
if [ ! -d "Ratio-Patterns" ]
then
  git clone https://github.com/CLIxIndia-Dev/Ratio-Patterns.git
fi
cd Ratio-Patterns
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/Ratio-Patterns/
cp -rf $BUILD_ROOT/tool-repos/Ratio-Patterns/* $BUILD_ROOT/bundle/static/Ratio-Patterns/
rm -rf $BUILD_ROOT/bundle/static/Ratio-Patterns/.git/

# Ice-cubes-in-lemonade
echo Processing Ice-cubes-in-lemonade
cd $BUILD_ROOT/tool-repos
if [ ! -d "Ice-cubes-in-lemonade" ]
then
  git clone git@github.com:CLIxIndia-Dev/Ice-cubes-in-lemonade.git
fi
cd Ice-cubes-in-lemonade
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/Ice-cubes-in-lemonade/
cp -rf $BUILD_ROOT/tool-repos/Ice-cubes-in-lemonade/* $BUILD_ROOT/bundle/static/Ice-cubes-in-lemonade/
rm -rf $BUILD_ROOT/bundle/static/Ice-cubes-in-lemonade/.git/

# food_sharing_tool
echo Processing food_sharing_tool
cd $BUILD_ROOT/tool-repos
if [ ! -d "food_sharing_tool" ]
then
  git clone https://github.com/CLIxIndia-Dev/food_sharing_tool.git
fi
cd food_sharing_tool
git checkout master
git pull origin master
mkdir $BUILD_ROOT/bundle/static/food_sharing_tool/
cp -rf $BUILD_ROOT/tool-repos/food_sharing_tool/* $BUILD_ROOT/bundle/static/food_sharing_tool/
rm -rf $BUILD_ROOT/bundle/static/food_sharing_tool/.git/

# QBank-lite Bundles
echo Processing QBank-lite Bundles
cd $BUILD_ROOT/tool-repos
if [ ! -d "qbank-lite-bundles" ]
then
  git clone git@github.com:CLIxIndia-Dev/qbank-lite-bundles.git
fi
cd qbank-lite-bundles
git checkout release
git pull origin release


# QBank-lite -- just so we can grab the requirements.txt file
echo Processing QBank-lite
cd $BUILD_ROOT/tool-repos
if [ ! -d "qbank-lite" ]
then
  git clone git@github.com:CLIxIndia-Dev/qbank-lite.git
fi
cd qbank-lite
git checkout master
git pull origin master

# Copy the requirements.txt for reference
# Copy the licenses and README
echo Copying the QBank README and documentation
cp requirements.txt $BUILD_ROOT/bundle/qbank-requirements.txt
cp test_requirements.txt $BUILD_ROOT/bundle/qbank-test_requirements.txt
cp NOTICES.md $BUILD_ROOT/bundle/qbank-NOTICES.md
cp README.md $BUILD_ROOT/bundle/qbank-README.md
cp LICENSE.md $BUILD_ROOT/bundle/qbank-LICENSE.md
cp LICENSE_PyMongo.txt $BUILD_ROOT/bundle/licenses
cp LICENSE_PyOpenSSL.txt $BUILD_ROOT/bundle/licenses

# copy the qbank python licenses
set -f
echo Copy the QBank Python licenses
for i in $(cat < requirements.txt); do
  mkdir $BUILD_ROOT/tmp_package
  cd $BUILD_ROOT/tmp_package
  if [[ $i == -e* ]]; then
    # Download directly from GIT / find the license file / clean up
    REPO=$(expr "$i" : '.*git://\(.*\)@')
    PACKAGE=$(expr "$i" : '.*CLIxIndia-Dev/\(.*\)\.git')
    COMMIT=$(expr "$i" : '.*@\(.*\)#')
    git clone https://$REPO
    cd $(find . -type d | head -2 | tail -1)  # head -1 should be current directory, "."
    git checkout $COMMIT
    # For web.py also copy over the CherryPy WSGI server license manually
    if [[ $PACKAGE == "webpy" ]]; then
      CHERRY_PY_SUBDIR="$BUILD_ROOT/bundle/licenses/$PACKAGE/web/wsgiserver"
      CHERRY_PY_LICENSE="web/wsgiserver/LICENSE.txt"
      if [ ! -d $CHERRY_PY_SUBDIR ]
      then
        mkdir -p $CHERRY_PY_SUBDIR
      fi
      if [ -f $CHERRY_PY_LICENSE ]
      then
        cp -rf $CHERRY_PY_LICENSE $CHERRY_PY_SUBDIR
      fi
    fi
    cd ..
  else
    # Use yolk3k to download / unzip / find the license file / clean up
    PACKAGE=$(expr "$i" : '\(.*\)==')
    yolk -F $PACKAGE
    FILE=$(find . -name "$PACKAGE*" | sort -n | tail -1)
    echo Expanding $FILE
    # Test if .tar.gz or .zip. enum34 comes down as a .zip, so on
    #   Windows we need to make sure to use gzip
    if [[ $FILE == *.zip ]]; then
      unzip $FILE
    else
      tar -zxvf $FILE
    fi
    rm $FILE
  fi
  TARGET_DIR="$BUILD_ROOT/bundle/licenses/$PACKAGE"
  if [ ! -d $TARGET_DIR ]
  then
    mkdir $TARGET_DIR
  fi
  # 3 grabs enum34 license, too?
  cp -rf $(find . -maxdepth 3 \( -name '*LICENSE*' -o -name '*LICENCE*' \) ) $TARGET_DIR
  cd $BUILD_ROOT
  rm -rf $BUILD_ROOT/tmp_package
done
set +f

# let's get back out of tool-repos and go to the root directory
cd $BUILD_ROOT

# build the unplatform executable and copy / move it to the final output directory
pyinstaller $BUILD_ROOT/main.spec

case $UN2_BUILD_OS in
    'windows')
        mv $BUILD_ROOT/dist/main.exe bundle/unplatform_win32_ssl.exe
        ;;
    'linux')
        mv $BUILD_ROOT/dist/main bundle/unplatform_linux64_ssl
        ;;
    'osx')
        mv $BUILD_ROOT/dist/main bundle/unplatform_osx_ssl
        ;;
esac

# copy over the "launcher" bat file that opens the unplatform and QBank executables
# For Windows, also copy over the Data Extraction scripts
case $UN2_BUILD_OS in
    'windows')
        cp $BUILD_ROOT/scripts/launchers/unplatform_win32_ssl.bat bundle/
        # copy over utility files for FSP data extraction
        cp $BUILD_ROOT/scripts/data_extraction/DataExtractionScript.bat bundle/
        cp $BUILD_ROOT/scripts/data_extraction/md5.exe bundle/
        cp $BUILD_ROOT/scripts/data_extraction/zipjs.bat bundle/

        # copy over the NSIS build script
        cp $BUILD_ROOT/scripts/bundle_executables/windows/clix.nsi $BUILD_ROOT/bundle/
       ;;
    'linux')
        cp $BUILD_ROOT/scripts/launchers/unplatform_linux64_ssl.sh bundle/
        cp $BUILD_ROOT/scripts/launchers/unplatform_linux64_ssl-deb.sh bundle/
        # copy over the Debian rules file
        cp $BUILD_ROOT/scripts/bundle_executables/debian/rules $BUILD_ROOT/bundle/
        # copy over the Debian install file, which copies files to the host
        cp $BUILD_ROOT/scripts/bundle_executables/debian/install $BUILD_ROOT/bundle/
        # copy over the clix.desktop file, which puts the CLIx application
        #   into the Ubuntu Dashboard
        cp $BUILD_ROOT/scripts/bundle_executables/debian/clix.desktop $BUILD_ROOT/bundle/

        # copy over the helper Debian build script
        cp $BUILD_ROOT/scripts/bundle_executables/debian/build_debian_package.sh $BUILD_ROOT/bundle/

        # copy over the postrm script that does a better clean up
        cp $BUILD_ROOT/scripts/bundle_executables/debian/postrm $BUILD_ROOT/bundle/
        ;;
    'osx')
        cp $BUILD_ROOT/scripts/launchers/unplatform_osx_ssl.sh bundle/
        # copy over the dmgbuild settings file
        cp $BUILD_ROOT/scripts/bundle_executables/macos/clix_settings.py $BUILD_ROOT/bundle/
        ;;
esac

# Find latest QBank-lite binary for this platform

case $UN2_BUILD_OS in
    'windows')
        QBANK_FILE=$(find $BUILD_ROOT/tool-repos/qbank-lite-bundles/release/ -name qbank-lite*exe | sort -n | tail -1)
        ;;
    'linux')
        QBANK_FILE=$(find $BUILD_ROOT/tool-repos/qbank-lite-bundles/release/ -name qbank-lite*ubuntu* | sort -n | tail -1)
        ;;
    'osx')
        # TODO: When we build working QBank-lite binaries for OSX, change "ubuntu" to the "osx" slug
        QBANK_FILE=$(find $BUILD_ROOT/tool-repos/qbank-lite-bundles/release/ -name qbank-lite*osx* | sort -n | tail -1)
        ;;
esac
echo QBank-lite binary is $QBANK_FILE
cp $QBANK_FILE  $BUILD_ROOT/bundle/

# Manually copy BeautifulSoup4 license over, because it is missing
#   from the .tar.gz file downloaded from PyPI.
echo Manually copying BeautifulSoup4 license
cp $BUILD_ROOT/LICENSE_BeautifulSoup4.txt $BUILD_ROOT/bundle/licenses/beautifulsoup4


# Zip up the final bundle/ directory and name the file per the unplatform version
VERSION=$(python -c "import json; print json.load(open('package.json', 'rb'))['version']")

case $UN2_BUILD_OS in
    'windows')
        OUTPUT="unplatform_v${VERSION//\'/}_win32_ssl.zip"
        ;;
    'linux')
        OUTPUT="unplatform_v${VERSION//\'/}_linux64_ssl.zip"
        ;;
    'osx')
        OUTPUT="unplatform_v${VERSION//\'/}_osx.zip"
        ;;
esac

# can also add -T -m options if we don't want to keep the source files
zip -r  -q $OUTPUT bundle && echo "bundle zipped" || echo "error zipping bundle"

# move the final zipped file to the bundle directory, to keep our repo clean
mv $BUILD_ROOT/$OUTPUT $BUILD_ROOT/bundle/$OUTPUT
