const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // polyfill the features which we cannot convert with babel-loader (promises,methods like array.from etc)
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    // mode: 'development', // added to package.json 
    devServer: {
        // inline: false,
        contentBase: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ],
    module: {
        rules: [{
            test: /\.js$/, // regular expression for test all the javaScript files
            exclude: /node_modules/, // we want exclude everything that's in a node modules folder
            use: {
                loader: 'babel-loader' // this is the package for JS compiler
            }

        }]
    }
};