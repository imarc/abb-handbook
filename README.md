# ABB Handbook

**Handbook is your complete guide to atlanticbb.com, from [Imarc](https://imarc.com).**

Handbook is powered off [Hugo](https://gohugo.io), 
and their [Victor Hugo](https://github.com/netlify-templates/victor-hugo) 
starter kit.

## Things you can find here

Handbook is meant to be a resource that helps multiple teams both internal 
and external. Resources span across multiple departments:

- **Creative**: design templates, etc. Color swatches, logo files, Sketch templates, spacing instruction, more
- **Development**: components list, methodologies
- **Outside partners**: lorem ipsum


## Usage

### Prerequisites

You need to have the latest/LTS node and npm versions installed in order to use Victor Hugo.

Next step, clone this repository and run

```bash
npm install
```

This will take some time and will install all packages necessary to run 
ABB Handbook and its tasks.


### Development

While developing your website, use:

```bash
npm start
```

or for developing your website with `hugo server --buildDrafts --buildFuture`, use:

```bash
npm run preview
```

Then visit http://localhost:3000 to preview your new website. 
Webpack Dev Server will automatically reload the CSS or refresh the 
whole page, when stylesheets or content changes.

See [package.json](package.json#L8) for all tasks.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // TOML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css separately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Files in the static folder end up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.


## Deploying to Netlify

Committing to `master` will automatically deploy this to the current ABB Handbook Netlify instance: https://cranky-hypatia-ad1536.netlify.app/

