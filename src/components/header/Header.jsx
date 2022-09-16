import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import SocialMedia from "../social-media/SocialMedia";
import { menu } from "../../localDB/localDB";
// console.log(menu);
const Header = () => {
  const width = "200px";
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__nav">
          {menu.map((link, i) => {
            return (
              <Link
                className="header__nav-link"
                to={link.link}
                key={link.title}
              >
                <img src={link.img} alt={link.name} />
                <span>{link.title}</span>
              </Link>
            );
          })}
        </div>
        <SocialMedia width={width} />
        <div className="header__burger">X</div>
      </div>
    </header>
  );
};

export default Header;
