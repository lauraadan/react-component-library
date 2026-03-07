import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders the alert message", () => {
    render(<Alert severity="success">Success message</Alert>);

    expect(screen.getByText("Success message")).toBeInTheDocument();
  });

  it("renders with role alert", () => {
    render(<Alert severity="error">Error message</Alert>);

    const alert = screen.getByRole("alert");

    expect(alert).toBeInTheDocument();
  });

  it("applies the severity prop", () => {
    render(<Alert severity="warning">Warning message</Alert>);

    const alert = screen.getByRole("alert");

    expect(alert).toHaveClass("MuiAlert-standardWarning");
  });

  it("renders children correctly", () => {
    render(
      <Alert severity="info">
        <span>Custom content</span>
      </Alert>,
    );

    expect(screen.getByText("Custom content")).toBeInTheDocument();
  });
});
