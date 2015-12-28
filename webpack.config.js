/*var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');*/

module.exports = {
    entry: "./app/main.jsx",
    output: {
        path: "_dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};