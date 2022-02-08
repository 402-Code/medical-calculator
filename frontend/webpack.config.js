const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html'}),
        new ESLintPlugin(),
        new MiniCssExtractPlugin(),
        new InjectManifest({
            swSrc: './src/service-worker.js',
            maximumFileSizeToCacheInBytes: 6000000
          }),
        new CopyWebpackPlugin({
            patterns: [
            { from: "./src/manifest.json", to: "" },
            { from: "./src/manifest-icon-192.maskable.png", to: "" },
            { from: "./src/manifest-icon-512.maskable.png", to: "" }
        ]})
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
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            },
            {
                test: /\.png|jpg|gif$/,
                use: ["file-loader"],
            },
        ],
    },
};
