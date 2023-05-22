import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Panel } from "../Panel";
import { renderWithRouter } from "../../../utils/test-utils";

describe("Panel component", () => {
  test("renders correctly", () => {
    render(renderWithRouter(<Panel />, ["/"]));

    expect(screen.getByText("Go back")).toBeInTheDocument();
  });

  test("should toggle the panel visibility when NavButton is clicked", () => {
    render(renderWithRouter(<Panel />, ["/"]));
    const panel = screen.getByTestId("panel");
    const navButton = screen.getByTestId("nav-button");
    fireEvent.click(navButton);
    expect(panel).toHaveClass("hidden");

    fireEvent.click(navButton);
    expect(panel).not.toHaveClass("hidden");

    expect(panel).toHaveClass("panel");
  });

  test("should navigate to the home page when 'Go back' button is clicked", () => {
    render(renderWithRouter(<Panel />, ["/"]));

    const goBackButton = screen.getByText("Go back");

    fireEvent.click(goBackButton);

    expect(screen.getByText("Know more")).toBeInTheDocument();
  });
});
