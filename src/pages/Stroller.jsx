import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StrollerCard from "../components/card/StrollerCard";
import strollers from "../localDB/convertjson.json";
import strollerPhoto from "../assets/images/body-menu/stroller.webp";
import Pagination from "../components/pagination/Pagination";

const Stroller = () => {
  const data = strollers.shop.offers.offer;
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
        <div className="strollers container">
          {currentProduct.map((item, i) => {
            return <StrollerCard key={i} item={item} />;
          })}
        </div>
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
