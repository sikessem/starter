# Release Notes for the Sikessem Starter

All notable changes to [Starter](https://github.com/sikessem/starter) will be documented in this file.

## [v0.0.1](https://github.com/sikessem/starter/releases/tag/v0.0.1) - 2023-11-07

- Updated the [sikessem/framework](https://github.com/sikessem/framework) to the latest version improve the project structure.
- Fixed #2: Renamed the `app/res/views/` and `app/res/` directories to `templates/` and `resources/` respectively.
- Moved files from the `app/src/` directory to the `app/` directory to respect the Laravel project structure.
- Added a new directory `src/` with the namespace `My\` for developing application-independent packages.
- Fixed #3: Improved workflows by separating asset building and application serving into tasks and added a workflow for end-to-end testing.

## [Unreleased](https://github.com/sikessem/starter/compare/v0.0.1...HEAD)

**Full Changelog:** [v0.0.0...v0.0.1](https://github.com/sikessem/starter/compare/v0.0.0...v0.0.1)