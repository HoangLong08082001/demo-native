import React from "react";
import style from "./Hidden.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Button";

const cx = classNames.bind(style);
export default function Hidden() {
  return (
    <>
      <div className={cx("wrapper")}></div>
      <div className={cx("form")}>
        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
        <label htmlFor="">Password</label>
        <input type="text" />
        <Button btnBack>Unlock</Button>
      </div>
    </>
  );
}
