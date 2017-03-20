var path = require('path');
var webpackMerge = require('webpack-merge');
var baseConfig = require('./webpack.config.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackChunkHash = require('webpack-chunk-hash');
var webpack = require('webpack');

module.exports = function() {
  return webpackMerge(baseConfig(), {
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'stylesheets/[name].[contenthash].css'
      }),
      new WebpackChunkHash(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
  });
}