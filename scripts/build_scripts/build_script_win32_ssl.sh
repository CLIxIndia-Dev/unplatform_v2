#!/bin/bash

cd ../../

find . -name "*.pyc" -type f -delete
find . -name ".DS_Store" -type f -delete
find . -name ".directory" -type f -delete

git pull

pip install -r requirements.txt

rm -rf bundle\
rm -r build\

WEBENV=test nosetests tests

pyinstaller main.spec

mv dist\main.exe bundle\unplatform.exe

mkdir bundle\static
cp -r static\ bundle\static\

mkdir bundle\unplatform
cp unplatform\unplatform.cert.dummy.pem bundle\unplatform\
cp unplatform\unplatform.key.dummy.pem bundle\unplatform\

cp scripts\launchers\unplatform_win32_ssl.bat bundle\

FILE=$(find external_packages\qbank\ -name qbank-lite*.exe | sort -n | tail -1)
cp $FILE bundle\$FILE

cp scripts\data_extraction_scripts\DataExtractionScript.bat bundle\
cp scripts\data_extraction_scripts\zipjs.bat bundle\

cp README bundle\

VERSION=$(python -c "import json; print json.load(open('package.json', 'rb'))['version']")
OUTPUT="unplatform_v${VERSION//\'/}_win32.zip"
zip -r $OUTPUT bundle

mv $OUTPUT bundle\$OUTPUT
