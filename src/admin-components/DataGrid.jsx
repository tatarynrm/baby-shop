import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  changeAvailable,
} from "../redux/slices/productsSlice";
import { useEffect } from "react";
import { useState } from "react";
import { Switch } from "@mui/material";
import axios from "../axios";
import ProductActions from "./ProductActions";

export default function DataTable() {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const onClickRemove = (id) => {
    if (window.confirm("Ви впевнені що хочете видалити продукт?")) {
      dispatch(deleteProduct(id));
    }
  };
  const handleAvailableChange = async (id) => {
    try {
      const { data } = await axios.patch(`/products/edit/${id}`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      field: "picture",
      headerName: "Фото",
      width: 80,
      editable: true,
      renderCell: (params) => <img src={params.value[0]} />,
    },
    { field: "_id", headerName: "ID", width: 70, hide: true },
    { field: "name", headerName: "Назва", width: 350 },
    { field: "categoryId", headerName: "Категорія", width: 130 },
    { field: "importedId", headerName: "Imported ID", width: 130, hide: true },
    { field: "vendor", headerName: "Brand", width: 130 },
    {
      field: "price",
      headerName: "Ціна ГРН",
      type: "number",
      width: 140,
    },
    {
      field: "available",
      headerName: "Наявність",
      width: 130,
      renderCell: (params) => <ProductActions {...{ params }} />,
    },
  ];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div style={{ height: 750, width: "100%" }}>
      <DataGrid
        className="data-grid"
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        getRowId={(row) => row._id}
        key={products._id}
      />
    </div>
  );
}
