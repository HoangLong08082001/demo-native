import React from "react";
import styles from "./anotherTour.module.scss";
import classNames from "classnames/bind";
import ProductBox from "../../../components/Product";
const cx = classNames.bind(styles);
export default function AnotherTour() {
  return (
    <div className={cx("wrapper")}>
      <p>Cac tour lien quan</p>
      <div className={cx("line")}></div>
      <div className={cx("tours")}>
        <ProductBox container margin />
        <ProductBox container margin />
        <ProductBox container margin />
        <ProductBox container margin />
      </div>
    </div>
  );
}
