# ABB Handbook

**Handbook is your complete guide to atlanticbb.com, from [Imarc](https://imarc.com).**

Handbook uses [Hugo](https://gohugo.io), 
via a Netlify Hugo starter kit called [Victor Hugo](https://github.com/netlify-templates/victor-hugo). This starter kit includes a webpack bundler that bundles Sass and JavaScript, and pushes to a Netlify server upon commits to `master`.

You can view Handbook remotely: https://cranky-hypatia-ad1536.netlify.app

## Handbook’s purpose

Handbook is meant to be a resource for internal and external teams. These teams typically will involve:

- **Creative**: color information, logo files, design templates, one-off landing page guidance etc.
- **Development**: methodologies, component list, grid specs, etc.
- **Outside partners**: lorem ipsum

## Installation

### Prerequisites

You need to have the latest/LTS node and npm versions installed in order to use Victor Hugo.

Next step, clone this repository and run `npm install`

This will take some time and will install all packages necessary to run ABB Handbook and its tasks.

## Development

While developing your website, you can run `npm start` in the project’s directory to compile assets and spin up a localhost: http://localhost:3000

Webpack Dev Server will automatically reload the CSS or refresh the whole page when stylesheets or content changes.

The `src/index.js` file is the entrypoint for webpack (both JavaScript and Sass) and will be built to `/dist/main.js`.

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.

See [package.json](package.json) for all tasks.

### Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |  |--demos         // This files are for one-off demo pages
|  |--docs             // Markdown files for our pages
|  |  |--components    // Dedicated to show our components in action
|  |  |--creative      // Dedicated to creative content
|  |  |--development   // Dedicated to informative development content
|  |--data             // YML data files for sidebar page listing, color info, etc.
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where partials live
|  |  |--shortcodes    // Holds shortcodes used in our docs markdown files
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css separately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

### Adding a new page in docs

- add a new link to the sidebar in the `data/sidebay.yml` file
- duplicate and existing file and rename to `[whatever].md` file in respective `docs` folder
- if you want a dedicated demo page, set `demolink: true` at the file’s top 
- if you want a related Bootstrap docs link, edit the `bootstrapLink` and `bootstrapSection` variables
- setting `toc` to `true` creates a table of contents based on headlines used

### Linting

We have Stylelint/ESLint tools set up via NPM, but these work best in parallel with installed plugins in your code editor.

More content TBD here.

## Deploying to Netlify

Committing to `master` will automatically deploy this to the current ABB Handbook Netlify instance: https://cranky-hypatia-ad1536.netlify.app/

Handbook’s Netlify settings: https://app.netlify.com/sites/cranky-hypatia-ad1536/settings/general
