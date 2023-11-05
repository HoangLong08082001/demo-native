import React from "react";
import style from "./Statistical.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
export default function TableStatitical() {
  return (
    <div className={cx("wrapper")}>
      <p>TOP 10 BESTSELLER TOUR</p>
      <table>
        <tr>
          <th>TOUR</th>
          <th>PRICE</th>
          <th>TOP</th>
        </tr>
        <tr className={cx("tr")}>
          <td>Da Nang</td>
          <td>20.000.000 VND</td>
          <td>#1</td>
        </tr>

        
        
      </table>
    </div>
  );
}
