const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".mjs"],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    host: "localhost",
    publicPath: "/dist/",
    contentBase: [path.join(__dirname), path.join(__dirname, "css")],
    watchContentBase: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
