import React from "react";
import { useEffect, useState } from "react";
import Popup from "../components/popup/Popup";
import Slider from "../components/slider/Slider";
import BodyMenu from "../components/body-menu/BodyMenu";

import onePhoto from "../assets/images/4photos/1.jpg";
import two from "../assets/images/4photos/2.jpg";
import three from "../assets/images/4photos/3.jpg";
import four from "../assets/images/4photos/4.jpg";
const Home = () => {
  return (
    <>
      <Slider />
      <div className="home__page container">
        <BodyMenu />

        <div className="new-sells">
          <div className="title">
            <h1>Новиники від Ligero Lux</h1>
            Будьте стильними батьками. <br /> <br /> Подбате про комфорт малюка
            із новою моделю коляски Ligero Lux Soft
          </div>
          <div className="home__main-products">
            <img style={{ width: "20%" }} src={onePhoto} alt="dsads" />
            <img style={{ width: "20%" }} src={two} alt="dsadsa" />
            <img style={{ width: "20%" }} src={three} alt="dsadsad" />
            <img style={{ width: "20%" }} src={four} alt="dsada" />
          </div>
        </div>
      </div>
      {/* <Popup /> */}
    </>
  );
};

export default Home;
