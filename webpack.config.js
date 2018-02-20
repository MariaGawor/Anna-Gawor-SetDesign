var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    main: path.join(__dirname, 'src', 'app.jsx')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
},
  watch: true,
  devServer: {
    contentBase: './dist',
    compress: true,
    hot: true,
    inline: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [	'es2015',	'stage-2',	'react']
          }
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        //use: ['style-loader','css-loader', 'postcss-loader', 'sass-loader'] //Wybierz tą opcję jeśli potrzebujesz odświeżania stylów
        use: ExtractTextPlugin.extract({ //Wybierz tą opcję jeśli nie potrzebujesz odświeżania stylów
         fallback: "style-loader",
         use: ['css-loader', 'postcss-loader', 'sass-loader']
       })
     },
     {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ]
};
