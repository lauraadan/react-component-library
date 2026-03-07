import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  args: {
    items: [
      {
        title: "Accordion 1",
        description: "Your text here",
      },
      {
        title: "Accordion 2",
        description: "Your text here",
      },
    ],
  },
};
