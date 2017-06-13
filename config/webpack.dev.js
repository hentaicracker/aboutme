var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var autoprefixer = require('autoprefixer');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer
        ]
      }
    }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
