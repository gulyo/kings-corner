import webpackConfig, { WebpackEnv } from "./webpack.config";
import type { Configuration } from "webpack";
import { DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import InterpolateHtmlPlugin from "interpolate-html-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const chunkVendorContainer = { main: true, image: true };

const config = (env: WebpackEnv): Configuration => {
  const baseConfig = webpackConfig(env);

  const deployLocation = "kings-corner";

  const publicPath: string = env.WEBPACK_SERVE
    ? "http://gulyo.gulyo:3000"
    : `https://gulyo.no-ip.org/${deployLocation}`;

  const buildModules = env.WEBPACK_BUILD
    ? [
        new BundleAnalyzerPlugin({
          generateStatsFile: false,
          openAnalyzer: false,
          analyzerMode: "static",
          reportFilename: path.join(__dirname, "/analyzer/analysis.html"),
          reportTitle: "King's Corner bundle analysis",
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
          options: { concurrency: 4 },
          patterns: [
            {
              from: "./public/*.ico",
              to: "[name][ext]",
            },
            {
              from: "./public/manifest.json",
              to: "[name][ext]",
            },
            { from: "./public/robots.txt", to: "[name][ext]" },
          ],
        }),

        new DefinePlugin({
          kings: JSON.stringify({ deployLocation }),
        }),
      ]
    : [
        new DefinePlugin({
          kings: JSON.stringify({ deployLocation: "" }),
        }),
      ];

  return {
    ...baseConfig,
    mode: "production",
    devtool: false,
    module: {
      ...baseConfig.module,
      rules: [
        ...baseConfig.module.rules,
        {
          test: /\.module\.s[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: false,
              },
            },
          ],
        },
        {
          test: /\.s?[ac]ss$/,
          exclude: /\.module.(s[ac]ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      ...baseConfig.plugins,
      ...buildModules,
      new HtmlWebpackPlugin({
        // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
        template: "./public/index.html",
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeAttributeQuotes: true,
        },
        publicPath,
      }),
      new MiniCssExtractPlugin(),
      new InterpolateHtmlPlugin({
        PUBLIC_URL: publicPath,
      }),
    ],
    optimization: {
      ...baseConfig.optimization,
      chunkIds: "size",
      mergeDuplicateChunks: true,
      splitChunks: {
        usedExports: true,
        cacheGroups: {
          vendor: {
            test: /\/node_modules\//,
            name: "vendors",
            chunks: (chunk) => !!chunkVendorContainer[chunk.name],
            maxSize: 196608,
            filename: `vendors.[contenthash:5].js`,
            usedExports: true,
          },
          image: {
            test: /\/src\/image\/resource\//,
            maxSize: 196608,
            chunks: /image/,
            filename: `image.[contenthash:5].js`,
            usedExports: true,
          },
        },
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: 4,
          minify: TerserPlugin.uglifyJsMinify,
          terserOptions: {
            compress: {
              passes: 2,
            },
          },
        }),
      ],
    },
    performance: {
      maxAssetSize: 2097152,
      hints: false,
    },
  };
};

export default config;
