import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/slices/productsSlice";
import { useEffect } from "react";
import DataTable from "../admin-components/DataGrid";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

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
        {/* {products?.map((item) => (
          <div key={item._id} className="admin-product">
            <div className="admin-product-image">
              <img src={item.picture[0]} />
            </div>
            <div>{item.importedId}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.param.name}</div>
            <div style={{ height: "auto" }}>{item.param.text}</div>
            <button
              onClick={() => onClickRemove(item._id)}
              className="delete-btn"
            >
              Видалити товар
            </button>
            <button>Редагувати</button>
          </div>
        ))} */}
        <DataTable />
      </div>
    </div>
  );
};

export default Products;
