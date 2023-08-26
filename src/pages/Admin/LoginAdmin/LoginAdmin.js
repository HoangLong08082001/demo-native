import React, { useState } from "react";
import style from "./LoginAdmin.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
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
          <input type="text" name="" id="" placeholder="Enter your username" />
        </div>
        <div className={cx("form-input")}>
          <input
            type={show === true ? "text" : "password"}
            name=""
            id=""
            placeholder="Enter your password"
          />
        </div>
        <div className={cx("form-input")}>
          <div
            className={show === true ? cx("hidepass") : cx("showpass")}
            onClick={handleShowHide}
            showhidden
          >
            <p>{show === true ? "HIDE PASS" : "SHOW PASS"}</p>
          </div>
        </div>
        <div className="btn-login">
          <Button loginadmin>LOGIN</Button>
        </div>
      </form>
    </div>
  );
}
