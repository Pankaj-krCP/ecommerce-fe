import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { brandService } from "./brandService";

export const getAllBrands = createAsyncThunk("brands/get", async (thunkAPI) => {
  try {
    return await brandService.getBrand();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  brand: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const brandSlice = createSlice({
  name: "brand",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.brand = action.payload;
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      });
  },
});

export default brandSlice.reducer;
