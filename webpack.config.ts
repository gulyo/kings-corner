import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

export interface WebpackEnv {
  production?: boolean;
  development?: boolean;
  url?: string;
  WEBPACK_SERVE?: boolean;
  WEBPACK_BUILD?: boolean;
}

const devServer: DevServerConfiguration = {
  host: "gulyo",
  allowedHosts: ["gulyo", "gulyo.gulyo", "localhost", "172.30.0.*"],
  port: 3000,
  open: false,
  historyApiFallback: true,
  hot: true,
  liveReload: true,
};

export const webpackConfig = ({}: WebpackEnv): Configuration => ({
  entry: {
    index: {
      import: "./src/index.ts",
      asyncChunks: true,
      runtime: false,
    },
    main: {
      import: "./src/main.tsx",
      asyncChunks: true,
    },
    image: {
      import: "./src/image/index.ts",
      asyncChunks: true,
      dependOn: ["main"],
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].[contenthash:5].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /(build)|(dist)/,
      },
    ],
  },
  devServer,
  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
      template: "./public/index.html",
      minify: false,
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    usedExports: true,
  },
});

export default webpackConfig;
