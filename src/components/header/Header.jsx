import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../logo/Logo";
import SocialMedia from "../social-media/SocialMedia";
import shopBag from "../../assets/images/svg/bag-custom.svg";
import phone from "../../assets/images/svg/phone-custom.svg";
import { useEffect } from "react";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  useEffect(() => {}, [cart]);
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__media">
          <SocialMedia />
        </div>
        <div className="header__order">
          <div className="header__order-item">
            <img src={shopBag} alt="shop-bag" />
            {cart.length <= 0 ? (
              ""
            ) : (
              <div className="header__order-count">{cart.length}</div>
            )}
          </div>
          <div className="header__order-item">
            <a href="tel:+380989578520">
              <img src={phone} alt="shop-bag" />
            </a>
          </div>
        </div>
        <div className="header__burger">X</div>
      </div>
    </header>
  );
};

export default Header;
