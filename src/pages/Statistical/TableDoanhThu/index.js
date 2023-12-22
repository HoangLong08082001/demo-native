import React, { useContext, useEffect, useState } from "react";
import style from "./TableDoanhThu.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function TableDoanhThu() {
  const [listDoanhThu, setListDoanhThu] = useState([]);
  useEffect(() => {
    axios.get("/statistical/thongke-doanh-thu").then((res) => {
      setListDoanhThu(res.data);
      console.log(res.data);
    });
  }, []);
  const sum = () => {
    let t = 0;
    for (let i = 0; i < listDoanhThu.length; i++) {
      t = t + listDoanhThu[i].tongtien;
    }
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(t);
  };
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    if (user.accout.position === "DEV") {
      return (
        <>
          <div className={cx("wrapper")}>
            <table border={1} cellSpacing={0}>
              <tr style={{ background: "red" }}>
                <th>Tháng/Năm</th>
                <th>Tổng doanh thu</th>
              </tr>
              {listDoanhThu.map((d, i) => {
                return (
                  <tr>
                    <td>
                      {d.thang}/{d.nam}
                    </td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(d.tongtien)}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <p className={cx("sum")}>TỔNG DOANH THU: {sum()}</p>
        </>
      );
    }
  } else {
    <Navigate to="/admin-login"></Navigate>;
  }
}
