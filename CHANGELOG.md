# Release Notes for the Sikessem Starter

All notable changes to [Starter](https://github.com/sikessem/starter) will be documented in this file.

## [Unreleased](https://github.com/sikessem/starter/compare/v0.2.0...HEAD)

**Full Changelog:** [v0.1.0...v0.2.0](https://github.com/sikessem/starter/compare/v0.1.0...v0.2.0)

## [v0.2.0](https://github.com/sikessem/starter/releases/tag/v0.2.0) - 2023-11-21

- Improved documentation
- Improved the tests workflow

## [v0.1.0](https://github.com/sikessem/starter/releases/tag/v0.1.0) - 2023-11-19

- Improved the structure of the `resources` directory

## [v0.0.1](https://github.com/sikessem/starter/releases/tag/v0.0.1) - 2023-11-07

- Updated the [sikessem/framework](https://github.com/sikessem/framework) to the latest version.
- Fixed and improved README by @szepeviktor in https://github.com/sikessem/starter/pull/1.
- Fixed #2: Renamed the `app/res/views/` and `app/res/` directories to `templates/` and `resources/` respectively.
- Moved files from the `app/src/` directory to the `app/` directory to respect the Laravel project structure.
- Added a new directory `src/` with the namespace `My\` for developing application-independent packages.
- Fixed #3: Improved workflows by separating assets building and app serving into jobs and added a workflow for end-to-end testing.
