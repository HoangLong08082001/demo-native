import React from "react";
import style from "./Statistical.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Statistical() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("list-item")}>
        <div className={cx("item-menu-1")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faUser}
          ></FontAwesomeIcon>
          <p>150</p>
          <span>Dang ky</span>
        </div>
        <div className={cx("item-menu-2")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faUser}
          ></FontAwesomeIcon>
          <p>150</p>
          <span>Dang ky</span>
        </div>
        <div className={cx("item-menu-3")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faUser}
          ></FontAwesomeIcon>
          <p>150</p>
          <span>Dang ky</span>
        </div>
        <div className={cx("item-menu-4")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faUser}
          ></FontAwesomeIcon>
          <p>150</p>
          <span>Dang ky</span>
        </div>
      </div>
    </div>
  );
}
