const path = require('path');
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { env } = require('process');
const dotEnv = require('dotenv').config();

console.log("dotEnv", dotEnv);
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
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: dotEnv.parsed.PORT,
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    watchContentBase: true,
    overlay: true,
    /*
      la configuración en headers es necesaria para decirle a webpack que acepte
      peticiones de cualquier puerto (en este caso las peticiones que hará nuestro server de django para obtener los archivos js)
      de lo contrario al hacer algún cambio en nuestro código la consola del navegador
      nos motrará el siguiente mensaje:
      "No 'Access-Control-Allow-Origin' header is present on the requested resource"
    */
    headers: {
      /*
        también podemos colocar directamente la url en donde corre nuestro server de Django
        'Access-Control-Allow-Origin': 'http://localhost:8000'
        si lo hacemos urls como "http://mi-alias-de-localhost:8000" o "http://mi-ip-publica:8000"
        no podrán acceder a nuestros archivos js, ya que no contienen el dominio(localhost) especificado.
      */
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
      'Access-Control-Allow-Credentials': 'true',
    }
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
    new HtmlWebpackPlugin({
      template: 'public/index_template.html',
      robots: (process.env.NODE_ENV !== "production") ? 'noindex' : 'all',
      title: "Defy Web",
      description: "Defy web page custom",
      keywords: "",
      googleID: ""
    })
  ]
};
