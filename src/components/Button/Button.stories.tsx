import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "contained",
    color: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "contained",
    color: "secondary",
    children: "Secondary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "contained",
    color: "success",
    children: "Success Button",
  },
};

export const Error: Story = {
  args: {
    variant: "contained",
    color: "error",
    children: "Error Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "primary",
    children: "Outlined Button",
  },
};
