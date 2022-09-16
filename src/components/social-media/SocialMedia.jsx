import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialMedia = ({ width }) => {
  return (
    <div
      className="social__media"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "200px",
      }}
    >
      <SocialIcon
        className="social__icon"
        url="https://instagram.com/roman_noris"
        bgColor="#C13584"
        target={"_blank"}
      />
      <SocialIcon
        className="social__icon"
        url="https://www.facebook.com/comfort4baby/"
        // bgColor="#4267B2"
        target={"_blank"}
      />
      <SocialIcon
        className="social__icon"
        url="https://www.telegram.com"
        // bgColor="#4267B2"
        target={"_blank"}
      />
    </div>
  );
};

export default SocialMedia;
