# info-card

This project uses [VueJS](https://vuejs.org).

> This is where you include your project's documentation.

## Global dependencies

Requires Gulp globally installed:

```shell
npm install --global gulp
```

## Building the code

Download & install all dependencies, build, bundle & package the project

```shell
# download & install dependencies
npm install

# transpile all TypeScript & SCSS => JavaScript & CSS
gulp build

# create component bundle & manifest
gulp bundle

# create SharePoint package
gulp package-solution
```

These commands produce the following:

- **./lib**: intermediate-stage commonjs build artifacts
- **./dist**: bundled script, along with other resources
- **./temp/deploy**: all resources required by component(s) to deploy to a CDN (when `--ship` argument present)

## Build options

- `gulp clean`: Deletes all build output (**/dist**, **/lib**, **/temp**, etc.).
- `gulp build`: Transpiles all TypeScript & SCSS to JavaScript & CSS, generates source map files & TypeScript type declaration files
- `gulp bundle [--ship|-p|--production]`: Runs gulp task **build**, then uses webpack to create the JavaScript bundle(s) and component manifest(s) as defined in **./config/config.json**. The `--ship`, `-p` or `--production` argument specifies a production build that will generate minified bundles.
- `gulp serve [--ship|-p|--production]`: Runs gulp tasks **build**, **bundle** & starts the local webserver. Depending on the project type, it opens the browser and navigates to the local workbench or specified URL (in the case of extension components). The `--ship`, `-p` or `--production` argument specifies a production build that modifies the resulting package for production hosting rather than local hosting of assets.
- `gulp package-solution`: Creates the SharePoint Package (**.sppkg**) file.
- `gulp dist`: Creates a production-ready SharePoint Package (**.sppkg**) file. The following gulp task gets executed in this specific order `gulp clean`, `gulp bundle`, `gulp package-solution.`
- `gulp dev`: Creates a development-ready SharePoint Package (**.sppkg**) file. The following gulp task will be executed in this specific order `gulp clean`, `gulp bundle`, `gulp package-solution.`

> View all available gulp tasks by running `gulp --tasks`

More information on [SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)

Generated with [pnp/spfx](https://github.com/pnp/generator-spfx/).

## Требования
```bush
python2 --version
  Python 2.7.18

python3 --version
  Python 3.11.0

nvm -v
  1.1.10
```
## Инструкция по установке
```bush
# Если не установлены глобальные пакеты
nvm use 14.17.5

npm i gulp --global
npm i yo --global
npm i @microsoft/generator-sharepoint --global
npm i @pnp/generator-spfx --global

# ---
git clone <url> -b <branchName>
cd <appName>

nvm use 10.24.0

npm i
gulp build
gulp serve

# https://localhost:4321/temp/workbench.html
```

## История инициализации
```bush
nvm use 14.17.5

npm i gulp --global
npm i yo --global
npm i @microsoft/generator-sharepoint --global
npm i @pnp/generator-spfx --global

yo @pnp/spfx

Удалить папку node_modules
nvm use 10.24.0

npm i
gulp trust-dev-cert

В node_modules\vue\types\jsx.d.ts заменить 39 строку на [v: string]: string | number | undefined
В node_modules\vue\types\v3-directive.d.ts заменить import type { VNodeDirective, VNode } from './vnode' на import { VNodeDirective, VNode } from './vnode'

 В config\serve.json
  - поменять "initialPage": "https://localhost:5432/workbench", на "initialPage": "https://localhost:2345/workbench",
  - в блоке "api" поменять порт с 5432 на 2345


gulp build
gulp serve

https://localhost:4321/temp/workbench.html

```
