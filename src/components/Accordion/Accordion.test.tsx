import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
  const items = [
    {
      title: "Accordion 1",
      description: "Description 1",
    },
    {
      title: "Accordion 2",
      description: "Description 2",
    },
  ];

  it("renders all accordion titles", () => {
    render(<Accordion items={items} />);

    expect(screen.getByText("Accordion 1")).toBeInTheDocument();
    expect(screen.getByText("Accordion 2")).toBeInTheDocument();
  });

  it("renders the correct number of accordions", () => {
    render(<Accordion items={items} />);

    const accordions = screen.getAllByRole("button");
    expect(accordions).toHaveLength(items.length);
  });

  it("shows description when accordion is clicked", async () => {
    const user = userEvent.setup();

    render(<Accordion items={items} />);

    const firstAccordion = screen.getByRole("button", {
      name: "Accordion 1",
    });

    await user.click(firstAccordion);

    expect(screen.getByText("Description 1")).toBeInTheDocument();
  });

  it("can open multiple accordions", async () => {
    const user = userEvent.setup();

    render(<Accordion items={items} />);

    const firstAccordion = screen.getByRole("button", {
      name: "Accordion 1",
    });

    const secondAccordion = screen.getByRole("button", {
      name: "Accordion 2",
    });

    await user.click(firstAccordion);
    await user.click(secondAccordion);

    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });
});
