import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("shoping-cart")
      ? JSON.parse(localStorage.getItem("shoping-cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({
        name: action.payload.name,
        price: action.payload.price,
        id: action.payload.vendorCode,
        img: action.payload.picture,
        count: 1,
      });

      localStorage.setItem("shoping-cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
