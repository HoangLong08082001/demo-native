import React, { useContext, useEffect, useState } from "react";
import style from "./BillManager.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
const cx = classNames.bind(style);
export default function BillManager() {
  const navigate = useNavigate();
  const [listBill, setListBill] = useState([]);
  const [search, setSearch] = useState("");
  const fetchBill = async () => {
    await axios.get("/hoadon/get-hoadon").then((res) => {
      if (res.message === "success") {
        setListBill(res.data);
      }
    });
  };
  useEffect(() => {
    fetchBill();
  }, []);
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        {/* <input
          type="number"
          placeholder="Search in here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name=""
          id=""
        /> */}
        <div className={cx("form-table")}>
          <table border={1} cellSpacing={0}>
            <tr
              style={{
                backgroundColor: "gray",
                color: "white",
                fontSize: "20px",
                fontWeight: "900",
              }}
            >
              <th>Mã hoá đơn</th>
              <th>Mã phiếu</th>
              <th>Tổng tiền</th>
              <th>Hình thức thanh toán</th>
              <th>Trạng thái thanh toán</th>
              <th>Action</th>
            </tr>
            {listBill
              .filter((list) => {
                let MaPhieu = list.MaPhieu;
                return search === "" ? list : MaPhieu.includes(search);
              })
              .map((b, i) => {
                return (
                  <tr className={cx("tr-td")}>
                    <td>{b.MaHoaDon}</td>
                    <td>{b.MaPhieu}</td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(b.Tongtien)}
                    </td>
                    <td>{b.HinhThucThanhToan}</td>
                    <td>
                      {b.TrangThaiThanhToan === 1
                        ? "ĐÃ THANH TOÁN"
                        : "CHƯA THANH TOÁN"}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          navigate(`/chi-tiet-hoadon/${b.MaHoaDon}`)
                        }
                        className={cx("btn-info")}
                      >
                        <FontAwesomeIcon className={cx("icon")} icon={faInfo} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
