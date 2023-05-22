import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "../app/store";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const renderWithRouter = (component, initialRoute = "/") => {
  return (
    <MemoryRouter initialEntries={initialRoute}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
