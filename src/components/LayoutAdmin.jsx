import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../admin-pages/SideBar";

const LayoutAdmin = () => {
  return (
    <div className="admin">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
