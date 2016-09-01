var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './assets/js/index.js',
  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js"
  },
  devServer: {
      contentBase: "./assets/templates"
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin('./style.css')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader'),
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000'
      }
    ]
  },

  resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx']
  }

}