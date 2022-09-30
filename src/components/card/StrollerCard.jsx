import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/shoppingCartSlice";
import { sendMessageTelegram } from "../../services/telegramServices";
import outStock from "../../assets/images/out-of-stock/out-of-stock.png";
import cryingBaby from "../../assets/images/out-of-stock/crying-baby.png";

const StrollerCard = ({ item }) => {
  const [overPhoto, setOverPhoto] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const { strollerId } = useParams();

  const dispatch = useDispatch();
  const addItemToCard = (item) => {
    dispatch(addToCart(item));
  };
  useEffect(() => {}, [item, cart]);
  return (
    <div className="card" key={uniqid()}>
      <Link to={item.picture ? `/strollers/${item.vendorCode}` : `/strollers`}>
        <div
          className="card__img"
          onMouseOver={() => setOverPhoto(true)}
          onMouseOut={() => setOverPhoto(false)}
        >
          {/* {item.picture ? null : (
            <img className="crying-baby" src={cryingBaby} alt="crying-baby" />
          )} */}
          {item.picture[0] ? (
            <img
              src={
                overPhoto
                  ? item.picture[1]
                  : item.picture[0] && item.picture === "undefined"
                  ? null
                  : item.picture[0]
              }
              alt={item.name}
            />
          ) : (
            <img src={outStock} alt="out-of-stock" />
          )}
        </div>
      </Link>
      <div className="card__desc">
        {item.name}
        <div onClick={() => sendMessageTelegram(item)} className="card__price">
          <span className="card__price-count">
            {item.price} <i>грн</i>
          </span>
        </div>
      </div>
      <div className="card__order">
        <button
          disabled={item.picture ? null : "disabled"}
          onClick={() => addItemToCard(item)}
          className="card__buy"
        >
          До корзини
        </button>
      </div>
    </div>
  );
};

export default StrollerCard;
