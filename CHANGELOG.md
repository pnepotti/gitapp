# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2021-06-14

### Added

-   Alerta que indica que un movimiento se guardó con éxito
-   Campo Description al modelo

### Fixed

-   Arregla headers de las cards de los gráficos
-   Arregla problema que hace que todos los movimientos se creen con la
fecha del día y no con la fecha ingresada

## [1.0.1] - 2021-05-03

### Added

-   Cypress detection for running tests on memory
-   Cypress seed before each cypress test

### Changed

-   Creates tables on server init and avoids erase on shutdown

### Removed

-   Cypress experimental configuration

## [1.0.0] - 2021-04-26

### Added

-   Movements API
-   Home UI with charts and last movements
-   Incomes UI with last incomes

[unreleased]: https://github.com/pnepotti/gitapp/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/pnepotti/gitapp/releases/tag/v1.1.0
[1.0.1]: https://github.com/pnepotti/gitapp/releases/tag/v1.0.1
[1.0.0]: https://github.com/pnepotti/gitapp/releases/tag/v1.0.0
