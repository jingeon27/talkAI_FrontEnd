import type { Meta, StoryObj } from "@storybook/react";
import { ErrorToast } from "@/app/components/toast/error";

const meta: Meta<typeof ErrorToast> = {
  title: "Toast",
  component: ErrorToast,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ErrorToast>;

export const Default: Story = {
  args: {
    comment: "",
  },
};
