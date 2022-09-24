import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CarSeatCard from "../components/card/CarSeatCard";
import carseatPhoto from "../assets/images/body-menu/car-seat.webp";
import data2 from "../localDB/data2.json";
const CarSeat = () => {
  const data = data2.shop.offers.offer;
  const [products, setProducts] = useState([]);
  console.log(data);
  useEffect(() => {
    const carSeatsFilter = data.filter((item) => item.categoryId === "59");
    setProducts(carSeatsFilter);
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

// 59 - автокрісло
// 23 коляски
