const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', favicon: './src/icons/favicon.ico' }),
    new ESLintPlugin(),
    new MiniCssExtractPlugin(),
    new EnvironmentPlugin({ SERVER_BASE_URL: 'http://localhost:3000' })
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.png|jpg|gif$/,
        use: ['file-loader']
      }
    ]
  }
};
