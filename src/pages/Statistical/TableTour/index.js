import React, { useContext, useEffect, useState } from "react";
import style from "./TableTour.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function TableTour() {
  const [listsour, setListtour] = useState([]);
  useEffect(() => {
    axios.get("/statistical/thongke-soluong-tour").then((res) => {
      setListtour(res.data);
      console.log(res.data);
    });
  }, []);
  const sum = () => {
    let t = 0;
    for (let i = 0; i < listsour.length; i++) {
      t = t + listsour[i].so_luong_tour;
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
                <th>Số lượng tour</th>
              </tr>
              {listsour.map((t, i) => {
                return (
                  <tr>
                    <td>
                      {t.thang}/{t.nam}
                    </td>
                    <td>{t.so_luong_tour}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <p className={cx("sum")}>TỔNG SỐ LƯỢNG TOUR: {sum()}</p>
        </>
      );
    }
  } else {
    <Navigate to="/admin-login"></Navigate>;
  }
}
