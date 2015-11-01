'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};


