import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/slices/productsSlice";
import { useEffect } from "react";
import Button from "@mui/material/Button";

export default function DataTable() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const columns = [
    {
      field: "picture",
      headerName: "Photo",
      width: 100,
      editable: true,
      renderCell: (params) => <img src={params.value[0]} />,
    },
    { field: "_id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "categoryId", headerName: "Category ID", width: 130 },
    { field: "importedId", headerName: "Imported ID", width: 130 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
    },
    {
      headerName: "Delete",
      width: 130,
      editable: true,
      renderCell: (params) => <button>Delete</button>,
    },
    {
      headerName: "Delete",
      width: 130,
      editable: true,
      renderCell: (params) => <button>Delete</button>,
    },
    {
      headerName: "Delete",
      width: 130,
      editable: true,
      renderCell: (params) => (
        <Button onClick={() => onClickRemove(params._id)}>Delete</Button>
      ),
    },
    //   { field: "importedId", headerName: "Imported ID", width: 130 },
    //   { field: "importedId", headerName: "Imported ID", width: 130 },
  ];

  const onClickRemove = (id) => {
    if (window.confirm("Ви впевнені що хочете видалити продукт?")) {
      dispatch(deleteProduct(id));
    }
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div style={{ height: 700, width: "100%" }}>
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
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
