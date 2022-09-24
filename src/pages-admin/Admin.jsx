import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
const Admin = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return <div className="admin__content"></div>;
};

export default Admin;
