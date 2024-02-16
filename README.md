# Excalibur Browserify Example

![Browserify Example](image.png)

To run:

    npm install
    npm run build
    npm run serve

This uses [`browserify`](https://github.com/substack/node-browserify) and 
[`browserify-shim`](https://github.com/thlorenz/browserify-shim) to map Excalibur to a global object, since browserify works via
CommonJS modules and Excalibur is built using AMD.

See **browserify.js** for the Browserify code and the **package.json** for the browserify-shim configuration.