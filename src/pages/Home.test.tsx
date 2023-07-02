import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Home";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Plants Identification/i);
  expect(linkElement).toBeInTheDocument();
});
