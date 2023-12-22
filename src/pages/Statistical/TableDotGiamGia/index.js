import React, { useContext, useEffect, useState } from "react";
import style from "./TableDotGiamGia.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function TableDotGiamGia() {
  const [listGiamGia, setListGiamGia] = useState([]);
  useEffect(() => {
    axios.get("/statistical/thongke-giam-gia").then((res) => {
      setListGiamGia(res.data);
      console.log(res.data);
    });
  }, []);
  const sum = () => {
    let t = 0;
    for (let i = 0; i < listGiamGia.length; i++) {
      t = t + listGiamGia[i].so_luong_dot_giam_gia;
    }
    return t;
  };
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    if (user.accout.position === "DEV") {
      return (
        <>
          <div className={cx("wrapper")}>
            <table border={1} cellSpacing={0}>
              <tr style={{ background: "red" }}>
                <th>Tháng</th>
                <th>Số lượng đợt giảm giá (tháng)</th>
              </tr>
              {listGiamGia.map((g, i) => {
                return (
                  <tr>
                    <td>
                      {g.thang}/{g.nam}
                    </td>
                    <td>{g.so_luong_dot_giam_gia}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <p className={cx("sum")}>TỔNG SỐ LƯỢNG ĐỢT GIẢM GIÁ: {sum()}</p>
        </>
      );
    }
  } else {
    <Navigate to="/admin-login"></Navigate>;
  }
}
