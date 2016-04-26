var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: ['webpack-dev-server/client?http://127.0.0.1:9090', 'webpack/hot/dev-server', './app/app.js'],
    output: {
        publicPath: 'http://127.0.0.1:9090/build/js/',
        path: __dirname + '/build/js/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-0', 'stage-1']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=' + __dirname + '/asset/img/[name].[ext]'
        }]
    },
    postcss: [autoprefixer({ browsers: ['last 3 versions'] })],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('bundle.css', {
            disable: false,
            allowChunks: true
        })
    ]
};