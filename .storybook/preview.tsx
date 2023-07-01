import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";
import React from "react";
import { CustomApolloProvider } from "../src/api/customApolloProvider";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <CustomApolloProvider>
        <ThemeProvider {...{ theme }}>
          <Story />
        </ThemeProvider>
      </CustomApolloProvider>
    ),
  ],
};

export default preview;
