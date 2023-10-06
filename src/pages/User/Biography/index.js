import React, { useState } from "react";
import style from "./Biography.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
export default function Biography() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleShow1 = () => {
    setShow1(!show1);
  };
  const handleShow2 = () => {
    setShow2(!show2);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <label htmlFor="">Ten khach hang</label>
        <input
          type="text"
          name=""
          id=""
          value="Ha Hoang Long"
          style={{ marginLeft: "40px" }}
          disabled
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Email</label>
        <input
          type={show1 ? "text" : "password"}
          name=""
          id=""
          value="Ha Hoang Long"
          style={{ marginLeft: "170px" }}
          disabled
        />
        <FontAwesomeIcon
          onClick={handleShow1}
          className={cx("icon")}
          icon={show1 ? faEyeSlash : faEye}
        ></FontAwesomeIcon>
      </div>
      <div className={cx("form")}>
        <label htmlFor="">So dien thoai</label>
        <input
          type={show2 ? "text" : "password"}
          name=""
          id=""
          value="Ha Hoang Long"
          style={{ marginLeft: "80px" }}
          disabled
        />
        <FontAwesomeIcon
          onClick={handleShow2}
          className={cx("icon")}
          icon={show2 ? faEyeSlash : faEye}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
