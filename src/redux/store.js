import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./slices/shoppingCartSlice";
import productsSliceReducer from "./slices/productsSlice";
export default configureStore({
  reducer: {
    cart: shoppingCartReducer,
    products: productsSliceReducer,
  },
});
