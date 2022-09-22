import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data2 from "../../localDB/data2.json";
const data = data2.shop.offers.offer;
const CarSeatsDetail = () => {
  const { carseatId } = useParams();
  const product = data.find((item) => item._id === carseatId);
  const [currentImg, setCurrentImg] = useState(product.picture[0]);
  const regExp = /(<.*?>)/g;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const setPicture = (picture) => {
    setCurrentImg(picture);
  };
  return (
    <div className="product__details container">
      <div className="product__details-photo">
        <div className="product__details-photo-wrapper">
          <div className="product__details-photo-big">
            <img role={"presentation"} src={currentImg} alt={product.name} />
          </div>
          <div className="product__details-photo-small">
            {product.picture.map((picture, i) => (
              <div
                onClick={() => setPicture(picture)}
                className="product__details-photo-small-picture"
                key={i}
              >
                <img src={picture} alt="small-photo" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product__details-desc">
        <h2>{product.name}</h2>
        <div className="product__details-desc-price">
          <div className="price">
            Ціна: {product.price} <span>UAH</span>
          </div>
        </div>
        <hr className="" />
        <h3>{product.description.__cdata.replace(regExp, "")}</h3>
        {/* <button className="main-btn more-info">Добавити в кошик</button> */}
        <div className="show-more">Додаткові характеристики</div>
        {/* <ul className="details">
          {product.param.map((params, i) => (
            <li key={i}>
              {params._name} - {params.__text}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
  return <div>dsads</div>;
};

export default CarSeatsDetail;
