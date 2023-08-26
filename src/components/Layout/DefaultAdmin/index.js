import React from "react";
import style from "./DefaultAdmin.module.scss";
import classNames from "classnames/bind";
import Sidebar from "./Sidebar";
import Profile from "./Profile";

const cx = classNames.bind(style);
export default function DefaultAdmin({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("container")}>
        <Profile />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
