const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  PrettierPlugin = require("prettier-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html'}),
        new ESLintPlugin(),
        new MiniCssExtractPlugin(),
        new PrettierPlugin()
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader",  "sass-loader"],
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ["file-loader"],
            },
        ],
    },
};
