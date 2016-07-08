var config = require('./webpack.js');
config.devServer = {
  historyApiFallback: {
    index: '/'
  }
};
config.devtool = 'cheap-module-eval-source-map';
module.exports = config;
