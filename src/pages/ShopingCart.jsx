import React from "react";
import { useSelector } from "react-redux";

const ShopingCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div className="shoping-cart">
      {cart?.map((item, id) => (
        <div key={id} className="cart">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.id}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopingCart;
