#!/bin/bash
./unplatform/unplatform_osx &
sleep 6
./unplatform/unplatform_osx_worker &
./qbank-lite-v0.0.65-mac-ssl &
/usr/bin/open -a "/Applications/Google Chrome.app" 'https://localhost:8888/'