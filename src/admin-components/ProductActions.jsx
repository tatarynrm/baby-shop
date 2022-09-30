import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/slices/productsSlice";
const ProductActions = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const onClickRemove = (id) => {
    if (window.confirm("Ви впевнені що хочете видалити продукт?")) {
      dispatch(deleteProduct(id));
    }
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Tooltip title="Delete">
        <IconButton onClick={() => onClickRemove(id)}>
          <DeleteIcon
            sx={{ color: "lightblue", fontSize: "3rem", cursor: "pointer" }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit">
        <IconButton onClick={() => onClickRemove(id)}>
          <EditIcon
            sx={{ color: "lightblue", fontSize: "3rem", cursor: "pointer" }}
          />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ProductActions;
