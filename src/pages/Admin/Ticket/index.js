import React from "react";
import style from "./Ticket.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faPen,
  faPenAlt,
  faPenClip,
  faPlusCircle,
  faSort,
  faSortDesc,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const cx = classNames.bind(style);
export default function Ticket() {
  return (
    <div className={cx("wrapper")}>
      <input type="text" className="search" placeholder="Search here" />
      <table>
        <tr className={cx("tr-th")}>
          <th>Ma phieu</th>
          <th>Ma tour</th>
          <th>Ma khach hang</th>
          <th>Ten tour</th>
          <th>Ten khach hang</th>
          <th>So dien thoai</th>
          <th>Ngay lap phieu</th>
          <th>Action</th>
        </tr>
        <tr className={cx("tr")}>
          <td>asd</td>
          <td>dsa</td>
          <td>a</td>
          <td>s</td>
          <td>d</td>
          <td>q</td>
          <td>w</td>
          <td>
            <button className={cx("btnInfo")}>
              <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
            </button>
            <button className={cx("btnUpdate")}>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            </button>
            <button className={cx("btnDelete")}>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
