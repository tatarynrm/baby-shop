import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("/products");
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    axios.delete(`/products/${id}`);
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    // Отримання товарів
    [fetchProducts.pending]: (state, action) => {
      state.products = [];
      console.log("pending products");
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      console.log("fulfiled products --- fullfield");
    },
    [fetchProducts.rejected]: (state, action) => {
      state.products = [];
      console.log("rejected products");
    },
    // Видалення
    [deleteProduct.pending]: (state, action) => {},

    [deleteProduct.fulfilled]: (state, action) => {
      state.products = state.products.filter(
        (obj) => obj._id !== action.meta.arg
      );
      console.log(state.products);
      console.log(action);
    },
    [deleteProduct.rejected]: (state, action) => {
      state.products = [...state.products];
    },
  },
});

// Action creators are generated for each case reducer function
// export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default productSlice.reducer;
