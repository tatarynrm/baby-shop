import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("/products");
    return data;
  }
);
// TEST
export const fetchByCategory = createAsyncThunk(
  "products/fetchStrollers",
  async (categoryId) => {
    const { data } = await axios.get(`/products/category/${categoryId}`);
    return data;
  }
);
export const fetchById = createAsyncThunk("products/fetchById", async (id) => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
});

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    axios.delete(`/products/${id}`);
  }
);

export const changeAvailable = createAsyncThunk(
  "products/changeAvailable",
  async (id) => {
    axios.patch(`/products/available/${id}`);
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    // Отримання всіх товарів
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
    // Отримання по категорії
    [fetchByCategory.pending]: (state, action) => {
      state.products = [];
      console.log("pending products");
    },
    [fetchByCategory.fulfilled]: (state, action) => {
      state.products = action.payload;
      console.log("fulfiled products --- fullfield");
    },
    [fetchByCategory.rejected]: (state, action) => {
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
    // Шукаємо по ID
    [fetchById.pending]: (state, action) => {
      console.log("pending");
    },

    [fetchById.fulfilled]: (state, action) => {
      // state.products = state.products.filter(
      //   (obj) => obj._id !== action.meta.arg
      // );
      state.products = action.payload;
      console.log(state.products);
    },
    [fetchById.rejected]: (state, action) => {
      state.products = [...state.products];
    },
  },
});

// Action creators are generated for each case reducer function
// export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default productSlice.reducer;
