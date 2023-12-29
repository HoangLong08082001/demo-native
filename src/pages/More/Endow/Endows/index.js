import React from "react";
import styles from "./Endows.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import endow from "../../../../../../travel-ui/src/assets/images/sales.png";
import Button from "../../../../components/Button";
const cx = classNames.bind(styles);
export default function Endows({ngaybatdau, ngayketthuc, tendotgiamgia}) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-image")}>
        <img src={endow} alt="loi" />
      </div>
      <div className={cx("name")}>
        <p>{tendotgiamgia}</p>
      </div>
      <div className={cx("time")}>
        <FontAwesomeIcon icon={faCalendarDays} className={cx("icon-daytime")} />
        <span>{ngaybatdau} - {ngayketthuc}</span>
      </div>
    </div>
  );
}
