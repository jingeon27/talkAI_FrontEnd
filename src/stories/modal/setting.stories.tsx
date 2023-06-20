import type { Meta, StoryObj } from "@storybook/react";
import { SettingModal } from "@/components/modal/setting";

const meta: Meta<typeof SettingModal> = {
  title: "Modal/Setting",
  component: SettingModal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SettingModal>;

export const SettingComponent: Story = {
  args: {
    onClick: () => {},
    width: 100,
  },
};
