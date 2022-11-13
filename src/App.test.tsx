import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("render the components in the app.tsx", () => {
  test("renders app title element", () => {
    render(<App />);
    const titleElement = screen.getByText(/React Posts Sharer/i);
    expect(titleElement).toBeInTheDocument();
  });
});
