import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import shaurma from "./slices/shaurmaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { filter, cart, shaurma },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
