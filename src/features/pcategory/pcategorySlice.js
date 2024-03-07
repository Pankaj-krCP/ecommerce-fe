import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pcategoryService } from "./pcategoryService";

export const getAllCategories = createAsyncThunk(
  "pcategories/get",
  async (thunkAPI) => {
    try {
      return await pcategoryService.getCategory();
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

const pcategorySlice = createSlice({
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

export default pcategorySlice.reducer;
