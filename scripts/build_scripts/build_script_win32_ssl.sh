#!/bin/bash

cd ../../

find . -name "*.pyc" -type f -delete
find . -name ".DS_Store" -type f -delete
find . -name ".directory" -type f -delete

git pull

pip install -r requirements.txt

rm -rf bundle/

WEBENV=test nosetests tests

npm run compile:ui
pyinstaller main.spec

rm -r build

mv dist/main bundle
cp -r static/ bundle

cp unplatform/unplatform.cert.dummy.pem bundle/unplatform/
cp unplatform/unplatform.key.dummy.pem bundle/unplatform/

cp scripts/launchers/unplatform_win32_ssl.bat bundle/

FILE=$(find unplatform_distributable/qbank/ -name qbank-lite*.exe | sort -n | tail -1)
cp $FILE bundle/

cp scripts/data_extraction_scripts/DataExtractionScript.bat bundle/
cp scripts/data_extraction_scripts/zipjs.bat bundle/

cp -r README bundle/

VERSION=$(awk -F": " '$1=="version"{print $2}' package.json)
zip -r "unplatform_v${VERSION//\'/}_win32.zip" bundle
