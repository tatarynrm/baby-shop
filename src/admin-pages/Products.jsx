import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/slices/productsSlice";
import { useEffect } from "react";
import DataTable from "../admin-components/DataGrid";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);
  const [showCreate, setShowCreate] = useState(false);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onClickRemove = (id) => {
    if (window.confirm("Ви впевнені що хочете видалити продукт?")) {
      dispatch(deleteProduct(id));
    }
  };
  return (
    <div className="admin__content">
      <div className="admin__products-list">
        <div className="products-actions"></div>
        <DataTable />
      </div>
      <Link to="/admin-panel/product/create">Створити новий товар</Link>
    </div>
  );
};

export default Products;
