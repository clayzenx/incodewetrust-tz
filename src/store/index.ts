import { configureStore } from "@reduxjs/toolkit";
import { jokeReducer } from "./modules/joke/jokeReducer";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    joke: jokeReducer
  },
  middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
