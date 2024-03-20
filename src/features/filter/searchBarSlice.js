import { createSlice, createAction } from "@reduxjs/toolkit";

export const setSearch = createAction("search_product");
export const resetState = createAction("reset_all");

const initialState = {
  searchedProduct: null,
};

const searchBarSlice = createSlice({
  name: "searchbar",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setSearch, (state, action) => {
        state.searchedProduct = action.payload;
      })
      .addCase(resetState, () => initialState);
  },
});

export default searchBarSlice.reducer;
