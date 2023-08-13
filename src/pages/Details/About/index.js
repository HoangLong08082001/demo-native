import React from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function About() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("first-line")}>
        <p>
          Thoi gian: <b>3 ngay 2 dem</b>
        </p>
        <p>
          Phuong tien: <b>May bay</b>
        </p>
      </div>
      <div className={cx("second-line")}>
        <p>
          Diem xuat phat: <b>TP.HO CHI MINH</b>
        </p>
        <p>
          Diem den: <b>Phu Quoc</b>
        </p>
      </div>
    </div>
  );
}
