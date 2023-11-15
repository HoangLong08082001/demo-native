import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.scss";

import "slick-carousel/slick/slick-theme.scss";
import classNames from "classnames/bind";
import styles from "./slick.module.scss";
import pq1 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq1.jpeg";
import pq2 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq2.png";
import pq3 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq3.png";
import pq4 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq4.png";
import pq5 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq5.jpeg";
import { faArrows, faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

export default function ImageDetail({ img1, img2, img3, img4, img5 }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const base64String = btoa(
    new Uint8Array(img1).reduce( 
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String2 = btoa(
    new Uint8Array(img2).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String3 = btoa(
    new Uint8Array(img3).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String4 = btoa(
    new Uint8Array(img4).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String5 = btoa(
    new Uint8Array(img5).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
 
  
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    fade: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
  };
  return (
    <div>
      <div className={cx("img-box")}>
        <h2 >Khám Phá Một Số Hình Ảnh Thú Vị</h2>

        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          {...settings}
        >
          <img className={cx("img")} src={`data:image/jpeg;base64,${base64String}`} ></img>
          <img className={cx("img")} src={`data:image/jpeg;base64,${base64String2}`}></img>
          <img className={cx("img")} src={`data:image/jpeg;base64,${base64String3}`}></img>
          <img className={cx("img")} src={`data:image/jpeg;base64,${base64String4}`}></img>
          <img className={cx("img")} src={`data:image/jpeg;base64,${base64String5}`}></img>
          <img className={cx("img")} src={`data:image/jpeg;base64,${base64String3}`}></img>
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={5}
          slidesToScroll={1}
          centerMode={true}
          centerPadding="0px"
          focusOnSelect={true}
          autoplay={true}
          speed={1500}
          dots={true}
          infinite={true}
        >
          <img className={cx("img1")} src={`data:image/jpeg;base64,${base64String}`} ></img>
          <img className={cx("img1")} src={`data:image/jpeg;base64,${base64String2}`}></img>
          <img className={cx("img1")} src={`data:image/jpeg;base64,${base64String3}`}></img>
          <img className={cx("img1")} src={`data:image/jpeg;base64,${base64String4}`}></img>
          <img className={cx("img1")} src={`data:image/jpeg;base64,${base64String5}`}></img>
          <img className={cx("img1")} src={`data:image/jpeg;base64,${base64String3}`}></img>
        </Slider>
      </div>
    </div>
  );
}
