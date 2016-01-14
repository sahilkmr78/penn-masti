'use strict'

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rootPath = path.join(__dirname, '../');
var srcPath = path.join(rootPath, './src');
var assetsPath = path.join(rootPath, './assets');

module.exports = {
  target: 'web',
  cache: true,

  entry: {
    'style.css': path.join(srcPath, 'scss/app.scss'),
    'bundle.js': path.join(srcPath, 'js/app.js')
  },

  output: {
    path: assetsPath,
    filename: '[name]',
    chunkFilename: '[id]',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /.+\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.woff2?$|\.woff$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /.*\.(png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.(jpg)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.(woff|ttf)$/,
        loader: 'url?limit=100000'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  resolve: {
    path: srcPath,
    extensions: ['', '.js', '.json', '.scss', '.jsx'],
    modulesDirectories: ['node_modules', 'src', 'src/js'],
    //modulesDirectories: ['node_modules', 'src', 'src/js', '../shared'],
    fallback: path.join(rootPath, 'node_modules/')
  },

  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('js/common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      excludeChunks: ['test'],
      template: 'src/index.html',
      output: 'index.html'
    })
  ]
};
