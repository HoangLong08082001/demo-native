import React from "react";
import style from "./TablekhachHang.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function TablekhachHang() {
  return (
    <>
      <div className={cx("wrapper")}>
        <table border={1} cellSpacing={0}>
          <tr style={{ background: "red" }}>
            <th>Tháng</th>
            <th>Số lượng Khach hang</th>
          </tr>
          <tr>
            <td>2</td>
            <td>20</td>
          </tr>
        </table>
      </div>
      <p className={cx("sum")}>TỔNG SỐ LƯỢNG TOUR: </p>
    </>
  );
}
