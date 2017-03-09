#!/bin/bash

# This script assumes that you have checked out the desired release / version
#   that you want to build

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
  linux)
    OS='Linux'
    UN2_BUILD_OS="linux"
    ;;
  'freebsd')
    OS='FreeBSD'
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
#   like ui/node_modules (building the UI) and modules/
# also force git to remove the tool repos
# git clean -x -d -f -f
rm -rf bundle/
rm -rf build/
rm -rf dist/

# find . -type f -name .DS_Store -exec rm -f '{}' \;
find . -type f -name '*.pyc' -exec rm -f '{}' \;

if [ ! -d "bundle" ]
then
  mkdir bundle/
fi
if [ ! -d "bundle/static" ]
then
  mkdir bundle/static
fi

# update the virtual environment
pip install -r requirements.txt
pip install -r test_requirements.txt

# generate the UI
echo Generating the UI...
cd ui
yarn install
cd ..

case $UN2_BUILD_OS in
    'windows')
        echo Compiling only UI for Windows...
        yarn run compile:ui:only
        ;;
    *)
        echo Compiling the UI...
        yarn run compile:ui
        ;;
esac

cp -r static/assets/ bundle/static/assets/
if [ ! -d "bundle/static/ui" ]
then
  mkdir -p bundle/static/ui
fi

cp -r static/ui/. bundle/static/ui

# run the existing server-side API tests
# run tests after generating the UI, because some test for presence of index.html
WEBENV=test nosetests tests

# Once the tests are complete, remove build artifacts from '/static/' directory
# rm -rf static/ui

# copy over the self-signed SSL certs
mkdir bundle/unplatform
cp unplatform/unplatform.cert.dummy.pem bundle/unplatform/
cp unplatform/unplatform.key.dummy.pem bundle/unplatform/

# LOGIC here to stop the script if it fails

# copy the Tools in modules over
mkdir bundle/modules
cp -r modules/* bundle/modules/

# copy the README
cp README.md bundle/

# generate the latest releases of each tool, from the release branch
if [ ! -d "tool-repos" ]
then
  mkdir tool-repos
fi
cd tool-repos

# Content player
if [ ! -d "content_player" ]
then
  git clone git@github.com:CLIxIndia-Dev/content_player.git
  cp content_player/.env.example content_player/.env
fi
cd content_player
git checkout release
git pull origin release
yarn install
yarn run build
mkdir ../../bundle/static/content_player/
cp -rf build/prod/* ../../bundle/static/content_player/
rm -rf ../../bundle/static/content_player/.git/

# OEA Open Embedded Assessments
cd ..

if [ ! -d "OpenAssessmentsClient" ]
then
  git clone git@github.com:CLIxIndia-Dev/OpenAssessmentsClient.git
  # cp OpenAssessmentsClient/.env.example OpenAssessmentsClient/.env
fi
cd OpenAssessmentsClient
git checkout release
git pull origin release
# revert to npm for now
# until they fix issue 1657? yarn seems broken on Windows, partially
yarn install
yarn run build
mkdir ../../bundle/static/oea/
cp -rf build/prod/* ../../bundle/static/oea/
rm -rf ../../bundle/static/oea/.git/

# biomechanics game
cd ..

if [ ! -d "biomechanic" ]
then
  git clone git@github.com:CLIxIndia-Dev/biomechanic.git
fi
cd biomechanic
git checkout release
git pull origin release
cd ..
mkdir ../bundle/static/biomechanic/
cp -rf biomechanic/* ../bundle/static/biomechanic/
rm -rf ../bundle/static/biomechanic/.git/

# Physics Video player
if [ ! -d "physics-video-player" ]
then
  git clone git@github.com:CLIxIndia-Dev/physics-video-player.git
fi
cd physics-video-player
git checkout release
git pull origin release
cd ..
mkdir ../bundle/static/physics-video-player/
cp -rf physics-video-player/* ../bundle/static/physics-video-player/
rm -rf ../bundle/static/physics-video-player/.git/

# Audio record tool
if [ ! -d "audio-record-tool" ]
then
  git clone git@github.com:CLIxIndia-Dev/audio-record-tool.git
fi
cd audio-record-tool
git checkout release
git pull origin release
cd ..
mkdir ../bundle/static/audio-record-tool/
cp -rf audio-record-tool/* ../bundle/static/audio-record-tool/
rm -rf ../bundle/static/audio-record-tool/.git/

# Police Quad
if [ ! -d "police-quad" ]
then
  git clone git@github.com:CLIxIndia-Dev/police-quad.git
fi
cd police-quad
git checkout release
git pull origin release
cd ..
mkdir ../bundle/static/police-quad/
cp -rf police-quad/* ../bundle/static/police-quad/
rm -rf ../bundle/static/police-quad/.git/

# Open Story tool
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

# Turtle Blocks tool
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

# find and copy the latest qbank executable that should be included with this release
# FILE=$(find external_packages/qbank/ -name qbank-lite*mac | sort -n | tail -1)
# cp $FILE bundle/$FILE
if [ ! -d "qbank-lite-bundles" ]
then
  git clone git@github.com:CLIxIndia-Dev/qbank-lite-bundles.git
fi
cd qbank-lite-bundles
git checkout release
git pull origin release
cd ..

# let's get back out of tool-repos and go to the root directory
cd ..

# build the unplatform executable and copy / move it to the final output directory
pyinstaller main.spec

echo path following call to pyinstaller is `pwd`

case $UN2_BUILD_OS in
    'windows')
        mv dist/main bundle/unplatform_win32_ssl.exe
        ;;
    'linux')
        mv dist/main bundle/unplatform_linux64_ssl
        ;;
    'osx')
        mv dist/main bundle/unplatform_osx_ssl
        ;;
esac


# copy over the "launcher" bat file that opens the unplatform and qbank executables
case $UN2_BUILD_OS in
    'windows')
        cp scripts/launchers/unplatform_win32_ssl.bat bundle/
        # copy over utility files for FSP data extraction
        cp scripts/data_extraction/DataExtractionScript.bat bundle/
        cp scripts/data_extraction/zipjs.bat bundle/
        # make sure to copy the msvcr100.dll from the system into bundle/
        # otherwise you'll run into an error on deployments
        cp C:\\Windows\\System32\\msvcr100.dll bundle/
       ;;
    'linux')
        cp scripts/launchers/unplatform_linux64_ssl.sh bundle/
        ;;
    'osx')
        cp scripts/launchers/unplatform_osx_ssl.sh bundle/
        ;;
esac

# for now ... change this to appropriate platform build later
cp $BUILD_ROOT/tool-repos/qbank-lite-bundles/release/qbank-lite*ubuntu* $BUILD_ROOT/bundle/

# Zip up the final bundle/ directory and name the file per the unplatform version
VERSION=$(python -c "import json; print json.load(open('package.json', 'rb'))['version']")
OUTPUT="unplatform_v${VERSION//\'/}_osx.zip"
# can also add -T -m options if we don't want to keep the source files
zip -r  -q $OUTPUT bundle && echo "bundle zipped" || echo "error zipping bundle"

# move the final zipped file to the bundle directory, to keep our repo clean
mv $BUILD_ROOT/$OUTPUT $BUILD_ROOT/bundle/$OUTPUT
