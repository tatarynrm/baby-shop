import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import CardDetails from "./CardDetails";
import { sendMessageTelegram } from "../../services/telegramServices";
const Card = ({ item }) => {
  const [overPhoto, setOverPhoto] = useState(false);
  useEffect(() => {}, [item]);
  return (
    <div className="card" key={uniqid()}>
      <div
        className="card__img"
        onMouseOver={() => setOverPhoto(true)}
        onMouseOut={() => setOverPhoto(false)}
      >
        {item.picture ? (
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
        ) : null}
      </div>
      <div className="card__desc">
        <p>{item.name}</p>
        <div onClick={() => sendMessageTelegram(item)} className="card__price">
          <span>{item.price}</span>
          <span>{item.currencyId}</span>
          <p>{item.category_id}</p>
        </div>
      </div>
      <div className="card__order">
        <Link to={`strollers/${item.vendorCode}`} className="card__buy">
          Купити
        </Link>
        <Link to={`/strollers/${item.vendorCode}`} className="card__details">
          Детальніше
        </Link>
      </div>
    </div>
  );
};

export default Card;
