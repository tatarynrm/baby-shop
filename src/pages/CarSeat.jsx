import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CarSeatCard from "../components/card/CarSeatCard";
import carseatPhoto from "../assets/images/body-menu/car-seat.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory } from "../redux/slices/productsSlice";
import { carseatCategory } from "../constants/categories";
const CarSeat = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchByCategory(carseatCategory));
  }, []);
  return (
    <>
      <div className="carseats-header block-header">
        <img src={carseatPhoto} alt="dsd" />
      </div>
      <div className="strollers container">
        {products.map((item, i) => {
          return <CarSeatCard key={i} item={item} />;
        })}
      </div>
    </>
  );
};

export default CarSeat;

// 59 - автокрісло
// 23 коляски
