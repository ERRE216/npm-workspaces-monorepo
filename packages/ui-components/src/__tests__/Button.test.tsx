import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../index";

test("Button", () => {
  const { debug } = render(<Button text={"Button"} backgroundColor={""} />);
  debug();
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});
