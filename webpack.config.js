var path = require('path');
var webpack = require('webpack');

module.exports = [{
  entry: ['./src/app.ts'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src', 'html')
  },
  module: {
    rules: [{
      test: /\.(html?)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: './[name].[ext]'
        }
      }
    }, {
      test: /\.(css|sass|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }
      ]
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
      include: [
        path.resolve(__dirname, 'src', 'img')
      ],
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: './img/[name].[ext]'
        }
      }
    }, {
      test: /\.(eot|otf|ttf|woff2?|svg)(\?.+)?$/,
      include: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: {
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]'
        }
      }
    }, {
      test: /\.ts$/,
      use: "ts-loader",
    }]
  },
  plugins: [
    // declare external plugin
    new webpack.ProvidePlugin(
      {
        jQuery: "jquery",
        $: "jquery",
      }
    ),
    new webpack.ProvidePlugin(
      {
        Barba: "barba.js",
      }
    ),
    new webpack.ProvidePlugin(
      {
        THREE: "three",
      }
    ),
  ],
}];