import webpackConfig, { WebpackEnv } from "./webpack.config";
import { Configuration } from "webpack";
import InterpolateHtmlPlugin from "interpolate-html-plugin";

const config = (env: WebpackEnv): Configuration => {
  const baseConfig = webpackConfig(env);

  return {
    ...baseConfig,
    mode: "development",
    devtool: "source-map",
    module: {
      ...baseConfig.module,
      rules: [
        ...baseConfig.module.rules,
        {
          test: /\.module\.s[ac]ss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.s?[ac]ss$/,
          exclude: /\.module.(s[ac]ss)$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      ...baseConfig.plugins,
      new InterpolateHtmlPlugin({
        PUBLIC_URL: "http://gulyo.gulyo:3000/",
      }),
    ],
  };
};

export default config;
