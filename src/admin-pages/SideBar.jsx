import React from "react";
import { Link } from "react-router-dom";
import { logout, selectIsAuth } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
const SideBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector((state) => state.auth.data);
  const onClickLogout = () => {
    if (window.confirm("Ви впевнені що хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <div className="admin__sidebar">
      <div className="admin__sidebar-top">
        <h2>
          <Link to={"/admin-panel"}>Admin</Link>{" "}
        </h2>
        <div className="user">{user.fullName}</div>
      </div>

      <div className="admin__sidebar-menu">
        <ul>
          <Link className="admin__sidebar-links" to={"products"}>
            <Inventory2OutlinedIcon sx={{ fontSize: "3rem" }} />
            <li>Продукти</li>
          </Link>
          <Link className="admin__sidebar-links" to={"users"}>
            <AccountCircleOutlinedIcon sx={{ fontSize: "3rem" }} />
            <li>Користувачі</li>
          </Link>
          <Link className="admin__sidebar-links" to={"users"}>
            <PaidOutlinedIcon sx={{ fontSize: "3rem" }} />
            <li>Акції</li>
          </Link>
        </ul>
      </div>

      <Stack className="admin__sidebar-bottom" spacing={2} direction="column">
        <Button
          href="http://localhost:3000"
          target="__blank"
          variant="contained"
        >
          На сайт
        </Button>
        <Button variant="contained" color="error" onClick={onClickLogout}>
          Вийти з Адмін Панелі
        </Button>
      </Stack>
    </div>
  );
};

export default SideBar;
