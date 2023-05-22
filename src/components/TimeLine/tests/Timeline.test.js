import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderWithProviders, renderWithRedux, renderWithRouter } from "../../../utils/test-utils";
import { TimeLine } from "../TimeLine";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createReduxStore } from "../../../app/store";

const server = setupServer(
  rest.get("/api/educations", (req, res, ctx) => {
    return res(
      ctx.json({
        educations: [
          {
            date: 2001,
            title: "Timeline example",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
          },
        ],
      })
    );
  })
);

describe("Timeline component", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("data is fetched when page loads", async () => {
    const store = createReduxStore();
    render(renderWithRedux(store, renderWithRouter(<TimeLine />, ["/"])));
  

    await waitFor(() => {
      expect(screen.getByText("Timeline example")).toBeInTheDocument();
    });
  });
});
