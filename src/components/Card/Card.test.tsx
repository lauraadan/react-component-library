import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Card } from "./Card";

describe("Card", () => {
  it("renders the title", () => {
    render(<Card title="Card title" />);

    expect(screen.getByText("Card title")).toBeInTheDocument();
  });

  it("renders the text", () => {
    render(<Card text="Card description" />);

    expect(screen.getByText("Card description")).toBeInTheDocument();
  });

  it("renders the image when provided", () => {
    render(
      <Card title="Card title" image="test-image.jpg" imageAlt="Test image" />,
    );

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
    expect(image).toHaveAttribute("alt", "Test image");
  });

  it("uses title as alt when imageAlt is not provided", () => {
    render(<Card title="Card title" image="test-image.jpg" />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("alt", "Card title");
  });

  it("does not render image when image prop is not provided", () => {
    render(<Card title="Card title" />);

    const image = screen.queryByRole("img");

    expect(image).not.toBeInTheDocument();
  });
});
