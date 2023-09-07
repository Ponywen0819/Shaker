const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "main.jsx"),
  output: {
    path: path.resolve(__dirname, "../static"),
    filename: "bundle.js",
    publicPath: "/static/",
  },
  mode: "development",
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "templates", "main.html"),
      filename: "main.html",
      inject: false,
    }),
  ],

  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        pathRewrite: { "^/api": "" },
      },
    },
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/main.html" }],
    },
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
