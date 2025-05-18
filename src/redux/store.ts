import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import shaurma from "./slices/shaurmaSlice";

export const store = configureStore({
  reducer: { filter, cart, shaurma },
});

export type RootState = ReturnType<typeof store.getState>;
