//import memoryfs from 'memory-fs';

//import path from 'path';

const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path');

const memoryfs = require('memory-fs');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const routes = [path.resolve(__dirname, './src/routes/routes.json')]

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", {"modules": false}, "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
            {
             loader: "style-loader"
            }, 
            {
             loader:"css-loader", 
             options: {
                 modules: true,
                 importLoaders: 1,
                 localIdentName: "[name]_[local]_[hash:base64]",
                 sourceMap: true,
                 minimize: true
             }
            }
            ]
      },
      {
        test: /\.json$/,
        exclude: routes,
        loader: 'json-loader'
      },
      {
        test: /\.json$/,
        include: routes,
        loader: path.resolve(__dirname,'./src/utils/route-loader.js')
      },
      {
        test: /\.txt$/,
        loader: path.resolve(__dirname, './src/utils/loader.js'),
        options: {
          name: "John"
        }
      }
    ]
  },
  plugins: [htmlPlugin],
  devtool: 'source-map'
};

