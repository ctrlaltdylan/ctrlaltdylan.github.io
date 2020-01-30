---
layout: post
title:  "Jest Unexpected Token a.k.a. won't transpile error"
date:   2020-01-30 11:39:39
category: react
comments: true
---

This is a frustrating error that at least in early 2020 is more common than it should be.

In my case, `@fontawesome` was not transpiling from ES6 properly in my jest test:

```
    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

```

I followed the advice of other threads of the same issue and added `node_modules/@fontawesome` to my `transformIgnorePatterns` array in the `jest.config.js`:

```
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@fortawesome)'],
};
```

However, I was still getting this error. What eventually fixed it for me was renaming the babel configuration file from `.babelrc` to `babel.config.js`.

Then verifying the test works by running `jest --no-cache`.

Hope this helps.

## Extra credit - Why is this error happening?

So it turns out not all packages export a transpiled version of their `src`. This means that when you're testing React/Vue/Angular code that _transpiles_ the ES6 code into ES5, normally webpack handles this.

However during testing, Jest by default does not attempt to transpile everything. This is probably for performance reasons. So in the odd cases that a package maintainer only releases ES6 versions of their library, you must tell your Jest configuration specifically that this particular package must be transpiled. Hence our specific entry in `transformIgnorePatterns`.


P.S. don't forget to install `babel-jest` if you're copying my `jest.config.js` directly.
