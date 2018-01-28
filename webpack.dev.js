const merge = require("webpack-merge");
const common = require("./webpack.common.js");

// inline-* or evel-* can increase bundle size and reduce performance
module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    }
});
