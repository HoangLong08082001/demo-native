import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from "./HeaderBill.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button";
import { faCaretDown, faEarth } from "@fortawesome/free-solid-svg-icons";
import { faBell, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import logo from "../../../../../src/assets/images/logo.png";
import { useEffect, useRef, useState } from "react";
const cx = classNames.bind(style);
export default function HeaderBill() {
  return (
    <div className={cx("wrapper")}>
      <div>
        <img src={logo} alt="Logo" width={400} height={150}></img>
      </div>

      <div className={cx("warpper-link")}></div>
    </div>
  );
}
