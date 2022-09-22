import React from "react";
import { Link } from "react-router-dom";
import { bodyMenu } from "../../localDB/bodyMenu.js";
const BodyMenu = () => {
  return (
    <div className="body__menu container">
      {bodyMenu.map((item, i) => {
        return (
          <Link to={item.link} key={i} className="body__menu-item">
            <img src={item.img} alt="car-seat" />
            <div className="body__menu-title">
              <h3>{item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BodyMenu;
