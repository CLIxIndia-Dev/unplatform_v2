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

# update the virtual environment
pip install -r $BUILD_ROOT/requirements.txt
pip install -r $BUILD_ROOT/test_requirements.txt

# generate the UI
cd $BUILD_ROOT/ui

case $UN2_BUILD_OS in
    'windows')
        echo Compiling only UI for Windows...
        cd $BUILD_ROOT/ui
        yarn install
        yarn run compile:prod
        cp -rf $BUILD_ROOT/ui/dist/* $BUILD_ROOT/static/ui/
        ;;
    *)
        echo Compiling the UI...
        cd $BUILD_ROOT/ui
        yarn install
        yarn run compile:prod
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

pytest

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
cp $BUILD_ROOT/LICENSE.md $BUILD_ROOT/bundle/
cp $BUILD_ROOT/LICENSE_OpenSansFont.txt $BUILD_ROOT/bundle/
cp $BUILD_ROOT/LICENSE_PyOpenSSL.txt $BUILD_ROOT/bundle/
cp $BUILD_ROOT/LICENSE_Requests.txt $BUILD_ROOT/bundle/
cp $BUILD_ROOT/LICENSE_VarelaFont.txt $BUILD_ROOT/bundle/
cp $BUILD_ROOT/NOTICES.md $BUILD_ROOT/bundle/

# copy package.json so unplatform can report its version
cp $BUILD_ROOT/package.json $BUILD_ROOT/bundle/


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
yarn install

# put in our content player local config so it builds properly
cp -f $BUILD_ROOT/scripts/content_player_build_config/application.html client/html/layouts/application.html

yarn run build
mkdir $BUILD_ROOT/bundle/static/content_player/
cp -rf build/prod/*  $BUILD_ROOT/bundle/static/content_player/
rm -rf $BUILD_ROOT/bundle/static/content_player/.git/

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
rm -f client/html/layouts/partials/_head.html
rm -f client/config/settings.js

git pull origin master

# Using Yarn (instead of npm) in spite of Yarn issue
# 1657 on Windows. Yarn seems to work on Windows now.
yarn install
cd client
yarn install
cd ..

# put in our OEA local config so it builds properly
cp -f $BUILD_ROOT/scripts/oea_build_config/application.html client/html/layouts/application.html
cp -f $BUILD_ROOT/scripts/oea_build_config/_head.html client/html/layouts/partials/_head.html
cp -f $BUILD_ROOT/scripts/oea_build_config/settings.js client/config/settings.js

yarn run build

mkdir $BUILD_ROOT/bundle/static/oea/
cp -rf build/prod/*  $BUILD_ROOT/bundle/static/oea/
rm -rf $BUILD_ROOT/bundle/static/oea/.git/

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
cd ..
mkdir $BUILD_ROOT/bundle/static/runkittyrun/
cp -rf runkittyrun/en/* $BUILD_ROOT/bundle/static/runkittyrun/
rm -rf $BUILD_ROOT/bundle/static/runkittyrun/.git/

# Physics Video player
echo Processing Physics Video player
cd $BUILD_ROOT/tool-repos
if [ ! -d "physics-video-player" ]
then
  git clone git@github.com:CLIxIndia-Dev/physics-video-player.git
fi
cd physics-video-player
git checkout release
git pull origin release
cd ..
mkdir $BUILD_ROOT/bundle/static/physics-video-player/
cp -rf physics-video-player/* $BUILD_ROOT/bundle/static/physics-video-player/
rm -rf $BUILD_ROOT/bundle/static/physics-video-player/.git/

# Audio record tool
echo Processing Audio Record tool
cd $BUILD_ROOT/tool-repos
if [ ! -d "audio-record-tool" ]
then
  git clone git@github.com:CLIxIndia-Dev/audio-record-tool.git
fi
cd audio-record-tool
git checkout release
git pull origin release
cd ..
mkdir $BUILD_ROOT/bundle/static/audio-record-tool/
cp -rf audio-record-tool/*  $BUILD_ROOT/bundle/static/audio-record-tool/
rm -rf $BUILD_ROOT/bundle/static/audio-record-tool/.git/

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
cd ..
mkdir $BUILD_ROOT/bundle/static/policequad/
cp -rf policequad/en/*  $BUILD_ROOT/bundle/static/policequad/
rm -rf $BUILD_ROOT/bundle/static/policequad/.git/

# Open Story tool
echo Processing Open Story tool
cd $BUILD_ROOT/tool-repos
if [ ! -d "open-story-tool" ]
then
  git clone git@github.com:CLIxIndia-Dev/open-story-tool.git
fi
cd open-story-tool
git checkout release
git pull origin release
cd ..
mkdir ../bundle/static/open-story-tool/
cp -rf open-story-tool/* ../bundle/static/open-story-tool/
rm -rf ../bundle/static/open-story-tool/.git/

# Turtle Blocks
echo Processing Turtle Blocks
cd $BUILD_ROOT/tool-repos
if [ ! -d "turtle-blocks" ]
then
  git clone git@github.com:CLIxIndia-Dev/turtle-blocks.git
fi
cd turtle-blocks
git checkout release
git pull origin release
cd ..
mkdir ../bundle/static/turtle-blocks/
cp -rf turtle-blocks/* ../bundle/static/turtle-blocks/
rm -rf ../bundle/static/turtle-blocks/.git/


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
        cp $BUILD_ROOT/scripts/data_extraction/zipjs.bat bundle/
        # make sure to copy the msvcr100.dll from the system into bundle/
        # otherwise you'll run into an error on deployments
        cp C:\\Windows\\System32\\msvcr100.dll bundle/
       ;;
    'linux')
        cp $BUILD_ROOT/scripts/launchers/unplatform_linux64_ssl.sh bundle/
        ;;
    'osx')
        cp $BUILD_ROOT/scripts/launchers/unplatform_osx_ssl.sh bundle/
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
        QBANK_FILE=$(find $BUILD_ROOT/tool-repos/qbank-lite-bundles/release/ -name qbank-lite*ubuntu* | sort -n | tail -1)
        ;;
esac
echo QBank-lite binary is $QBANK_FILE
cp $QBANK_FILE  $BUILD_ROOT/bundle/

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
