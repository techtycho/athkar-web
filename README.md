<p align="center">
  <img 
    width="200"
    height="200"
    src="assets/branding/athkarweb/logo.png"
  />
</p>

<p align="center">
  <img src="https://img.shields.io/github/checks-status/techtycho/athkar-web/67ddc1d0dd8779a11693e1de64014adb43249860?label=build" />
  <img src="https://img.shields.io/badge/Maintained%3F-Yes-brightgreen" />
  <img src="https://img.shields.io/badge/Phase-Pre--alpha-orange" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-informational" />
  <a href="https://athkarweb.vercel.app">
    <img src="https://img.shields.io/badge/Website-Link-success" />
  </a>
</p>

<h1 align="center">Athkar Web</h1>

<p align="center">
  Athkar Web is a web application that provides daily Athkar for Muslims.
<p>

## Table of Contents

- [Visit Our Website](#visit-our-website)
  - [Install Locally](#install-locally)
  - [Other NPM Scripts](#other-npm-scripts)
- [Technical Information](#technical-information)
  - [Technologies Used](#technologies-used)
  - [Other Information](#other-information)
- [API](#api)
  - [Links](#links)
  - [More Info](#more-info)
- [Support](#support)

## Visit Our Website

The website is deployed with Vercel, go to [our website](https://athkarweb.vercel.app) (`https://athkarweb.vercel.app`).

### Install Locally

First, clone the repository:

```sh
$ git clone https://github.com/techtycho/athkar-web
```

We do not rely on any dependencies, although we use some **dev dependencies**, which you don't need to install. Although you can install them, if you want:

```sh
$ npm install
```

Then, build the application with:

```sh
$ npm run build
```

### Other NPM Scripts

See [package.json](package.json), for more info on the commands.

| Name          | Description                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------- |
| `build`       | Build the application once.                                                                    |
| `dev`         | Build the application everytime a file is changed, hot-reload, `watch` option is enabled.      |
| `serve`       | Serves the application, `webpack-dev-server` package must be installed. I don't really use it. |
| `live-server` | Serves the HTML document with `live-server`, `live-server` must be installed.                  |
| `sass`        | Compiles SCSS files to plain CSS files, unnecessary since Webpack handles all of that.         |

## Technical Information

Athkar Web uses a bunch of technologies to deliver its unique user experience.

### Technologies Used

| Name    | Description                                                                                                                                                                                                      |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sass    | We use `.scss` files instead of plain `.css` files, so we use Sass, which adds more features to plain CSS.                                                                                                       |
| Webpack | Webpack is a web bundler, we use it to create a unique developer-friendly environment. It compiles `.js` files to a single `.js` file for every page, and we can use other technologies like Babel on top of it. |
| Babel   | Babel compiles modern Javascript to Javascript code that is comptible with older browsers.                                                                                                                       |

### Other Information

Athkar Web has its own API for Athkar. See [API](#api) section.

## API

Athkar Web has its own API for Athkar, developers may find that useful in
building their own applications. The API is free to use for everyone.

### Links

[/api](https://athkarweb.vercel.app/api) is the link for the API.
`/api` is just a directory in the project structures, that contains
banching directories and JSON files.

`/api` is an HTML page, it contains links to the Athkar.

### More Info

Documentation for the API is found in the Wiki.

#### Wiki under construction!

## Support

Support the project by reporting bugs and pushing code. You can even fix typos in the documentation, or bugs in the code. Feedback is also appreciated.
