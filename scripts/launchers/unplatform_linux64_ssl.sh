#!/bin/bash
# generate relative paths for running this from a bundle
UNPLATFORM_WD=`pwd`
gnome-terminal -x bash -c "echo 'Keep this window open to run the CLIx modules.'; $UNPLATFORM_WD/unplatform_linux64_ssl"
sleep 6
FILE=$(find . -name qbank-lite*ubuntu* | sort -n | tail -1)
gnome-terminal -x bash -c "echo 'Keep this window open to run the CLIx assessment engine.'; $UNPLATFORM_WD/$FILE"
google-chrome https://localhost:8888
