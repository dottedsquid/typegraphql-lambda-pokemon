## Configuraciones iniciales

npm init --y
git init

## Generated .editorconfig

====================
touch .editorconfig

echo "# EditorConfig is awesome: https://EditorConfig.org">>.editorconfig
echo "">>.editorconfig
echo "# top-most EditorConfig file">>.editorconfig
echo "root = true">>.editorconfig
echo "">>.editorconfig
echo "[*]">>.editorconfig
echo "indent_style = space">>.editorconfig
echo "indent_size = 4">>.editorconfig
echo "charset = utf-8">>.editorconfig
echo "trim_trailing_whitespace = false">>.editorconfig
echo "insert_final_newline = false">>.editorconfig

=====================

## Instalando el Linter

## Instalar y configurar el eslint

npx eslint --init

============
? How would you like to use ESLint? …
To check syntax only
To check syntax and find problems
▸ To check syntax, find problems, and enforce code style
================

? What type of modules does your project use? …
▸ JavaScript modules (import/export)
CommonJS (require/exports)
None of these
===============

Which framework does your project use? …
React
Vue.js
▸ None of these

===============
? Does your project use TypeScript? ‣ No / Yes
===============
? Where does your code run? … (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node
=================

How would you like to define a style for your project? …
▸ Use a popular style guide
Answer questions about your style
Inspect your JavaScript file(s)

==================
✔ How would you like to define a style for your project? · guide
? Which style guide do you want to follow? …
▸ Airbnb: https://github.com/airbnb/javascript
Standard: https://github.com/standard/standard
Google: https://github.com/google/eslint-config-google

===============

? What format do you want your config file to be in? …
JavaScript
YAML
▸ JSON

================

Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
? Would you like to install them now with npm? ‣ No / Yes

===================

## Configurando prettier

npm i -D prettier
npm i -D eslint-config-prettier
npm i -D eslint-plugin-prettier

===============

touch .prettierrc
echo '{'>>.prettierrc
echo ' "tabWidth": 2,'>>.prettierrc
echo ' "useTabs": false,'>>.prettierrc
echo ' "semi": false'>>.prettierrc
echo '}'>>.prettierrc

================

# edit eslintrc file and add the extends

    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",

===========

## Instalando y configurando typescript

npm i -D typescript
npx tsc --init

## Install and config husky and lint-stage

npm i -D husky@5.0.4
npm i -D lint-staged

add lintstagedrc.json file

echo '{' >> .lintstagedrc.json
echo ' "*.ts": "eslint --cache --fix"' >> .lintstagedrc.json
echo '}' >> .lintstagedrc.json

add scripts in package.json

    "linter": "eslint --cache --fix --ext .ts src/**",
    "precommit": "lint-staged",
    "postinstall": "husky install"

npm run postinstall

## Add pre-commit statement with husky

npx husky add pre-commit "npm run precommit"

## Instalando y configurando conventional-commit

npm i -D @commitlint/config-conventional @commitlint/cli
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

## Add commit-msg statement with husky

npx husky add commit-msg "npx --no-install commitlint --edit $1"

## Add .gitignore file

echo 'node_modules/'>>.gitignore
echo '.eslintcache'>>.gitignore

###

git add .
git commit -m'chore: initial config'
git remote add origin https://github.com/rdmujica/bff-typegraphql.git
git branch -M main
git push origin main

### Add express development dependency

npm i express
npm i -D @types/express
npm i -D ts-node

https://expressjs.com/en/starter/hello-world.html


npm i apollo-server-express

https://www.apollographql.com/docs/apollo-server/integrations/middleware/



### Install and config typescript 

https://typegraphql.com/docs/installation.html


npm i graphql class-validator type-graphql
npm i reflect-metadata

It's important to set these options in the tsconfig.json file of our project:

{
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true
}

{
  "target": "es2018" // or newer if your node.js version supports this
}


Due to using the graphql-subscription dependency that relies on an AsyncIterator, we may also have to provide the esnext.asynciterable to the lib option:

{
  "lib": ["es2018", "esnext.asynciterable"]
}