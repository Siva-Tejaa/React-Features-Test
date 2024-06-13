import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        return;
      }

      state.cart.push(action.payload);
    },

    decreaseProductQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        return;
      }
      state.cart = state.cart.filter(
        (product) => product?.id !== action.payload.id
      );
    },

    deleteProductFromCart: (state, action) => {
      const findProductIndex = state.cart.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      );

      state.cart.splice(findProductIndex, 1);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
