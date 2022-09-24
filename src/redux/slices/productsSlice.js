import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("/products");
    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.products = [];
      console.log("pending products");
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      console.log("fulfiled products");
    },
    [fetchProducts.rejected]: (state, action) => {
      state.products = [];
      console.log("rejected products");
    },
  },
});

// Action creators are generated for each case reducer function
// export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default productSlice.reducer;
