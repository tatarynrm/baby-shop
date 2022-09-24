import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/card/CardDetails";
import CarSeatsDetail from "./components/card/CarSeatsDetail";
import Layout from "./components/Layout";
import LayoutAdmin from "./components/LayoutAdmin";
import Admin from "./pages-admin/Admin";
import Login from "./pages-admin/Login";
import Products from "./pages-admin/Products";
import Users from "./pages-admin/Users";
import CarSeat from "./pages/CarSeat";
import Home from "./pages/Home";
import ShopingCart from "./pages/ShopingCart";
import Stroller from "./pages/Stroller";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="baby-shop">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="strollers" element={<Stroller />} />
            <Route path="strollers/:strollerId" element={<CardDetails />} />
            <Route path="car-seats" element={<CarSeat />} />
            <Route path="car-seats/:carseatId" element={<CarSeatsDetail />} />
            <Route path="shoping-cart" element={<ShopingCart />} />
          </Route>
          <Route>
            <Route path="/admin-panel" element={<LayoutAdmin />}>
              <Route index element={<Admin />} />
              <Route path="products" element={<Products />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
{
  /* <div className="container">
<div className="strollers">
  {shopSlice.map((item) => (
    <Card item={item} />
  ))}
</div>
</div> */
}
