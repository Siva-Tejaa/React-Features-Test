import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

// Helper function to save todos to localStorage
const saveToLocalStorage = (wishListItems) => {
  localStorage.setItem("wishListItems", JSON.stringify(wishListItems));
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
        saveToLocalStorage(state.wishList);
        return;
      }

      state.wishList.push(action.payload);
      saveToLocalStorage(state.wishList);
    },
    loadWishListItemsFromLocalStorage: (state, action) => {
      state.wishList = action.payload;
      saveToLocalStorage(state.wishList);
    },
  },
});

export const { addRemoveProductToWishlist, loadWishListItemsFromLocalStorage } =
  wishListSlice.actions;

export default wishListSlice.reducer;
