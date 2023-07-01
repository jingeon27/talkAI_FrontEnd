import type { StorybookConfig } from "@storybook/nextjs";
import next from "next";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config: any) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    // config.resolve.alias["next/router"] = require.resolve(
    //   "../__mocks__/next/router.js"
    // );
    // config.resolve.alias["next/link"] = require.resolve(
    //   "../__mocks__/next/link.js"
    // );
    // config.resolve.alias["next/image"] = require.resolve(
    //   "../__mocks__/next/image.js"
    // );
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
