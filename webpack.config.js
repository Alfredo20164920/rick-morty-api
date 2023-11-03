/** @type {import('webpack').Configuration} */

const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        // path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "/",
        clean: true,
    },
    mode: "development",
    resolve: {
        extensions: [".js"],
    },
    module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
                    loader: "babel-loader"
                },
			},
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
		],
	},
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/styles/main.css"
        })
    ],
    devtool: "source-map",
    devServer: {
		compress: true,
		historyApiFallback: true,
		port: 3006,
        host: "localhost",
        hot: true,
	},
}