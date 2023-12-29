import React, { useContext, useEffect, useState } from "react";
import style from "./TableDotGiamGia.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function TableDotGiamGia() {
  const thongke = [
    { id: 1, name: "Tháng" },
    { id: 2, name: "Quý" },
  ];
  const [listGiamGia, setListGiamGia] = useState([]);
  const [listkhachhangmonth, setListKhachhangMonth] = useState([]);
  const [listKhachHangQuarter, setListKhachHangQuarter] = useState([]);
  const [tab, setTab] = useState("");
  const fetchSoLuongKhachDat = () => {
    axios.get("/statistical/statis-giamgia").then((res) => {
      if (res && res.message === "success") {
        setListGiamGia(res.data);
        console.log(res.data);
      }
    });
  };
  const fetchKhachHangMonth = async () => {
    await axios.get("/condition/soluongkhach-thang").then((res) => {
      if (res && res.message === "success") {
        setListKhachhangMonth(res.data);
      }
    });
  };
  const fetchKhachHangQuarter = async () => {
    await axios.get("/condition/soluongkhach-quy").then((res) => {
      if (res && res.message === "success") {
        setListKhachHangQuarter(res.data);
      }
    });
  };
  useEffect(() => {
    fetchSoLuongKhachDat();
    fetchKhachHangMonth();
    fetchKhachHangQuarter();
  }, []);
  const sum = () => {
    let t = 0;
    for (let i = 0; i < listGiamGia.length; i++) {
      t = t + listGiamGia[i].soluonghoadon;
    }
    return t;
  };
  const handleChange = (e) => {
    setTab(e);
  };
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    if (user.accout.position === "KẾ TOÁN") {
      return (
        <>
          <div className={cx("filter")}>
            <select
              name=""
              id=""
              onChange={(e) => handleChange(e.target.value)}
            >
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
          {+tab === 0 && (
            <div>
              <div className={cx("wrapper")}>
                {/* <table border={1} cellSpacing={0}>
              <tr style={{ background: "red" }}>
                <th>Tháng</th>
                <th>Số lượng đợt khách đặt tour (Đã thanh toán)</th>
              </tr>
              {listGiamGia.map((g, i) => {
                return (
                  <tr>
                    <td>
                      {g.thang}/{g.nam}
                    </td>
                    <td>{g.soluonghoadon}</td>
                  </tr>
                );
              })}
            </table> */}
              </div>
              <p className={cx("sum")}>TỔNG SỐ KHÁCH HÀNG ĐẶT TOUR: {sum()}</p>
            </div>
          )}
          {+tab === 1 && (
            <div>
              <div className={cx("wrapper")}>
                <table border={1} cellSpacing={0}>
                  <tr style={{ background: "red" }}>
                    <th>Tháng</th>
                    <th>Số lượng đợt khách đặt tour (Đã thanh toán)</th>
                  </tr>
                  {listkhachhangmonth.map((g, i) => {
                    return (
                      <tr>
                        <td>
                          {g.thang}/{g.nam}
                        </td>
                        <td>{g.soluonghoadon}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          )}
          {+tab === 2 && (
            <div>
              <div className={cx("wrapper")}>
                <table border={1} cellSpacing={0}>
                  <tr style={{ background: "red" }}>
                    <th>Quý</th>
                    <th>Số lượng đợt khách đặt tour (Đã thanh toán)</th>
                  </tr>
                  {listKhachHangQuarter.map((g, i) => {
                    return (
                      <tr>
                        <td>
                          {g.quy}/{g.nam}
                        </td>
                        <td>{g.soluonghoadon}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          )}
        </>
      );
    }
  } else {
    <Navigate to="/admin-login"></Navigate>;
  }
}
