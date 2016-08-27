var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

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
    new BundleTracker({filename: './webpack-stats.json'})
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx']
  }

}