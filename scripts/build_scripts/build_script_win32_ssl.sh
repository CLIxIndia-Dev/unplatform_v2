#!/bin/bash

cd ..

find . -name "*.pyc" -type f -delete
find . -name ".DS_Store" -type f -delete
find . -name ".directory" -type f -delete

git pull

pip install -r unplatform_source/requirements.txt

rm -r unplatform_distributable/unplatform_win32

pyinstaller unplatform_source/unserver_ssl.py --clean --distpath unplatform_distributable -n unplatform_win32 -y

rm -r build
rm *.spec

mv unplatform_distributable/unplatform_win32/* unplatform_distributable/unplatform_win32/unplatform/

cp -r -v unplatform_source/common unplatform_distributable/unplatform_win32/unplatform/
cp -r -v unplatform_source/curriculum unplatform_distributable/unplatform_win32/unplatform/
cp -r -v unplatform_source/modules unplatform_distributable/unplatform_win32/unplatform/
cp -r -v unplatform_source/research unplatform_distributable/unplatform_win32/unplatform/
cp -r -v unplatform_source/unplatform unplatform_distributable/unplatform_win32/unplatform/
cp -r -v unplatform_source/locale unplatform_distributable/unplatform_win32/unplatform/

cp unplatform_source/unplatform.cert.dummy.pem unplatform_distributable/unplatform_win32/unplatform/
cp unplatform_source/unplatform.key.dummy.pem unplatform_distributable/unplatform_win32/unplatform/

cp unplatform_distributable/launchers/unplatform_win32_ssl.bat unplatform_distributable/unplatform_win32

FILE=$(find unplatform_distributable/qbank/ -name qbank-lite*.exe | sort -n | tail -1)
cp $FILE unplatform_distributable/unplatform_win32/

cp unplatform_distributable/data_extraction_scripts/DataExtractionScript.bat unplatform_distributable/unplatform_win32
cp unplatform_distributable/data_extraction_scripts/zipjs.bat unplatform_distributable/unplatform_win32

cp -r -v unplatform_distributable/readme unplatform_distributable/unplatform_win32/readme

VERSION=$(awk -F" = " '$1=="UNPLATFORM_VERSION"{print $2}' unplatform_source/unplatform/settings.py)
cd unplatform_distributable
zip -r "unplatform_v${VERSION//\'/}_win32.zip" unplatform_win32
