var browserify = require('browserify');
var tsify = require('tsify');
 
browserify()
    .add('./src/main.ts')
    .plugin(tsify, { project: './src' })
    .transform('browserify-shim')
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(process.stdout);