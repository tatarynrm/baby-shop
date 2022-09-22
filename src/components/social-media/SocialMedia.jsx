import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialMedia = ({ width }) => {
  return (
    <div
      className="social__media"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "170px",
      }}
    >
      <SocialIcon
        className="social__icon"
        url="https://instagram.com/roman_noris"
        bgColor={"#E49B97"}
        target={"_blank"}
      />
      <SocialIcon
        className="social__icon"
        url="https://www.facebook.com/comfort4baby/"
        bgColor="#E49B97"
        target={"_blank"}
      />
      <SocialIcon
        className="social__icon"
        url="https://www.telegram.com"
        bgColor="#E49B97"
        target={"_blank"}
      />
    </div>
  );
};

export default SocialMedia;
