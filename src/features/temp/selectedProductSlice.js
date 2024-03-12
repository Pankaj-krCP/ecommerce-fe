import { createSlice, createAction } from "@reduxjs/toolkit";

export const selectColor = createAction("select_color");
export const selectCount = createAction("select_count");
export const resetState = createAction("reset_all");

const initalState = {
  selectedColor: "",
  selectedCount: "",
};

const selectedProduct = createSlice({
  name: "selectedProduct",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectColor, (state, action) => {
        state.selectedColor = action.payload;
      })
      .addCase(selectCount, (state, action) => {
        state.selectedCount = action.payload;
      })
      .addCase(resetState, () => initalState);
  },
});

export default selectedProduct.reducer;
