
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:9090',
    'webpack/hot/dev-server',
    './app/app.js'
  ],
  output: {
  	path: __dirname + '/build/js/',
    filename: 'bundle.js'       
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel', 
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1'] 
        }
      }, 
      {
        test: /\.scss$/, 
        loader: 'style!css!autoprefixer!sass'
      }, 
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url-loader?limit=8192&name=' + __dirname + '/asset/img/[name].[ext]'
      }
    ]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  	new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin(__dirname + '/asset/css/bundle.css')
  ]
};