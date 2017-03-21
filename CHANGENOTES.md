1.2.6:
  - Add `npm install` command for `client` directory
    for OEA.

1.2.5:
  - Return modules list in natural sorted order.

1.2.4:
  - Change how sessions are managed and expire.
  - Set default session expiration to 15 minutes of inactivity.
  - Update UI components to not store in localstorage.
  - Update UI components to redirect to home, if the
    session expires.
  - Remove redundant / permanent "configure school here"
    link.

1.2.3:
  - Refactor how to pull version for web route.

1.2.2:
  - Refactor Windows build script to use compile:ui:only
    command.

1.2.1:
  - Fix OS X launcher script to use found qbank executable.
  - Account for trailing slash on /oea route.

1.2.0
  - merge in TravisCI configuration for automated testing.

1.1.0
  - Updated the data extraction script for unplatform to 
    copy the JSON files instead of the .sqlite3 file.

1.0.0
  - Initial release with working Windows build script
