import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StrollerCard from "../components/card/StrollerCard";
import strollers from "../localDB/convertjson.json";
import strollerPhoto from "../assets/images/body-menu/stroller.webp";
import Pagination from "../components/pagination/Pagination";
import axios from "axios";

const Stroller = () => {
  const data = strollers.shop.offers.offer;
  const [strol, setStrol] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blocksPerPage, setBlocksPerPage] = useState(12);
  const lastBlockIndex = currentPage * blocksPerPage;
  const firstBlockIndex = lastBlockIndex - blocksPerPage;
  const currentProduct = products.slice(firstBlockIndex, lastBlockIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // const fetchData = () => {
  //   localStorage.setItem("arrow", "dasdaddas");
  //   axios
  //     .get("https://62a376a85bd3609cee6a9eae.mockapi.io/telegramUsers")
  //     .then((res) => setStrol(res.data));
  // };
  // fetchData();
  const showCheapest = () => {
    const sortedProducts = [...products];
    setProducts(sortedProducts.sort((a, b) => a.price - b.price));
  };
  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <>
      <div className="strollers-page">
        <div className="strollers-header block-header">
          <img src={strollerPhoto} alt="dsd" />
        </div>
        <button onClick={() => showCheapest} className="sorted">
          Сортувати за ціною
        </button>
        <div className="strollers container">
          {currentProduct.map((item, i) => {
            return <StrollerCard key={i} item={item} />;
          })}
        </div>
        {strol.map((item, i) => (
          <div key={i} className="111">
            <p>{item.chatLastName}</p>
          </div>
        ))}
        <Pagination
          blocksPerPage={blocksPerPage}
          totalProducts={products.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </>
  );
};

export default Stroller;
