import { createSlice, createAction } from "@reduxjs/toolkit";

export const setCategoryFilter = createAction("category_filter");
export const resetState = createAction("reset_all");

const initialState = {
  category: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCategoryFilter, (state, action) => {
        state.category = action.payload;
      })
      .addCase(resetState, () => initialState);
  },
});

export default filterSlice.reducer;
