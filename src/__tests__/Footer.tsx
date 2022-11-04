import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders Footer", () => {
  render(<Footer color="#fffff" />);
  const text = screen.getByText("© Viviana Yanez 2022 | Made with ♥︎");
  expect(text).toBeInTheDocument();

  const link = screen.getByText("Unit Converter");
  expect(link).toBeInTheDocument();
});
