const path = require('path');
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { env } = require('process');

module.exports = {
  mode: 'development',
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader",
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
        ],
        exclude: /popups.css/
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader'
      },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: { postcss: [autoprefixer()] }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // With dotenv (values must be stringified)
        ...Object.entries(require('dotenv').config().parsed).reduce((acc, curr) => ({ ...acc, [`${curr[0]}`]: JSON.stringify(curr[1]) }), {})
      }
    }),
    
  ]
};
