import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CarSeatCard from "../components/card/CarSeatCard";
import carseatPhoto from "../assets/images/body-menu/car-seat.webp";
import data2 from "../localDB/data2.json";
const CarSeat = () => {
  const data = data2.shop.offers.offer;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <>
      <div className="carseats-header block-header">
        <img src={carseatPhoto} alt="dsd" />
      </div>
      <div className="strollers container">
        {products.slice(0, 30).map((item, i) => {
          return <CarSeatCard key={i} item={item} />;
        })}
      </div>
    </>
  );
};

export default CarSeat;
