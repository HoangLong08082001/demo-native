import React from "react";
import style from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
export default function Menu() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left-menu")}>
        <div className={cx("title")}>
          <p>Trong nuoc</p>
        </div>
        <div className={cx("list-menu")}>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
        </div>
      </div>
      <div className={cx("right-menu")}>
        <div className={cx("title")}>
          <p>Ngoai nuoc</p>
        </div>
        <div className={cx("list-menu")}>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
          <ul>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
            <li>Phu quoc</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
