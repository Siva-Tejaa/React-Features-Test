import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addRemoveProductToWishlist: (state, action) => {
      const existingProduct = state.wishList.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        state.wishList = state.wishList.filter(
          (product) => product?.id !== action.payload.id
        );
        return;
      }

      state.wishList.push(action.payload);
    },
  },
});

export const { addRemoveProductToWishlist } = wishListSlice.actions;

export default wishListSlice.reducer;
