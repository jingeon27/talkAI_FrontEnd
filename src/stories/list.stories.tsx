import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { List } from "../components/list";

const meta: Meta<typeof List> = {
  title: "Example/Page",
  component: List,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const LoggedOut: Story = {};
