'use strict';
module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: __dirname + '/prod',
        filename: './bundle.js'
    }
};
