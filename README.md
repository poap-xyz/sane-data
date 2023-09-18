# NPM package template

This template by default assumes you are building a module that should run in `node.js` but also the browser. It assumes you want to ship both raw and bundled & minified versions of your library.

This repository is configured by default with `eslint` and `husky` based on the preferences of the [POAP Skunkworks team](https://github.com/poap-xyz/skunk-linter/).

This repository also assumed you will be publishing new versions through Github actions.

## One-time setup

1. Generate an npm access token [here](https://www.npmjs.com/settings/actuallymentor/tokens)
    - ideally use a granular access token that has read/write only to the package you are creating
    - granular access tokens _expire_, so make sure you keep that in account (hopefully npm optioanlly changes this soon)
2. Add it as a Github Actions secret with the name `NPM_ACCESS_TOKEN`
3. New versions are deployed when you push code with a new `version` in `package.json`
4. Change the `package.json` fields: `name`, `description`, `author`, and `license` as you see fit
5. Disable package fields that are not useful to your project
    - Browser module: remove `package.module` and `package.exports.node`
    - Node-only module: remove `package.browser`

## Setting up previews

The preview templates are in `previews`. The local publishing of your package is done by running `npm run publish:local` which uses `yalc` under the hood. When setting up your package, make sure to:

1. Change the `package.name` field
2. Change it in the `previews/{react,node}/package.json` `name` fields too
3. Run `npm run publish:local` in the root directory
4. Run `yalc add your-package-name` in the `previews/{react,node}` folders

## Writing your code

All source files are in `src` and the default entry point is `index.js`. To publish changes to your local preview in `previews/` you can run `npm run build && npm run publish:local`.

## Publishing locally

If you want to deploy a new version without pushing code to Github, add your access token to a `.npntoken` file in the project root. Then run `npm publish` to publish your package.

## Changing defaults

You might have other assumptions than I did when creating this template. Chief among them, consider:

1. Whether the `.babelrc.js` settings make sense for your project