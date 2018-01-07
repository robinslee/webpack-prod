const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    plugins: [
        new CleanWebpackPlugin(["dist/*.*"], {
            exclude: [ "index.html" ]
        }),
        new HtmlWebpackPlugin({
            title: "Webpack Demos, Get Start"
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|svg|gif|woff|woff2|ttf|otf|eot)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    }
};
