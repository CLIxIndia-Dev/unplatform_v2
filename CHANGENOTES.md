## [2.3.2] - 2018-04-11
### Added
- StarLogoNova tool index.html was missing.

## [2.3.1] - 2018-04-11
### Fixed
- "Please wait" message while saving SLN models and fixed
  the redirect.

## [2.3.0] - 2018-04-10
### Added
- StarLogoNova Lite to build process, with updated API.

## [2.2.0] - 2018-04-04
### Added
- Sugar Labs to build process, as a tool.

## [2.1.1] - 2018-03-30
### Added
- More documentation in README.
- More tests for `utilities.py`.

## [2.1.0] - 2018-03-28
### Added
- Support for StarLogoNova API endpoints.

## [2.0.6] - 2018-03-20
### Changed
- Build script uses case insensitive search to copy
  license files.

## [2.0.5] - 2018-03-19
### Changed
- Renamed `Biomechanic` to `Run Kitty Run`.

## [2.0.4] - 2018-03-15
### Changed
- Added the folder names for navigating to lessons,
  with an ellipsis effect for long headings.

## [2.0.3] - 2018-03-01
### Fixed
- Truncate long names only at the view layer.

## [2.0.2] - 2018-03-01
### Changed
- Decreased size of focus ring dots.

## [2.0.1] - 2018-03-01
### Changed
- Lesson button size is same as Unit / Subject.
- Dot outline focus ring for breadcrumbs.
- Truncate and ellipsize button text.

## [2.0.0] - 2018-02-28
### Added
- Account for `diskcache` license in `qbank`.

### Changed
- Pull in `content_player` without pink focus indicator.
- Pull in `qbank` `3.16.0`.

## [1.6.15] - 2018-01-17
### Added
- Second linux launch script for non-Debian packages.

## [1.6.14] - 2018-01-08
### Added
- Instructions and files for bundling exe, dmg, and deb packages.

### Changed
- Standardize on npm; discard yarn.
- Updated content_player and OEA player / author.
  - Content Player includes:
    - Next / previous buttons
    - Citation button in footer, if ePub includes that metadata

### Fixed
- Single scrollbar (when used with updated content_player).
- Unplatform version styling in Tool page nav bar.

## [1.6.13] - 2017-12-8
### Added
- Manually copy in BeautifulSoup4 license.

## [1.6.12] - 2017-12-8
### Changed
- OS X processes start in individual terminal windows,
  instead of background processes.
- Set `os.chdir()` to make sure bundled files are found
  when running in an app bundle.

## [1.6.11] - 2017-12-4
### Added
- iframes to all the TISS tools in `/Modules/Tools`.
- License file for the WICG accessibility library.

### Changed
- Bumped React to 15.6.2.

### Removed
- Removed `Grades` from the navigational flow.

## [1.6.10] - 2017-11-1
### Fixed
- Modified listitem focusing pattern.
- Refactors homeview synthetic events.
- Tweaks CSS focus / active for improved UX.

## [1.6.9] - 2017-11-1
### Added
- TISS developed tools, to the static folder.

## [1.6.8] - 2017-10-25
### Added
- Bumping version to grab `2017.10.r1` release of OEA.

## [1.6.7] - 2017-10-25
### Added
- Bumping version to grab `2017.10.r1` release of content player.

## [1.6.6] - 2017-09-28
### Added
- Updates the `html` `lang` attribute, depending on the
  UI language / school configuration.

## [1.6.5] - 2017-09-22
### Added
- Accessibility enhancements to unplatform including:
- Color contrast
- Screen reader navigation
- Keyboard navigation
- Skip links
- Focus trap management
- Form validation on school config page
- Props validation on view components

### Changed
- Structure of CSS, code cleanup

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

[2.3.2]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.3.1...v2.3.2
[2.3.1]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.1.1...v2.2.0
[2.1.1]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.0.6...v2.1.0
[2.0.6]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.0.5...v2.0.6
[2.0.5]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.15...v2.0.0
[1.6.15]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.14...v1.6.15
[1.6.14]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.13...v1.6.14
[1.6.13]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.12...v1.6.13
[1.6.12]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.11...v1.6.12
[1.6.11]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.10...v1.6.11
[1.6.10]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.9...v1.6.10
[1.6.9]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.8...v1.6.9
[1.6.8]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.7...v1.6.8
[1.6.7]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.6...v1.6.7
[1.6.6]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.5...v1.6.6
[1.6.5]: https://github.com/CLIxIndia-Dev/unplatform_v2/compare/v1.6.4...v1.6.5
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
