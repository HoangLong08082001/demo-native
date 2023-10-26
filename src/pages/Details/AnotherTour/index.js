import React from "react";
import styles from "./anotherTour.module.scss";
import classNames from "classnames/bind";

import Slider from "../../Home/FlashSale/Slider"
const cx = classNames.bind(styles);
export default function AnotherTour() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("wrapper-p")}>Các Tour Liên Quan</p>
      <div className={cx("line")}></div>
      
        <Slider/>
      
    </div>
  );
}
