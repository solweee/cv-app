import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button component", () => {
  test("renders correctly", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
