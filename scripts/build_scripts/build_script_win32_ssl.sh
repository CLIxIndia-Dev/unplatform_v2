#!/bin/bash

cd ../../

# reset the directory to get rid of previous build artifacts
git clean -x -d

# update the virtualenvironment
pip install -r requirements.txt

# run the existing server-side API tests
WEBENV=test nosetests tests

# LOGIC here to stop the script if it fails

# build the unplatform executable and copy / move it to the final output directory
pyinstaller main.spec
mv dist/main.exe bundle/unplatform.exe

# copy of the UI static files (pre-generated somehow -- not sure if we want to generate them, here?)
mkdir bundle/static
cp -r static/ bundle/static/

# copy over the self-signed SSL certs
mkdir bundle/unplatform
cp unplatform/unplatform.cert.dummy.pem bundle/unplatform/
cp unplatform/unplatform.key.dummy.pem bundle/unplatform/

# copy over the "launcher" bat file that opens the unplatform and qbank executables
cp scripts/launchers/unplatform_win32_ssl.bat bundle/

# find and copy the latest qbank executable that should be included with this release
FILE=$(find external_packages/qbank/ -name qbank-lite*.exe | sort -n | tail -1)
cp $FILE bundle/$FILE

# copy over utility files for FSP data extraction
cp scripts/data_extraction_scripts/DataExtractionScript.bat bundle/
cp scripts/data_extraction_scripts/zipjs.bat bundle/

# copy the README
cp README.md bundle/

# Zip up the final bundle/ directory and name the file per the unplatform version
VERSION=$(python -c "import json; print json.load(open('package.json', 'rb'))['version']")
OUTPUT="unplatform_v${VERSION//\'/}_win32.zip"
zip -r $OUTPUT bundle

# move the final zipped file to the bundle directory, to keep our repo clean
mv $OUTPUT bundle/$OUTPUT
