@echo off

start /MIN "unplatform" unplatform_win32_ssl.exe
ping localhost

FOR /F "delims=|" %%I IN ('DIR "qbank-lite*.exe" /B /O:N') DO SET NewestQBank=%%I
start /MIN "qbank" "%NewestQBank%"
start chrome https://localhost:8888
