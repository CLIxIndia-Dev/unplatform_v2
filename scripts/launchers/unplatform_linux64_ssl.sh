./unplatform_linux64_ssl &
sleep 6
FILE=$(find . -name qbank-lite*ubuntu* | sort -n | tail -1)
./$FILE
google-chrome https://localhost:8888
