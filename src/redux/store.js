import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCart/shoppingCartSlice";
export default configureStore({
  reducer: {
    cart: shoppingCartReducer,
  },
});
