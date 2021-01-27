const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.tsx", "./src/styles/main.scss"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/dist")
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loaders: "eslint-loader",
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        options: {
          presets: ["react", "stage-0", "es2015"],
          plugins: ["transform-class-properties", "transform-decorators-legacy"]
        }
      }
    ]
  },
  devServer: {
    contentBase: "./public/",
    watchContentBase: true
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
  ]
};
