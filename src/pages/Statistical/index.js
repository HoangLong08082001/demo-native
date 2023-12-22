import React, { useState } from "react";
import style from "./Statistical.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import TableTour from "./TableTour";
import TableDoanhThu from "./TableDoanhThu";
import TablekhachHang from "./TableKhachHang";
import TableDotGiamGia from "./TableDotGiamGia";
const cx = classNames.bind(style);
export default function Statistical() {
  const options = [
    { id: 1, name: "Doanh thu", component: TableDoanhThu },
    { id: 2, name: "Số lượng tour", component: TableTour },
    { id: 3, name: "Số lượng đợt giảm giá", component: TableDotGiamGia },
  ];
  let Table = options.component;
  const [tab, setTab] = useState("");
  const handleChange = (e) => {
    setTab(e);
    console.log(e);
  };
  return (
    <div className={cx("wrapper")}>
      <select
        name=""
        id=""
        value={tab}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">Chọn mục thống kê</option>
        {options.map((op, i) => {
          return <option value={op.id}>{op.name}</option>;
        })}
      </select>
      {+tab === 1 && <TableDoanhThu />}
      {+tab === 2 && <TableTour />}
      {+tab === 3 && <TableDotGiamGia />}
    </div>
  );
}
