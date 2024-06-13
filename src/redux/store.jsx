import { configureStore } from "@reduxjs/toolkit";

//Slices
import counterSlice from "./features/counterSlice";
import themeSlice from "./features/themeSlice";
import crudSlice, { loadFromLocalStorage } from "./features/crudSlice";

//ActionSlices
import cartSlice from "./features/cartSlice";

//Fetch Slices
import productsSlice from "./features/productsSlice";
import productDetailsSlice from "./features/productDetailsSlice";
import wishListSlice from "./features/wishListSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    themeSlice: themeSlice,
    crud: crudSlice,
    allProducts: productsSlice,
    cart: cartSlice,
    productDetails: productDetailsSlice,
    wishList: wishListSlice,
  },
});

// Load todos from localStorage if available
const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
store.dispatch(loadFromLocalStorage(localTodos));

export default store;
