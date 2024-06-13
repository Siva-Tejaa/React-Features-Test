import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  productDetails: [],
  error: null,
};

export const fetchProductDetails = createAsyncThunk(
  "fetchProductDetails",
  async (productId) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    return data;
  }
);

const productDetailsSlice = createSlice({
  name: "Product Details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = "success";
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
