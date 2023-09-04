import React, { useState } from "react";
import style from "./LoginAdmin.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faE,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";

const cx = classNames.bind(style);
export default function LoginAdmin() {
  const [show, setShow] = useState(false);
  const handleShowHide = () => {
    setShow(!show);
  };
  return (
    <div className={cx("wrapper")}>
      <p>
        LOGIN FOR EMPLOYEE <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
      </p>
      <form className={cx("form")}>
        <div className={cx("form-input")}>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className={cx("form-input")}>
          <input
            type={show === false ? "text" : "password"}
            placeholder="Enter your password"
          />
          <FontAwesomeIcon
            onClick={handleShowHide}
            className={cx("icon")}
            icon={show === true ? faEye : faEyeSlash}
          ></FontAwesomeIcon>
        </div>
        <div className={cx("form-input")}>
          <Button loginadmin>LOGIN</Button>
        </div>
      </form>
    </div>
  );
}
