import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
const CardDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const [currentImg, setCurrentImg] = useState(products.picture[0]);
  const regExp = /(<.*?>)/g;
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchById(id));
    window.scrollTo(0, 0);
  }, []);
  const setPicture = (picture) => {
    setCurrentImg(picture);
  };

  console.log(products);
  return (
    <div className="product__details container">
      <div className="product__details-photo">
        <div className="product__details-photo-wrapper">
          <div className="product__details-photo-big">
            <img role={"presentation"} src={currentImg} alt={products.name} />
          </div>
          <div className="product__details-photo-small">
            {products.picture.map((picture, i) => (
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
        <h2>{products.name}</h2>
        <div className="product__details-desc-price">
          <div className="price">
            Ціна: {products.price} <span>UAH</span>
          </div>
        </div>
        <hr className="" />

        <button className="main-btn more-info">Добавити в кошик</button>
        <div className="show-more">Додаткові характеристики</div>
      </div>
    </div>
  );
};

export default CardDetails;

{
  /* <h3>{products.description.__cdata.replace(regExp, "")}</h3> */
}
