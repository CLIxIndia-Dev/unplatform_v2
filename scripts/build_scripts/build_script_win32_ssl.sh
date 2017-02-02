#!/bin/bash

# This script assumes that you have checked out the desired release / version
#   that you want to build

cd ../../

# reset the directory to get rid of previous build artifacts
# Tradeoff of using git clean here, is that it also removes useful things
#   like ui/node_modules (building the UI) and modules/
# also force git to remove the tool repos
# git clean -x -d -f -f
rm -rf bundle/
rm -rf build/
rm -rf dist/
# rm -rf tool-repos/
# find tool-repos/ ! -path "*/node_modules/*" -delete
rm -rf static/ui
# find . -type f -name .DS_Store -exec rm -f {} \;

mkdir bundle/

# update the virtualenvironment
pip install -r requirements.txt

# generate the UI
cd ui
npm install
cd ..
mkdir -p static/ui
npm run compile:ui
cp -r static/ bundle/

# run the existing server-side API tests
# run tests after generating the UI, because some test for presence of index.html
WEBENV=test nosetests tests

# LOGIC here to stop the script if it fails

# build the unplatform executable and copy / move it to the final output directory
pyinstaller main.spec
mv dist/main.exe bundle/unplatform_win32_ssl.exe

# copy over the self-signed SSL certs
mkdir bundle/unplatform
cp unplatform/unplatform.cert.dummy.pem bundle/unplatform/
cp unplatform/unplatform.key.dummy.pem bundle/unplatform/

# copy over the "launcher" bat file that opens the unplatform and qbank executables
cp scripts/launchers/unplatform_win32_ssl.bat bundle/

# copy the Tools in modules over
mkdir bundle/modules
cp -r modules/* bundle/modules/

# copy over utility files for FSP data extraction
cp scripts/data_extraction/DataExtractionScript.bat bundle/
cp scripts/data_extraction/zipjs.bat bundle/

# copy the README
cp README.md bundle/

# generate the latest releases of each tool, from the release branch
if [ ! -d "tool-repos" ]
then
  mkdir tool-repos
fi
cd tool-repos

# find and copy the latest qbank executable that should be included with this release
if [ ! -d "qbank-lite-bundles" ]
then
  git clone git@github.com:CLIxIndia-Dev/qbank-lite-bundles.git
fi
cd qbank-lite-bundles
git checkout release
git pull origin release
cd ..
cp qbank-lite-bundles/release/qbank-lite*.exe ../bundle/

# Content player
if [ ! -d "content_player" ]
then
  git clone git@github.com:CLIxIndia-Dev/content_player.git
  cp content_player/.env.example content_player/.env
fi
cd content_player
git checkout release
git pull origin release
npm install
npm run build
mkdir ../../bundle/static/content_player
cp -r build/prod/* ../../bundle/static/content_player/

# OEA Open Embedded Assessments
cd ..

if [ ! -d "OpenAssessmentsClient" ]
then
  git clone git@github.com:CLIxIndia-Dev/OpenAssessmentsClient.git
  cp OpenAssessmentsClient/.env.example OpenAssessmentsClient/.env
fi
cd OpenAssessmentsClient
git checkout release
git pull origin release
npm install
npm run build
mkdir ../../bundle/static/oea
cp -r build/prod/* ../../bundle/static/oea/

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
find biomechanic/ -type f -not -path '*/.git/*' -exec cp '{}' '../bundle/static/biomechanic/{}' \;

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
find physics-video-player/ -type f -not -path '*/.git/*' -exec cp '{}' '../bundle/static/physics-video-player/{}' \;

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
find audio-record-tool/ -type f -not -path '*/.git/*' -exec cp '{}' '../bundle/static/audio-record-tool/{}' \;

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
find police-quad/ -type f -not -path '*/.git/*' -exec cp '{}' '../bundle/static/police-quad/{}' \;

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
find open-story-tool/ -type f -not -path '*/.git/*' -exec cp '{}' '../bundle/static/open-story-tool/{}' \;

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
find turtle-blocks/ -type f -not -path '*/.git/*' -exec cp '{}' '../bundle/static/turtle-blocks/{}' \;

# let's get back out of tool-repos and go to the root directory
cd ..

# make sure to copy the msvcr100.dll from the system into bundle/
# otherwise you'll run into an error on deployments
cp C:\\Windows\\System32\\msvcr100.dll bundle/

# Zip up the final bundle/ directory and name the file per the unplatform version
VERSION=$(python -c "import json; print json.load(open('package.json', 'rb'))['version']")
OUTPUT="unplatform_v${VERSION//\'/}_win32_ssl.zip"
# can also add -T -m options if we don't want to keep the source files
zip -r  -q $OUTPUT bundle && echo "bundle zipped" || echo "error zipping bundle"

# move the final zipped file to the bundle directory, to keep our repo clean
mv $OUTPUT bundle/$OUTPUT
