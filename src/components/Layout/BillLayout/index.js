import React from "react";
import style from "./BillLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../DefaultLayout/Header";
import HeaderBill from "../DefaultLayout/HeaderBill";

const cx = classNames.bind(style);
export default function BillLayout({children}) {
  return (
    <div>
      <HeaderBill />
      <div className={cx("container")}>
        {children}
      </div>
    </div>
  );
}
