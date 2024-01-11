import React from "react";
import style from "./AddLocation.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function AddLocation() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tab-pannel")}>
        <button className={cx("tab-active")}>Địa điểm đi</button>
        <button className={cx("tab")}>Trong Nước</button>
        <button className={cx("tab")}>Nước Ngoài</button>
      </div>
    </div>
  );
}
