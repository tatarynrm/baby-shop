import React from "react";
import { useEffect, useState } from "react";
import Popup from "../components/popup/Popup";
import Slider from "../components/slider/Slider";
import BodyMenu from "../components/body-menu/BodyMenu";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="home__page ">
        <BodyMenu />
      </div>
      <Popup />
    </>
  );
};

export default Home;
