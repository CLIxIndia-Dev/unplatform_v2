# This is an NSIS script for creating an .exe installer on Windows.
#   https://sourceforge.net/p/nsis/code/HEAD/tree/

# To get a >2GB installer (because of all the modules), we actually
# use NSISBI, a fork that runs only on 64bit Windows.
#   https://sourceforge.net/projects/nsisbi/

# It assumes you have run the ``build_script_all_ssl.sh`` script,
# and copied over the ``webapps`` and ``modules`` into the
# bundle directory. Then, copy this script into the bundle
# directory, so the structure should be something like:
#
#   unplatform_win32_ssl.exe
#   unplatform_win32_ssl.bat
#   clix.nsi
#   modules/
#      Tools/
#   webapps/
#      CLIx/

# And compile the script with NSIS(BI). See the README for
# more detailed instructions and screenshots.

# The name of the installer exe file
OutFile "CLIxInstaller.exe"

# Default is zlib. Try lzma to get more compression.
SetCompressor "lzma"

# Set metadata
Name "CLIx"

# This is the icon that will appear in the Start Menu
Icon static\assets\clix.ico

# We don't need admin rights to run this app, so don't request them
RequestExecutionLevel "user"

# Default section for installer
Section
  # Install this in the user's app directory
  SetOutPath $LOCALAPPDATA\CLIx\CLIx

  # Check if the required msvcr100.dll library is on the system.
  # If not, prompt user to download / install.
  IfFileExists $SYSDIR\msvcr100.dll copyFiles dependencyError
  dependencyError:
    MessageBox MB_YESNO "Your system does not have msvcr100.dll installed. This is required to run CLIx. Download and install?" /SD IDYES IDNO endInstall
    DetailPrint "Downloading and installing Microsoft Visual Studio 2010 Redistributable"
    inetc::get "https://download.microsoft.com/download/5/B/C/5BC5DBB3-652D-4DCE-B14A-475AB85EEF6E/vcredist_x86.exe" "$TEMP\vcredist_x86.exe"
    ExecShellWait "open" "$TEMP\vcredist_x86.exe"

  copyFiles:
    # We'll move the directories first
    File /r licenses
    File /r modules
    File /r static
    File /r templates
    File /r unplatform
    File /nonfatal /r webapps  # They should have this...unless they are doing a
                               #   Tools-only build.

    # Now we move the individual files at the bundle root
    File unplatform_win32*
    File unplatform.sqlite3*
    File qbank*
    File zipjs.bat
    File md5.exe
    File *LICENSE*
    File *NOTICES*
    File *README*
    File package.json
    File *requirements.txt
    File DataExtractionScript.bat

  # Create an uninstaller for CLIx
  WriteUninstaller $LOCALAPPDATA\CLIx\uninstaller.exe

  # Also create a short-cut in the Start Menu
  CreateDirectory $SMPROGRAMS\CLIx
  CreateShortcut $SMPROGRAMS\CLIx\CLIx.lnk $LOCALAPPDATA\CLIx\CLIx\unplatform_win32_ssl.bat "" $LOCALAPPDATA\CLIx\CLIx\static\assets\clix.ico
  CreateShortcut $SMPROGRAMS\CLIx\uninstall.lnk $LOCALAPPDATA\CLIx\uninstaller.exe

  endInstall:
SectionEnd

# The uninstaller section
Section "Uninstall"
  # Delete the uninstaller first
  # In this section, $INSTDIR is where the ``uninstaller.exe`` file is
  #   located.
  Delete $INSTDIR\uninstaller.exe

  # Remove the data and executables from user's app directory
  RMDir /r $INSTDIR\CLIx

  # Remove the Start Menu shortcuts
  RMDir /r $SMPROGRAMS\CLIx
SectionEnd
