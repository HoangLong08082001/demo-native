import React from "react";
import style from "./TablekhachHang.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function TablekhachHang() {
  const thongke = [
    { id: 1, name: "Tháng" },
    { id: 2, name: "Quý" },
  ];
  return (
    <>
      <div className={cx("filter")}>
        <select name="" id="">
          <option value={0}>Tất cả</option>
          {thongke.map((op, i) => {
            return (
              <option key={i} value={op.id}>
                {op.name}
              </option>
            );
          })}
        </select>
      </div>
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
