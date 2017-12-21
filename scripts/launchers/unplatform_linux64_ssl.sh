#!/bin/bash
# hardcode the paths since we know the .deb
#   package installs to /opt/clix.
gnome-terminal -x bash -c "echo 'Keep this window open to run the CLIx modules.'; /opt/clix/unplatform_linux64_ssl"
sleep 6
FILE=$(find . -name qbank-lite*ubuntu* | sort -n | tail -1)
gnome-terminal -x bash -c "echo 'Keep this window open to run the CLIx assessment engine.'; /opt/clix/$FILE"
google-chrome https://localhost:8888
