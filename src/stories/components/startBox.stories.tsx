import type { Meta, StoryObj } from "@storybook/react";
import { StartBox } from "@/components/atom/start-box";

const meta: Meta<typeof StartBox> = {
  title: "Components/StartBox",
  component: StartBox,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof StartBox>;

export const Start: Story = {
  args: {
    name: "황진성",
    role: "찐따",
    user: {
      name: "김진건",
      email: "jingeon27@gmail.com",
    },
  },
};
