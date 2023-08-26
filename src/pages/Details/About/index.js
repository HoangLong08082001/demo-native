import React from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCar,
  faFlag,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function About() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("first-line")}>
        <div className={cx("day")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faCalendarDay}
          ></FontAwesomeIcon>

          <p>
            Thoi gian: <b>3 ngay 2 dem</b>
          </p>
        </div>
        <div className={cx("vehicle")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faCar}
          ></FontAwesomeIcon>
          <p>
            Phuong tien: <b>May bay</b>
          </p>
        </div>
      </div>
      <div className={cx("second-line")}>
        <div className={cx("start")}>
          {" "}
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faFlag}
          ></FontAwesomeIcon>
          <p>
            Diem xuat phat: <b>TP.HO CHI MINH</b>
          </p>
        </div>
        <div className={cx("arrive")}>
          {" "}
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faFlagCheckered}
          ></FontAwesomeIcon>
          <p>
            Diem den: <b>Phu Quoc</b>
          </p>
        </div>
      </div>
    </div>
  );
}
