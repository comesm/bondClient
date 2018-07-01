const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path');

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
    ]
  },
  plugins: [htmlPlugin],
  devtool: 'source-map'
};

