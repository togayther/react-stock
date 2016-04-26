var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline : true,
  historyApiFallback: true
}).listen(9090, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }else{
  	console.log('Listening at 127.0.0.1:9090');	
  }
});