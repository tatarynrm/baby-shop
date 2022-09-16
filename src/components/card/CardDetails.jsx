import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import strollers from "../../localDB/data.json";
const data = strollers.yml_catalog.shop.offers.offer;

const CardDetails = () => {
  const { strollerId } = useParams();
  console.log(strollerId);
  const product = data.find((item) => item.vendorCode === 40019);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [strollerId]);
  return (
    <div className="product__details">
      <p>{strollerId}</p>
      <p>{product.price}</p>
      <p>{product.name}</p>
      <p>{product.vendor}</p>
    </div>
  );
};

export default CardDetails;
