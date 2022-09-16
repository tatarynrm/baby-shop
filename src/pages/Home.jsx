import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import strollers from "../localDB/data.json";
const data = strollers.yml_catalog.shop.offers.offer;

const Home = () => {
  const [products, setProducts] = useState([]);

  const showCheapest = () => {
    const sortedProducts = [...products];
    setProducts(sortedProducts.sort((a, b) => a.price - b.price));
  };
  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <>
      <div className="container">
        <button className="btn" onClick={() => showCheapest()}>
          Cпочатку дешевші
        </button>
        <div className="strollers container">
          {products.map((item, i) => {
            return <Card key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
