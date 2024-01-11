import React from "react";
import style from "./Modal.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faQuestion, faX } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Modal({ title, clickYes, clickNo }) {
  return (
    <div className={cx("background")}>
      <div className={cx("wrapper")}>
        <div className={cx("title-modal")}>
          {title} <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
        </div>
        <div className={cx("btn")}>
          <button className={cx("no")} onClick={clickNo}>
            KHÔNG <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
          </button>
          <button className={cx("yes")} onClick={clickYes}>
            ĐỒNG Ý <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
}
