#!/bin/bash

# This script assumes that you have checked out the desired release / version
#   that you want to build

cd ../../

# reset the directory to get rid of previous build artifacts
# Tradeoff of using git clean here, is that it also removes useful things
#   like ui/node_modules (building the UI) and modules/
# also force git to remove the tool repos
git clean -x -d -f -f
# rm -rf bundle/
# rm -rf build/
# rm -rf dist/
# rm -rf tool-repos/
# find . -type f -name .DS_Store -exec rm -f {} \;

mkdir bundle/

# update the virtualenvironment
pip install -r requirements.txt

# run the existing server-side API tests
WEBENV=test nosetests tests

# LOGIC here to stop the script if it fails

# build the unplatform executable and copy / move it to the final output directory
pyinstaller main.spec
mv dist/main bundle/unplatform_osx_ssl

# generate the UI
cd ui
npm install
cd ..
npm run compile:ui
mkdir bundle/static
cp -r static/ bundle/static/

# copy over the self-signed SSL certs
mkdir bundle/unplatform
cp unplatform/unplatform.cert.dummy.pem bundle/unplatform/
cp unplatform/unplatform.key.dummy.pem bundle/unplatform/

# copy over the "launcher" bat file that opens the unplatform and qbank executables
cp scripts/launchers/unplatform_osx_ssl.sh bundle/

# copy over utility files for FSP data extraction
cp scripts/data_extraction/DataExtractionScript.bat bundle/
cp scripts/data_extraction/zipjs.bat bundle/

# copy the README
cp README.md bundle/

# generate the latest releases of each tool, from the release branch
mkdir tool-repos
cd tool-repos

# find and copy the latest qbank executable that should be included with this release
# FILE=$(find external_packages/qbank/ -name qbank-lite*mac | sort -n | tail -1)
# cp $FILE bundle/$FILE
git clone -b release --single-branch git@github.com:CLIxIndia-Dev/qbank-lite-bundles.git

# for now ... change this to appropriate platform build later
cp qbank-lite-bundles/release/qbank-lite*ubuntu* ../bundle/

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
OUTPUT="unplatform_v${VERSION//\'/}_osx.zip"
zip -r  -q $OUTPUT bundle && echo "bundle zipped" || echo "error zipping bundle"

# move the final zipped file to the bundle directory, to keep our repo clean
mv $OUTPUT bundle/$OUTPUT
