import React from "react";
import styles from "./Endows.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import endow from "../../../../../../DoAnDuLich/src/assets/images/flash.png";
import Button from "../../../../components/Button";
const cx = classNames.bind(styles);
export default function Endows() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-image")}>
        <img src={endow} alt="loi" />
      </div>
      <div className={cx("time")}>
        <FontAwesomeIcon icon={faCalendarDays} className={cx("icon-daytime")} />
        <span>28/7/2023 - 31/12/2023</span>
      </div>
      <div className={cx("btn-detail")}>
        <Button watchadd2>Xem chi tiet</Button>
      </div>
    </div>
  );
}
