## [1.6.4] - 2017-08-30
### Added
- `pylint` to testing configuration.
- Title attribute to tool iframes.
- Set the `lang` attribute in the content player.

### Changed
- Content player title.
- OEA player title.

## [1.6.3] - 2017-08-29
### Changed
- Use `unicode_literals` for all of `main.py`, to fix Windows issue
  with paths.

## [1.6.2] - 2017-08-29
### Changed
- How unicode file paths are handled within Tools.

## [1.6.1] - 2017-07-28
### Changed
- The `save` action in school configuration re-routes to the root path.

## [1.6.0] - 2017-07-14
### Added
- MD5 checksum on the data extraction zip file.

## [1.5.1] - 2017-07-12
### Added
- Write-Ahead Logging configuration enabled for `sqlite3`.

## [1.5.0] - 2017-07-11
### Added
- Support for `userId` and `user_id` in the generic logging endpoint.

## [1.4.1] - 2017-06-26
### Changed
- Handle multi-language options in Run Kitty Run tool.

## [1.3.19] - 2017-06-13
### Changed
- Run Kitty Run repository updated to new name.
- PoliceQuad and Run Kitty Run tools pull from the `en` folder.

## [1.3.18] - 2017-06-05
### Added
- Notices and third-party software license documentation.

## [1.3.17] - 2017-05-24
### Fixed
- Directory names in the Windows data extraction batch file.

## [1.3.16] - 2017-05-16
### Fixed
- Put in build step for OEA, into build script.

## [1.3.15] - 2017-05-16
### Added
- Build setting for OEA `unlock_prev`.

## [1.3.14] - 2017-05-11
### Changed
- Build scripts consolidated into a generic OS script.

## [1.3.13] - 2017-05-11
### Changed
- Rename `Bio- Mechanics` tool to `Run Kitty Run`.

## [1.3.12] - 2017-05-09
### Fixed
- CSS on `HomeView` / survey page.

## [1.3.11] - 2017-05-08
### Changed
- Update README to include instructions on setting up `sqlite`
  for session management.

## [1.3.10] - 2017-04-07
### Changed
- Revert closing of file pointer when streaming files.

## [1.3.9] - 2017-04-05
### Changed
- Use `policequad` repository with latest TISS code, instead of
  `police-quad`.

## [1.3.8] - 2017-04-04
### Fixed
- Updated `.spec` file for `sqlite`.
- Change config setting method to use `os.makedirs`.

## [1.3.7] - 2017-04-04
### Added
- Python script to standup the SQLite session DB.

### Changed
- Change AssetContent streaming to allow for `Accept Range` header.
- Change session management to SQLite, instead of Disk.
- Updated OS X and Windows build scripts to manage SQLite DB.
- Updated Travis CI file for SQLite DB.

## [1.3.6] - 2017-04-03
### Added
- Fix OS X and Win build scripts to copy `package.json` to bundle.

## [1.3.5] - 2017-03-28
### Added
- Add acknowledgements in README.

1.3.4:
  - Fix windows build script; copy qbank executable.

1.3.3:
  - Include OEA and content player configs in this repo.
  - Update build scripts to use OEA and content player configs.

1.3.2:
  - Minor fixes to tools view/removes multiple scrollbars.
  - Fix the z-index of header to appear above tools.

1.3.1:
  - Minor fixes to OS X build script.

1.3.0:
  - Add session timeout warning modal. Requires `content_player` v1.1.0.

1.2.10:
  - Fix the multiple scrollbars.
  - Fix the z-index of the unplatform header to appear above content.
  - Begins reworking Homeview component for keyboard accessibility.

1.2.9:
  - Fix the template copy.

1.2.8:
  - Copy template directories on windows build.

1.2.7:
  - Remove background image on indidivual tool page.
  - Attempt to make tool iframes wider.

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

[1.6.4]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.3...v1.6.4
[1.6.3]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.2...v1.6.3
[1.6.2]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.5.1...v1.6.0
[1.5.1]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.4.1...v1.5.0
[1.4.1]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.19...v1.4.1
[1.3.19]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.18...v1.3.19
[1.3.18]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.17...v1.3.18
[1.3.17]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.16...v1.3.17
[1.3.16]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.15...v1.3.16
[1.3.15]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.14...v1.3.15
[1.3.14]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.13...v1.3.14
[1.3.13]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.12...v1.3.13
[1.3.12]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.11...v1.3.12
[1.3.11]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.10...v1.3.11
[1.3.10]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.9...v1.3.10
[1.3.9]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.8...v1.3.9
[1.3.8]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.7...v1.3.8
[1.3.7]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.6...v1.3.7
[1.3.6]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.5...v1.3.6
[1.3.5]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.3.4...v1.3.5
