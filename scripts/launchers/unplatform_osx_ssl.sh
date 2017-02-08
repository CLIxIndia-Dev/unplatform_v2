#!/bin/bash
./unplatform_osx_ssl &
sleep 6

FILE=$(find . -name qbank-lite*ubuntu* | sort -n | tail -1)
./$FILE &
/usr/bin/open -a "/Applications/Google Chrome.app" 'https://localhost:8888/'