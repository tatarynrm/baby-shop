import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory } from "../redux/slices/productsSlice";
import { useEffect } from "react";
import DataTable from "../admin-components/DataGrid";
import { useState } from "react";
import { Link } from "react-router-dom";

import { categoreis } from "../localDB/categories";
import { Button } from "@mui/material";
const Products = () => {
  // const [category, setCategory] = useState(10);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const handleChangeCategory = (e) => {
    const val = e.target.value;
    dispatch(fetchByCategory(val));
  };
  useEffect(() => {
    dispatch(fetchByCategory(10));
  }, []);

  return (
    <div className="admin__content">
      <Button>
        <Link
          className="create-product-button"
          to="/admin-panel/product/create"
        >
          Створити новий товар
        </Link>
      </Button>
      <div className="products-category">
        <select name="category" onChange={(e) => handleChangeCategory(e)}>
          {categoreis.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
        <button onClick={() => handleChangeCategory()}>22 категорія</button>
      </div>
      <div></div>
      <div className="admin__products-list">
        <DataTable products={products} />
      </div>
    </div>
  );
};

export default Products;
