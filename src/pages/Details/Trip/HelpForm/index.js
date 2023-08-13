import React from "react";
import styles from "./HelpForm.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
export default function HelpForm() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <p>Ho tro khach hang</p>
      </div>
      <div className={cx("hotline")}>
        <FontAwesomeIcon icon={faPhone} className={cx("icon-phone")} />
        <p>Hotline: 0898.668.731</p>
      </div>
      <div className={cx("mail")}>
        <FontAwesomeIcon icon={faEnvelope} className={cx("icon-mail")} />
        <p>mail: tot_travel@gmail.com</p>
      </div>
    </div>
  );
}
