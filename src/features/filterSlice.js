import { createSlice, createAction } from "@reduxjs/toolkit";

export const setTagFilter = createAction("tag_filter");
export const setCategoryFilter = createAction("category_filter");
export const setBrandFilter = createAction("brand_filter");
export const setMinpriceFilter = createAction("minprice_filter");
export const setMaxpriceFilter = createAction("maxprice_filter");
export const setSortFilter = createAction("sort_filter");
export const resetState = createAction("reset_all");

const initialState = {
  tag: null,
  category: null,
  brand: null,
  minPrice: null,
  maxPrice: null,
  sort: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setTagFilter, (state, action) => {
        state.tag = action.payload;
      })
      .addCase(setCategoryFilter, (state, action) => {
        state.category = action.payload;
      })
      .addCase(setBrandFilter, (state, action) => {
        state.brand = action.payload;
      })
      .addCase(setMinpriceFilter, (state, action) => {
        state.minPrice = action.payload;
      })
      .addCase(setMaxpriceFilter, (state, action) => {
        state.maxPrice = action.payload;
      })
      .addCase(setSortFilter, (state, action) => {
        state.sort = action.payload;
      })
      .addCase(resetState, () => initialState);
  },
});

export default filterSlice.reducer;
