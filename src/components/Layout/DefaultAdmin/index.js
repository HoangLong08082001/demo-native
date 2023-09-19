import React from "react";
import style from "./DefaultAdmin.module.scss";
import classNames from "classnames/bind";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Hidden from "./Hidden";

const cx = classNames.bind(style);
export default function DefaultAdmin({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleUnlock = () => {
    setOpen(true);
  };
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("container")}>
        <Profile lock={handleUnlock} />
        <div className={cx("content")}>{children}</div>
      </div>
      {open && <Hidden />}
    </div>
  );
}
