import * as components from "./index";

describe("library exports", () => {
  it("exports components", () => {
    expect(components.Button).toBeDefined();
    expect(components.Card).toBeDefined();
    expect(components.Alert).toBeDefined();
    expect(components.Accordion).toBeDefined();
  });
});
