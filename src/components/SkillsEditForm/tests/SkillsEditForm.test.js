import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { SkillsEditForm } from "../SkillsEditForm";
import { createReduxStore } from "../../../app/store";
import { renderWithRedux } from "../../../utils/test-utils";

describe("SkillsEditForm", () => {
  test("displays validation errors for invalid inputs", async () => {
    const store = createReduxStore();
    render(renderWithRedux(store, <SkillsEditForm />));

    const button = screen.getByTestId("button");

    fireEvent.click(button);
    await waitFor(() => {
      expect(
        screen.getByText("Skill name is a required field!")
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.getByText("Skill range is a required field!")
      ).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("Skill name:"), {
      target: { value: "JavaScript" },
    });
    fireEvent.change(screen.getByLabelText("Skill range:"), {
      target: { value: "5" },
    });

    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.queryByText("Skill name is a required field!")).toBeNull();
    });
    await waitFor(() => {
      expect(
        screen.getByText("Skill range must be greater than or equal to 10")
      ).toBeInTheDocument();
    });
  });
});
