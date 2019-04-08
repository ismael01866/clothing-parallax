'use strict';

const path                = require('path');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias:{
      '@scss'      : path.join(__dirname, '..', 'src/scss'),
      '@static'    : path.join(__dirname, '..', 'static'),
      '@pages'     : path.join(__dirname, '..', 'src/pages'),
      '@components': path.join(__dirname, '..', 'src/components')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(s*)css$/,
        use: [
          'vue-style-loader', 'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};
