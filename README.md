# ng-redux-ts-boilerplate

Based off of [angular-typescript-webpack](https://github.com/brechtbilliet/angular-typescript-webpack), this package aims to offer an alternative to the vanilla angular experience. Typescript for better errors and intellisense, redux for easy, predictable, state management, and a router integrated redux to bring it all together.

This is not built using other prebuilt redux-to-angular modules. This is more of a proof of concept/prototype to show how to integrate these different technologies yourself. It will be extensively documented and commented.

### Install

```sh
npm install webpack typings typescript -g
git clone git@github.com:full-stakk/ng-redux-ts-boilerplate.git
cd ng-redux-ts-boilerplate
npm install
npm start
```

Then it will automatically open the app in your browser

To run tests

```sh
npm test
```

Coverage

```sh
open reports/coverage/index.html
```

Build
```sh
npm install
npm run build
```


### Features

- [x] webpack
- [ ] example application with routing
- [ ] fully tested with Jasmine
- [x] sass support
- [ ] Coverage report
- [x] Typescript support
- [x] ES6 modules support
- [ ] Running tests in PhantomJS
- [ ] Wallaby.js support
- [ ] Karma support
- [ ] Optimized build package
- [x] Minimal and straightforward setup
- [x] Watches code and refreshes browser with latest changes automatically
- [x] Sourcemap support
