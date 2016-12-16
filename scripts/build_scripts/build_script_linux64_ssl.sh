#!/bin/bash

cd ..

rm -r build
rm *.spec
find . -name "*.pyc" -type f -delete
find . -name ".DS_Store" -type f -delete
find . -name ".directory" -type f -delete

git pull

pip install -r unplatform_source/requirements.txt

rm -r unplatform_distributable/unplatform_linux64/
mkdir unplatform_distributable/unplatform_linux64

pyinstaller unplatform_source/unserver_ssl.py --clean --distpath unplatform_distributable -n unplatform_linux64 -y

rm -r build
rm *.spec

mv unplatform_distributable/unplatform_linux64/* unplatform_distributable/unplatform_linux64/unplatform/

cp -r -v unplatform_source/common unplatform_distributable/unplatform_linux64/unplatform/
cp -r -v unplatform_source/curriculum unplatform_distributable/unplatform_linux64/unplatform/
cp -r -v unplatform_source/modules unplatform_distributable/unplatform_linux64/unplatform/
cp -r -v unplatform_source/research unplatform_distributable/unplatform_linux64/unplatform/
cp -r -v unplatform_source/unplatform unplatform_distributable/unplatform_linux64/unplatform/
cp -r -v unplatform_source/locale unplatform_distributable/unplatform_linux64/unplatform/

cp unplatform_source/unplatform.cert.dummy.pem unplatform_distributable/unplatform_linux64/unplatform/
cp unplatform_source/unplatform.key.dummy.pem unplatform_distributable/unplatform_linux64/unplatform/

cp unplatform_distributable/launchers/unplatform_linux64_ssl.sh unplatform_distributable/unplatform_linux64/

FILE=$(find unplatform_distributable/qbank/ -name qbank-lite*ubuntu* | sort -n | tail -1)
cp $FILE unplatform_distributable/unplatform_linux64/

cp unplatform_distributable/data_extraction_scripts/DataExtractionScript.bat unplatform_distributable/unplatform_linux64/
cp unplatform_distributable/data_extraction_scripts/zipjs.bat unplatform_distributable/unplatform_linux64/

cp -r -v unplatform_distributable/readme unplatform_distributable/unplatform_linux64/readme

VERSION=$(awk -F" = " '$1=="UNPLATFORM_VERSION"{print $2}' unplatform_source/unplatform/settings.py)
cd unplatform_distributable
zip -r "unplatform_v${VERSION//\'/}_linux64.zip" unplatform_linux64/
