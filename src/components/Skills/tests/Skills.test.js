import { renderWithRedux } from "../../../utils/test-utils";
import { Skills } from "../Skills";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createReduxStore } from "../../../app/store";

describe("Skills component", () => {
  test("renders the component", () => {
    const store = createReduxStore({
      skills: [
        { skills: { skillName: "SCSS", skillRange: "23" } },
        { skills: { skillName: "CSS", skillRange: "45" } },
      ],
    });
    render(renderWithRedux(store, <Skills />));

    expect(screen.getByText("Open edit")).toBeInTheDocument();

    expect(screen.getByText("SCSS")).toBeInTheDocument();
  });

  test("toggles SkillsEditForm visibility", () => {
    const store = createReduxStore();
    render(renderWithRedux(store, <Skills />));
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(screen.getByText("Close edit")).toBeInTheDocument();
    expect(screen.getByText("Skill name:")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText("Open edit")).toBeInTheDocument();
  });
});
