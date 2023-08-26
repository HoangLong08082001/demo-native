import React from "react";
import style from "./AddEmployee.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button";
const cx = classNames.bind(style);
export default function AddEmployee() {
  return (
    <div className={cx("wrapper")}>
      <Button btnAdd to="/employee">
        TRO LAI
      </Button>
      <p>Nhap thong tin nhan vien</p>
      <div className={cx("form")}>
        <div className={cx("form-left")}></div>
        <div className={cx("form-right")}></div>
      </div>
    </div>
  );
}
