import { configureStore } from "@reduxjs/toolkit";

//Slices
import counterSlice from "./features/counterSlice";
import themeSlice from "./features/themeSlice";
import crudSlice, { loadFromLocalStorage } from "./features/crudSlice";

import networkSlice from "./features/networkSlice";

//ActionSlices
import cartSlice, { cartItemsLoadFromLocalStorage } from "./features/cartSlice";

//Fetch Slices
import productsSlice from "./features/productsSlice";
import productDetailsSlice from "./features/productDetailsSlice";
import wishListSlice, {
  loadWishListItemsFromLocalStorage,
} from "./features/wishListSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    themeSlice: themeSlice,
    crud: crudSlice,
    allProducts: productsSlice,
    cart: cartSlice,
    productDetails: productDetailsSlice,
    wishList: wishListSlice,
    network: networkSlice,
  },
});

// Load todos from localStorage if available
const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
store.dispatch(loadFromLocalStorage(localTodos));

//Load Cart Items from localStorage if available
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
store.dispatch(cartItemsLoadFromLocalStorage(cartItems));

//Load WishList Items from localStorage if available
const wishListItems = JSON.parse(localStorage.getItem("wishListItems")) || [];
store.dispatch(loadWishListItemsFromLocalStorage(wishListItems));

export default store;
