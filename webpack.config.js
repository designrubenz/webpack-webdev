const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main:'./src/index.js' },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [

      // use babel for all js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['babel-preset-env']
          }
        }
      },

      // converty SASS to CSS, then minify and autprefix
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // extract CSS into separate file
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // autoprefixes CSS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },

      // include images in your build
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          { loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          },

          {
            loader: 'image-webpack-loader',
            options: {
              // best image compression settings: https://gist.github.com/LoyEgor/e9dba0725b3ddbb8d1a68c91ca5452b5
              
              //png
              pngquant: {
                speed: 1,
                quality: 98,
              },
              zopfli: {
                more: true,
                iterations: 50 // very slow but more effective
              },
              //svg
              svgo: {
                plugins: [{
                  removeViewBox: false
                }]
              },
              //jpg lossless
              jpegtran: {
                progressive: true
              },
              mozjpeg: {
                quality: 80
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              gifsicle: {
                interlaced: false,
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [

    // clean dist folder before each build
    new CleanWebpackPlugin(['dist']),

    // extract css into file
    new MiniCssExtractPlugin({
      filename: './style.[contenthash].css'
    }),

    // use index.html as a template
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ],

  optimization: {
    minimizer: [
      // minify js 
      new UglifyJSPlugin({
        cache: true,
        parallel: true
      })
    ]
  }

}
