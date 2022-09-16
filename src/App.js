import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/card/CardDetails";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Stroller from "./pages/Stroller";

function App() {
  return (
    <div className="baby-shop">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="strollers" element={<Stroller />} />
            <Route path="strollers/:strollerId" element={<CardDetails />} />
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
