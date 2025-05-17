import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShaurma = createAsyncThunk(
  "shaurma/fetchShaurmaStatus",
  async ({ currentPage, categoryId, sort, order, searchValue }) => {
    const res = await axios.get(
      `https://67c46ab7c4649b9551b38dbe.mockapi.io/items?page=${currentPage}&limit=8&${
        categoryId !== 0 ? `category=${categoryId}` : ""
      }&sortBy=${sort.sortProperty.replace("-", "")}&order=${order}${
        searchValue ? `&search=${searchValue}` : ""
      }`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const shaurmaSlice = createSlice({
  name: "shaurma",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShaurma.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchShaurma.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchShaurma.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItems } = shaurmaSlice.actions;

export default shaurmaSlice.reducer;
