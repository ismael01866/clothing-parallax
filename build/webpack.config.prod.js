'use strict';

const path              = require('path');
const merge             = require('webpack-merge');
const baseConfig        = require('./webpack.config.base');
const ImageminPlugin    = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new CopyWebpackPlugin([{
      to  : path.join(__dirname, '..', 'dist/static/img'),
      from: path.join(__dirname, '..', 'static/img')
    }]),
    new ImageminPlugin()
  ]

});
