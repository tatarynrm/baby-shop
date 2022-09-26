import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StrollerCard from "../components/card/StrollerCard";
import strollers from "../localDB/convertjson.json";
import strollerPhoto from "../assets/images/body-menu/stroller.webp";
import Pagination from "../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
const Stroller = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <div className="strollers-page">
        <div className="strollers-header block-header">
          <img src={strollerPhoto} alt="dsd" />
        </div>

        <div className="strollers container">
          {products.map((item, i) => {
            return <StrollerCard key={i} item={item} />;
          })}
        </div>
        {/* {strol.map((item, i) => (
          <div key={i} className="111">
            <p>{item.chatLastName}</p>
          </div>
        ))} */}
        {/* <Pagination
          blocksPerPage={blocksPerPage}
          totalProducts={products.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        /> */}
      </div>
    </>
  );
};

export default Stroller;
