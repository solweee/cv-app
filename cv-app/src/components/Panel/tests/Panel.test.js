import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Panel } from "../Panel";
import { renderWithRouter } from "../../../utils/test-utils";

describe("Panel component", () => {
  renderWithRouter(<Panel />, ["/inner"]);
  const goBackButton = screen.getByText("Go back");
  expect(goBackButton).toBeInTheDocument();
});
