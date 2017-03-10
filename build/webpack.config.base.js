var webpack = require('webpack');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    entry: {
      main: './src/index.js',
      vendor: './src/vendor.js'
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new ChunkManifestPlugin({
        filename: 'chunkManifest.json',
        manifestVariable: 'webpackManifest'
      })
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    }
  };
}
