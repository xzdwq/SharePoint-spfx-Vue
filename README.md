### Инструкция по установке

1. Если не установлены глобальные пакеты под нодой `14.17.5`:
```bush
nvm use 14.17.5

npm i gulp yo @microsoft/generator-sharepoint @pnp/generator-spfx --global
```

2. Клонируем репозиторий и устанавливаем зависимости под нодой `10.24.0`:
```bush
git clone <url> -b <branchName>
cd <appName>

nvm use 10.24.0

npm i
```

3. Если не установлен сертификат под разработку для `gulp`
```bush
gulp trust-dev-cert
```

4. Скопировать и заменить файлы из `node_modules_override` в `node_modules` по соответствущему пути

5. Билд и запуск проекта
```bush
gulp build
gulp serve

# https://localhost:4321/temp/workbench.html
```

### История инициализации
```bush
nvm use 14.17.5

npm i gulp --global
npm i yo --global
npm i @microsoft/generator-sharepoint --global
npm i @pnp/generator-spfx --global

yo @pnp/spfx

Удалить папку node_modules в проекте
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

https://localhost:4321/temp/workbench.htmlt
```


## Building the code

Download & install all dependencies, build, bundle & package the project

```shell

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
