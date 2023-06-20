import type { Meta, StoryObj } from "@storybook/react";
import { NewChat } from "@/components/atom/new-chat";

const meta: Meta<typeof NewChat> = {
  title: "Components/NewChat",
  component: NewChat,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NewChat>;

export const Chat: Story = {
  args: {
    onClick: () => {},
  },
};
