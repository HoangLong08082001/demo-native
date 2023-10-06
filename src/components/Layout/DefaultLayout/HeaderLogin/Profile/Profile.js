import React from "react";
import style from "./Profile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
export default function Profile() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("btn")}>
        <FontAwesomeIcon
          className={cx("icon")}
          icon={faUserAlt}
        ></FontAwesomeIcon>
        <Button btnInfor to="/user">
          Thong tin
        </Button>
      </div>
      <div className={cx("btn")}>
        <FontAwesomeIcon
          className={cx("icon")}
          style={{ color: "red" }}
          icon={faPowerOff}
        ></FontAwesomeIcon>
        <Button btnLogout>Dang xuat</Button>
      </div>
    </div>
  );
}
