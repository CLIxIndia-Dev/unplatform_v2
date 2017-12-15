x-terminal-emulator -e `pwd`/unplatform_linux64_ssl
sleep 6
FILE=$(find . -name qbank-lite*ubuntu* | sort -n | tail -1)
x-terminal-emulator -e `pwd`/$FILE
google-chrome https://localhost:8888
