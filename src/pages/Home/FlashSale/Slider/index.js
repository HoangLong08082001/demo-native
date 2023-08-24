import React, { Component } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.scss";

import "slick-carousel/slick/slick.scss";
import classname from "classnames/bind";

import ProductBox from "../../../../components/Product";
import styles from "./Slick.module.scss";
const cx = classname.bind(styles);
const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
  const { className, onClick } = props;

  return (
    <div {...props} className={cx("custom-prevArrow")} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    </div>
  );
};

const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
  const { className, onClick } = props;

  return (
    <div {...props} className={cx("custom-nextArrow")} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
      </svg>
    </div>
  );
};
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,

      autoplay: true,

      cssEase: "linear",
      nextArrow: <GalleryNextArrow />,
      prevArrow: <GalleryPrevArrow />,
    };
    return (
      <div>
        <Slider className={cx("slick-slider")} {...settings}>
          <ProductBox container margin />
          <ProductBox container margin />
          <ProductBox container margin />
          <ProductBox container margin />
          <ProductBox container margin />
          <ProductBox container margin />
          <ProductBox container margin />
          <ProductBox container margin />
        </Slider>
      </div>
    );
  }
}
