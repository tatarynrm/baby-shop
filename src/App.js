import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CardDetails from "./components/card/CardDetails";
import CarSeatsDetail from "./components/card/CarSeatsDetail";
import Layout from "./components/Layout";
import CarSeat from "./pages/CarSeat";
import Home from "./pages/Home";
import ShopingCart from "./pages/ShopingCart";
import Stroller from "./pages/Stroller";
import LayoutAdmin from "./components/LayoutAdmin";
import Admin from "./admin-pages/Admin";
import Products from "./admin-pages/Products";
import Users from "./admin-pages/Users";
import Login from "./admin-pages/Login";
import PrivateRoutes from "./utils/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe } from "./redux/slices/authSlice";
import ProductEdit from "./admin-pages/ProductEdit";
import CreateProduct from "./admin-pages/CreateProduct";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <div className="baby-shop">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="strollers" element={<Stroller />} />
            <Route path="strollers/:id" element={<CardDetails />} />
            <Route path="car-seats" element={<CarSeat />} />
            <Route path="car-seats/:carseatId" element={<CarSeatsDetail />} />
            <Route path="shoping-cart" element={<ShopingCart />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route exact path="/admin-panel" element={<LayoutAdmin />}>
              <Route index element={<Admin />} />
              <Route path="products" element={<Products />} />
              <Route path="products/edit" element={<ProductEdit />} />
              <Route path="users" element={<Users />} />
              <Route path="product/create" element={<CreateProduct />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
