import React, { useState } from "react";
import style from "./Profile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button";
import Dropdown from "./Dropdown";
import userimage from "../../../../../../travel-ui/src/assets/images/user.png";
import Hidden from "../Hidden";

const cx = classNames.bind(style);
export default function Profile(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("back-website")}>
        <Button btnBack onClick={props.lock}>
          HIDDEN DATA
        </Button>
      </div>
      <div className={cx("profile")}>
        <p>wellcome</p>
        <div className={cx("circle")} onClick={handleOpen}>
          <img src={userimage} alt="loi" />
        </div>
      </div>
      {open && <Dropdown />}
    </div>
  );
}
