import { combineReducers, configureStore } from "@reduxjs/toolkit";
import educationSlice from "./features/education/educationSlice";
import skillsScice from "./features/skills/skillsScice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineReducers({
  education: educationSlice,
  skills: skillsScice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["skills"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createReduxStore = (initialState) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      preloadedState: initialState,
  });
export const store = createReduxStore();
export const persistor = persistStore(store);
