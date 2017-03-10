var path = require('path');
var webpackMerge = require('webpack-merge');
var baseConfig = require('./webpack.config.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
  return webpackMerge(baseConfig(), {
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'stylesheets/[name].css'
      })
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
      noInfo: true
    }
  });
}