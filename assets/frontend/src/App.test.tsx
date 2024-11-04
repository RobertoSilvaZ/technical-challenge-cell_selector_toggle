import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("renders a page", () => {
    const { getByText } = render(<App />);
    expect(getByText("Hello world")).toBeInTheDocument();
  });
});
