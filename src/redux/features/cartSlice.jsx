import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

// Helper function to save todos to localStorage
const saveToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
        saveToLocalStorage(state.cart);
        return;
      }

      state.cart.push(action.payload);
      saveToLocalStorage(state.cart);
    },

    decreaseProductQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        saveToLocalStorage(state.cart);

        return;
      }
      state.cart = state.cart.filter(
        (product) => product?.id !== action.payload.id
      );

      saveToLocalStorage(state.cart);
    },

    deleteProductFromCart: (state, action) => {
      const findProductIndex = state.cart.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      );

      state.cart.splice(findProductIndex, 1);
      saveToLocalStorage(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      saveToLocalStorage(state.cart);
    },
    cartItemsLoadFromLocalStorage: (state, action) => {
      state.cart = action.payload;
      saveToLocalStorage(state.cart);
    },
  },
});

export const {
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  clearCart,
  cartItemsLoadFromLocalStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
