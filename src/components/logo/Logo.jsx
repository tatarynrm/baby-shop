import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import logoTry from "../../assets/images/logo/Logo-try.png";
// import logo from "../../assets/images/logo-ne-png.jpg";
import logo from "../../assets/images/logo-from-scratch.png";
const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
