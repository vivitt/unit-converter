import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App", () => {
  render(<App />);
  const title = screen.getAllByText("Unit Converter");
  expect(title).toHaveLength(2);
});
