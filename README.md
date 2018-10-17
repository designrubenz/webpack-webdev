# Webpack for Webdevs
## A webpack 4 based setup for regular webdevelopers

### What's it all about?
If you don't consider yourself a rockstar, a ninja, or a 10X kind of person:
good news! Here is a webpack 4 setup that simply works, is easy to understand and makes
developing a new conventional site (HTML, CSS, js) a breeze. It comes with some convenient conventions and
defaults to make your webdev life easier.

### Changelog
### Version 0.2
* Fixes a critical bug when using partials. (Foldernames containing an underscore previously lead to errors).
### Version 0.1
* It just works™.

Found bugs or akwardness? Please let me know or file an issue.


### Installation
* If you haven't already, install [npm](https://www.npmjs.com/).
* Clone this respository to your local machine.
* `npm install`

### How to use
* `npm start` starts a local server. If you change any of the files in `src/`, the browser will reflect the changes automatically ("autorefresh", "autoreload").
* `npm run build` builds a production bundle in `dist/`. (The folder gets deleted every time a new bundle is created.)

### Features
* uses sass (supporting the scss-syntax), minifies and auto-prefixes your css for production
* auto-prefixing depending on your choice of browsers you want to support in `.browserslist.rc`
* uses hashes for the js/css-filenames to prevent caching problems
* autorefreshes browsers (autoreloads)
* concatenates and minifies your js-files using webpack's intelligent dependency graph
* ES6 support via babel out of the box
* creates all the files needed for production in the build directory
* minifies images (jpg, png, jpg, svg)
* includes various icon references for touch devices

### Wanna contribute?
Great, thanks! Collaboration/PRs more than welcome!

### Resources & Credits
At the time of writing, these are the best webpack/webdev-related resources:
* [webpack's official documentation](https://webpack.js.org/guides/getting-started/)
* [blog post](https://taylor.callsen.me/using-webpack-4-and-sass-with-wordpress/) by Taylor Callsen
* [Medium article](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1) by Margarita Obraztsova

* The index.html is based on Google's [web-starter-kit](https://github.com/google/web-starter-kit).

### What else?
Follow me on [twitter](https://twitter.com/j_rubenz)!

### Is that all?
Maybe.
