import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";

describe("ThemeProvider", () => {
  it("renders children", () => {
    render(
      <ThemeProvider>
        <button>Test Button</button>
      </ThemeProvider>,
    );

    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
