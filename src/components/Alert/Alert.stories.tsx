import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    severity: "success",
    children: "This is a success Alert.",
  },
};

export const Error: Story = {
  args: {
    severity: "error",
    children: "This is an error Alert.",
  },
};
