import React, { Component } from "react";
import Slider from "react-slick";
import firstSlide from "../../assets/images/main-slider-images/first.jpg";
import secondSlide from "../../assets/images/main-slider-images/second.jpg";
import thirdSlide from "../../assets/images/main-slider-images/third.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide">
            <a href="#">
              <img src={firstSlide} alt="one" />
            </a>
          </div>
          <div className="slide">
            <img src={secondSlide} alt="one" />
          </div>
          <div className="slide">
            <img src={thirdSlide} alt="one" />
          </div>
          <div className="slide">
            <img src={firstSlide} alt="one" />
          </div>
        </Slider>
      </div>
    );
  }
}
