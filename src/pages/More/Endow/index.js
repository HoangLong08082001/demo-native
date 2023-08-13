import React from "react";
import styles from "./Endow.module.scss";
import classNames from "classnames/bind";
import Endows from "./Endows";

const cx = classNames.bind(styles);
export default function Endow() {
  return <div className={cx("wrapper")}>
    <p>Cac uu dai khac</p>
    <div className={cx("line")}></div>
    <div className={cx("list-endow")}>
        <Endows/>
        <Endows/>
        <Endows/>
    </div>
  </div>;
}
