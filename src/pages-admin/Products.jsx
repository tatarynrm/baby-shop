import React from "react";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { useEffect } from "react";
import CreateProducts from "../components/admin-components/CreateProducts";
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const updateDB = (e) => {
    e.preventDefault();
    console.log("piders");
  };
  return (
    <div className="admin__content">
      <div className="update-db">
        <form className="update-db-from">
          <input type="file" />
          <button onClick={(e) => updateDB(e)} className="btn">
            Оновити базу
          </button>
        </form>
      </div>

      <CreateProducts />
      <div className="admin__products-list">
        {products?.map((item) => (
          <div key={item._id} className="admin-product">
            <div className="admin-product-image">
              <img src={item.picture[0]} />
            </div>
            <div>{item.importedId}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.vendor}</div>
            <div>{item.vendorCode}</div>
            <button>Видалити товар</button>
            <button>Редагувати</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
