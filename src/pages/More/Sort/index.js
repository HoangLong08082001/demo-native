import React from "react";
import styles from "./Sort.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function Sort() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sort-form")}>
        <p>Sap xep</p>
        <FontAwesomeIcon icon={faSort} className={cx("icon-sort")} />
      </div>
    </div>
  );
}
