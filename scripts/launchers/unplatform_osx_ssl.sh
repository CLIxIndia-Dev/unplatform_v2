#!/bin/bash
UNPLATFORM_SCRIPT=`pwd`/unplatform_osx_ssl
# Terminal escapes spaces with double \\
UNPLATFORM_SCRIPT=${UNPLATFORM_SCRIPT// /\\\\ }
echo Running unplatform from $UNPLATFORM_SCRIPT
osascript -e "tell app \"Terminal\" to do script \"echo 'Keep this window open to run CLIx modules' && $UNPLATFORM_SCRIPT\""
sleep 3

FILE=$(find . -name qbank-lite* | sort -n | tail -1)
QBANK_SCRIPT=`pwd`/$FILE
# Terminal escapes spaces with double \\
QBANK_SCRIPT=${QBANK_SCRIPT// /\\\\ }
echo Running qbank from $QBANK_SCRIPT
osascript -e "tell app \"Terminal\" to do script \"echo 'Keep this window open to run the CLIx assessment engine' && $QBANK_SCRIPT\""
sleep 3

/usr/bin/open -a "/Applications/Google Chrome.app" 'https://localhost:8888/'
