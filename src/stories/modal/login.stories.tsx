import type { Meta, StoryObj } from "@storybook/react";
import { LoginModal } from "@/components/modal/login";

const meta: Meta<typeof LoginModal> = {
  title: "Modal/Login",
  component: LoginModal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof LoginModal>;

export const LoginComponent: Story = {
  args: {},
};
