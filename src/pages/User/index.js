import React, { useState } from "react";
import style from "./User.module.scss";
import classNames from "classnames/bind";
import Biography from "./Biography";
import History from "./History";

const cx = classNames.bind(style);
export default function User() {
  const [show, setShow] = useState(null);
  const listmenu = [
    {
      item: "Hồ Sơ",
      component: Biography,
    },
    {
      item: "Lịch Sử Tour",
      component: History,
    },
  ];
  const toggle = (index) => {
    if (show === index) {
      return setShow(null);
    }
    setShow(index);
  };
  return (
    <div className={cx("wrapper")}>
      <p>Thông Tin Khách Hàng</p>
      {listmenu.map((item, index) => (
        <div className={show === index ? cx("content-active") : cx("content")}>
          <ul key={index}>
            <li onClick={() => toggle(index)}>{item.item}</li>
          </ul>
          <div className={cx("container")}>
            {show === index && <item.component />}
          </div>
        </div>
      ))}
    </div>
  );
}
