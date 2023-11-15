import React, { Component, useEffect, useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.scss";

import "slick-carousel/slick/slick.scss";
import classname from "classnames/bind";
import axios from "../../../../setup-axios/axios";

import ProductBox from "../../../../components/Product";
import styles from "./Slick.module.scss";
const cx = classname.bind(styles);
const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
  const { className, onClick } = props;

  return (
    <div {...props} className={cx("custom-prevArrow")} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
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
        width="20"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
      </svg>
    </div>
  );
};
export default function Sliders() {
    const [data, setdata] = useState([]);
    useEffect(() => {
      axios.get("/tour/alltour").then((response) => {
        setdata(response.data);
      });
    }, []);
   
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3.98,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 3.1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 975,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 930,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ],
      autoplay: true,
      
      cssEase: "linear",
      nextArrow: <GalleryNextArrow />,
      prevArrow: <GalleryPrevArrow />,
    };
    console.log(data)
    return (
      <div>
        <Slider className={cx("slick-slider")} {...settings}>
          
          
          {data.map((value,indexedDB) =>{
            return (
              
            <ProductBox container margin 
            
             key={indexedDB}
              id={value.MaTour}
              MaTour={value.MaTour}
              Name={value.TenTour}
              DiaDiemDen={value.DiaDiemDen}
              img={value.HinhAnh.data}
              price={value.GiaTour}  />);
          })}
        
        </Slider>
      </div>
    );
  }

