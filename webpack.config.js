const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  optimization: {
    // runtimeChunk: true,
    splitChunks: {
      automaticNameDelimiter: ".",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/].+\.js$/,
          name: "vendors",
          chunks: "initial",
        },
      },
    },
    minimizer: [
      // new TerserPlugin({
      //   extractComments: false,
      // }),
    ],
  },
};
