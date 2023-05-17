import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./utils/router/AppRouter";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
