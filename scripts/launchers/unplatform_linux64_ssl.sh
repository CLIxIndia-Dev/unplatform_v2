./unplatform/unplatform_linux64 &
sleep 6
FILE=$(find . -name qbank-lite*ubuntu* | sort -n | tail -1)
./$FILE
google-chrome https://localhost:8888
