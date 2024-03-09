import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bcategoryService } from "./bcategoryService";

export const getAllCategories = createAsyncThunk(
  "bcategories/get",
  async (thunkAPI) => {
    try {
      return await bcategoryService.getCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  category: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const bcategorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      });
  },
});

export default bcategorySlice.reducer;
