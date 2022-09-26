import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./slices/shoppingCartSlice";
import productsSliceReducer from "./slices/productsSlice";
import authSliceReducer from "./slices/authSlice";
export default configureStore({
  reducer: {
    cart: shoppingCartReducer,
    products: productsSliceReducer,
    auth: authSliceReducer,
  },
});
