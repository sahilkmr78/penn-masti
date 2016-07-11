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
    app: path.join(srcPath, 'js/index.js'),
    vendor: ['react', 'react-dom', 'react-router', 'react-addons-css-transition-group', 'react-tap-event-plugin']
  },

  output: {
    path: assetsPath,
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.woff2?$|\.woff$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
      {
        test: /.*\.(png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.(jpg)$/,
        loader: 'url?limit=1024'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  resolve: {
    path: srcPath,
    extensions: ['', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', 'src', 'src/js'],
    fallback: path.join(rootPath, 'node_modules/')
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new HtmlWebpackPlugin({
      inject: true,
      excludeChunks: ['test'],
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      excludeChunks: ['test'],
      template: 'src/index.html',
      filename: '404.html'
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
      }
    })
  ]
};
