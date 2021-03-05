const path = require("path");

module.exports = {
  mode: "development",
  target: "web",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
    environment: {
      arrowFunction: false,
    },
  },
  devtool: "eval-cheap-module-source-map",
  resolve: {
    extensions: [".js", ".mjs"],
  },
  devServer: {
    host: "localhost",
    publicPath: "/dist/",
    contentBase: [path.join(__dirname), path.join(__dirname, "css")],
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: "9",
                  },
                  modules: "amd",
                  useBuiltIns: "usage",
                  corejs: {
                    version: "3.9",
                    proposal: false,
                  },
                  shippedProposals: false,
                },
              ],
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
