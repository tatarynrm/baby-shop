import React, { Component } from "react";
import Slider from "react-slick";
import slide from "../../assets/images/main-slider-images/slide1.png";
import ligero from "../../assets/images/main-slider-images/ligero.png";

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
      // autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide">
            <a href="#">
              <img src={ligero} alt="one" />
            </a>
          </div>
          <div className="slide">
            <img src={slide} alt="one" />
          </div>
          <div className="slide">
            <img src={ligero} alt="one" />
          </div>
          <div className="slide">
            <img src={slide} alt="one" />
          </div>
          <div className="slide">
            <img src={slide} alt="one" />
          </div>
          <div className="slide">
            <img src={ligero} alt="one" />
          </div>
        </Slider>
      </div>
    );
  }
}
