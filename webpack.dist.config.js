var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['./app/app.js'],
    output: {
        publicPath: 'build/js/',
        path: __dirname + '/build/js/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
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
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=' + __dirname + '/asset/img/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};