import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Check if the heading is getting rendered", () => {
  render(<Contact />);

  //Query or Querying
  const heading = screen.getByRole("heading", { name: "Contact" });
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Check if button named submit is getting rendered", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});

test("Check if button is getting rendered", () => {
  render(<Contact />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Check if input with placeholder name is getting rendered", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");

  expect(inputName).toBeInTheDocument();
});

test("Check if 2 inputs are getting rendered", () => {
  render(<Contact />);
  const inputs = screen.getAllByRole("textbox");

  // console.log(inputs);

  expect(inputs.length).toBe(2);
});
