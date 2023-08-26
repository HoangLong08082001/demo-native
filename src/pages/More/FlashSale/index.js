import React from "react";
import styles from "./FlashSale.module.scss";
import classNames from "classnames/bind";
import saleimage from "../../../../../travel-ui/src/assets/images/flash.png";
const cx = classNames.bind(styles);
export default function FlashSale() {
  return (
    <div className={cx("form-img")}>
      <div className={cx("form-img-1")}></div>
    </div>
  );
}
