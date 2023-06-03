import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const renderWithRedux = (store, component) => {
  return (<Provider store={store}>{component}</Provider>);
};

export const renderWithRouter = (component, initialRoute = "/") => {
  return (
    <MemoryRouter initialEntries={initialRoute}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
