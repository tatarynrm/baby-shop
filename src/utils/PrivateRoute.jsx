import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/authSlice";

const PrivateRoutes = ({ children, ...rest }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
