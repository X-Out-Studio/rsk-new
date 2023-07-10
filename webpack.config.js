const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMessages = require("webpack-messages");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/js/app.js",
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/js/components"),
      vue: "vue/dist/vue.esm-bundler.js",
    },
    extensions: [".js", ".jsx", ".vue", ".scss"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/umax.webpack.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/umax.webpack.css",
    }),
    new WebpackMessages({
      name: "client",
      logger: (str) => console.log(`>> ${str}`),
    }),
  ],
};
