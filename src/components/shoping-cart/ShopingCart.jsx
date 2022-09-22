import React from "react";
import { useSelector } from "react-redux";
const ShopingCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return <div>ShopingCart {cart.length}</div>;
};

export default ShopingCart;
