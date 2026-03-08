import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("Button component", () => {
  it("renders button text", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders disabled button", () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("forwards props to MUI button", () => {
    render(<Button data-testid="btn">Click</Button>);

    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("forwards props to button", () => {
    render(<Button data-testid="btn">Click</Button>);

    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });
});
