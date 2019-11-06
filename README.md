# NASA Images

demo application for NASA Images using state of art pratice of `react` - `redux` - `css mdules`

# Live Demo

https://minhlv-nasa.firebaseapp.com/explore

# Technolohies

- [x] [react](https://reactjs.org/)
- [x] [redux](https://redux.js.org/)
- [x] [redu -starter kit](https://redux-starter-kit.js.org/)
- [x] [css modules](https://github.com/css-modules/css-modules)
- [x] [ducks architechure](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/)
- [x] [storybook](https://storybook.js.org/)
- [x] [hooks](https://reactjs.org/docs/hooks-intro.html)
- [x] [theming](https://medium.com/@dmitriy.borodiy/easy-color-theming-with-scss-bc38fd5734d1)
- [x] [scss](https://sass-lang.com/)
- [x] [pwa](https://developers.google.com/web/progressive-web-apps)

# Installation

## Get the code

0. requires `Nodejs` and `NPM` get insstaled on the local marchine

1. clone the source code

```bash
	git clone https://github.com/minhlucvan/nasa-images
```

2. install dependencies

```bash
	npm install
```

## Run dev server

```bash
	npm run dev
```

open link: http://localhost:8080

## Testing

```bash
	npm run test
```

## Component visual test

```bash
	nom run storybook
```

## Build

```bash
	npm run build
```

# Development

## Code base

The code base is separete into main sections:

- app
- lib
- context
- redux
- config
- redux
- scss

### App

The main application contain `routes` ,`pages`, `context` and other stuff of the [`application layer`](https://medium.com/@cristiansalcescu/how-to-create-a-three-layer-application-with-react-8621741baca0)

### lib

The common `components`, `helpers`, `api`, `hooks` and other things that we use across the apps

### Config

the configuration files

### SCSS

scss styles

### Redux

bussiness handlers and state management bas on `redux`;

Each redux module including `actions`, `reducer`, `selectors`, `effects` these factors is collected automaticly through `configureStore` function and integrate to the app in `redux/index.js`;

### Context

Common context that can reuse across the app

## Environments

By defautl I using 2 environments are `development` and `production`. `env` is provide to webpack by `npm scripts` specifics on `package.json`

If you want to and a custom `env` you neend to adding config to webpack.

## Configuration

App configuration is localte on `src/main/config`. The configurations a split into files and load all in `src/main/config/index.js`

Base on current environments webpack will load the config file extentions. `*.js` for dev and `*.prod.js` on production mode.

## Themming

Please see: [this artice](https://medium.com/@dmitriy.borodiy/easy-color-theming-with-scss-bc38fd5734d1)

## Hooks

We can create insrested things base on (hooks)[https://reactjs.org/docs/hooks-intro.html]

## Context

## Styles

## Testing

# Contribution

Feel free to make pull request and open an issue

contributors: [@minhlucvan](http://github.com/minhlucvan)

# Lisence

MIT
