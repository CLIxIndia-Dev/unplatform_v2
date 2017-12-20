#!/bin/bash
# hardcode the paths since we know the .deb
#   package installs to /opt/clix.
x-terminal-emulator -e /opt/clix/unplatform_linux64_ssl
sleep 6
FILE=$(find . -name qbank-lite*ubuntu* | sort -n | tail -1)
x-terminal-emulator -e /opt/clix/$FILE
google-chrome https://localhost:8888
