import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import inputReducer from "../features/input/inputSlice";
import geminiReducer from "../features/gemini/geminiSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    gemini: geminiReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
