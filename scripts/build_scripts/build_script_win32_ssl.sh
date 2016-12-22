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
rm -rf tool-repos/
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
mkdir tool-repos
cd tool-repos

# find and copy the latest qbank executable that should be included with this release
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/qbank-lite-bundles.git
cp qbank-lite-bundles/release/qbank-lite*.exe ../bundle/

# Content player
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/content_player.git
cd content_player
cp .env.example .env
npm install
npm run build
mkdir ../../bundle/static/content_player
cp -r build/prod/* ../../bundle/static/content_player/

# OEA Open Embedded Assessments
cd ..
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/OpenAssessmentsClient.git
cd OpenAssessmentsClient
cp .env.example .env
npm install
npm run build
mkdir ../../bundle/static/oea
cp -r build/prod/* ../../bundle/static/oea/

# biomechanics grame
cd ..
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/biomechanic.git
rm -rf biomechanic/.git/
mv biomechanic/ ../bundle/static/

# Physics Video player
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/physics-video-player.git
rm -rf physics-video-player/.git/
mv physics-video-player/ ../bundle/static/

# Audio record tool
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/audio-record-tool.git
rm -rf audio-record-tool/.git/
mv audio-record-tool/ ../bundle/static/

# Police Quad
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/police-quad.git
rm -rf police-quad/.git/
mv police-quad/ ../bundle/static/

# Open Story tool
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/open-story-tool.git
rm -rf open-story-tool/.git/
mv open-story-tool/ ../bundle/static/

# let's get back out of tool-repos and go to the root directory
cd ..

# Zip up the final bundle/ directory and name the file per the unplatform version
VERSION=$(python -c "import json; print json.load(open('package.json', 'rb'))['version']")
OUTPUT="unplatform_v${VERSION//\'/}_win32_ssl.zip"
# can also add -T -m options if we don't want to keep the source files
zip -r  -q $OUTPUT bundle && echo "bundle zipped" || echo "error zipping bundle"

# move the final zipped file to the bundle directory, to keep our repo clean
mv $OUTPUT bundle/$OUTPUT
