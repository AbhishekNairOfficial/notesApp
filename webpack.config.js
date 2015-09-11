var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var __PROD__ = process.env.NODE_ENV === 'production';
var __DEV__ = !__PROD__;

module.exports = {
    devtool: __DEV__ ? 'source-map' : false,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/Client.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(__DEV__),
            __PROD__: JSON.stringify(__PROD__),
            __CLIENT__: JSON.stringify(true),
            __SERVER__: JSON.stringify(false)
        }),
        new HtmlWebpackPlugin({
            minify: __PROD__,
            title: 'TodoMVC app',
            bodyContent: (function() {
                require("babel/register");
                var react = require('react');
                var App = require('./src/containers/App.jsx');
                var reactHtml = react.renderToString(react.createFactory(App)({}));
                return reactHtml;
            })(),
            template: './src/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        })
    ].concat(__PROD__ ? [new webpack.optimize.UglifyJsPlugin()] : []),
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }]
    }
}
