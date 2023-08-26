import React, { useState } from "react";
import style from "./Profile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button";
import Dropdown from "./Dropdown";

const cx = classNames.bind(style);
export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("back-website")}>
        <Button btnBack to="/">
          BACK TO WEBSITE
        </Button>
      </div>
      <div className={cx("profile")}>
        <p>wellcome</p>
        <div className={cx("circle")} onClick={handleOpen}>
          <img src="" alt="loi" />
        </div>
      </div>
      {open && <Dropdown />}
    </div>
  );
}
