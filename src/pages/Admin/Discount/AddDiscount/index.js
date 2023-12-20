import React, { useState } from "react";
import style from "./AddDiscount.module.scss";
import classNames from "classnames/bind";
import FormAuto from "./FormAuto";
import FormUnauto from "./FormUnAuto";
const cx = classNames.bind(style);
export default function AddDiscount() {
  const [toggle, setToggle] = useState(1);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tab-pannel")}>
        <div
          onClick={() => setToggle(1)}
          className={toggle === 1 ? cx("tab-active") : cx("tab")}
        >
          <p>GIẢM GIÁ TỰ ĐỘNG</p>
        </div>
        <div
          onClick={() => setToggle(2)}
          className={toggle === 2 ? cx("tab-active") : cx("tab")}
        >
          <p>GIẢM GIÁ THÊM</p>
        </div>
      </div>
      <div className={cx("form")}>
        {toggle === 1 && <FormAuto />}
        {toggle === 2 && <FormUnauto />}
      </div>
    </div>
  );
}
