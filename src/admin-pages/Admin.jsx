import React, { useState, useEffect } from "react";
import XMLParser from "react-xml-parser";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
const Admin = () => {
  return <div className="admin__content"></div>;
};

export default Admin;
