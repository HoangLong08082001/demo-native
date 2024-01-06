import React, { useContext, useEffect } from "react";
import style from "./HomeAdmin.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import { Chart } from "react-google-charts";
import axios from "../../../setup-axios/axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faMoneyCheck,
  faPaperPlane,
  faPaperclip,
  faPlane,
  faTicket,
  faTicketSimple,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

export default function HomeAdmin() {
  const { user } = useContext(UserContext);
  const [listTour, setlistTour] = useState([]);
  const [hd, setHD] = useState("");
  const [kh, setKH] = useState("");
  const [tour, setTour] = useState("");
  const [phieu, setPhieu] = useState("");
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString("en-US");
  const fetchtour = () => {
    axios.post("/tour/alltour2",{data:null}).then((res) => {
      if (res) {
        setlistTour(res.data);
        console.log(res.data);
      }
    });
  };
  const fetchhoadon = () => {
    axios.get("/tour/get-soluonghoadon").then((res) => {
      if (res && res.message === "success") {
        setHD(res.data[0].soluonghoadon);
      }
    });
  };
  const fetchkhachhang = () => {
    axios.get("/tour/get-khachdangky").then((res) => {
      if (res && res.message === "success") {
        setKH(res.data[0].soluongkhach);
      }
    });
  };
  const fetchsltour = () => {
    axios.get("/tour/get-soluongtour").then((res) => {
      if (res && res.message === "success") {
        setTour(res.data[0].soluongtour);
      }
    });
  };
  const fetchphieu = () => {
    axios.get("/tour/get-phieuchuaduyet").then((res) => {
      if (res && res.message === "success") {
        setPhieu(res.data[0].soluongphieu);
      }
    });
  };
  useEffect(() => {
    fetchtour();
    fetchhoadon();
    fetchkhachhang();
    fetchsltour();
    fetchphieu();
  }, []);
  // useEffect(() => {
  //   console.log(user);
  //   let local = localStorage.getItem("jwt");
  //   if (!local) {
  //     navigate("/admin-login");
  //   }
  // }, []);
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("list-stati")}>
          <div className={cx("stati-hoadon")}>
            <FontAwesomeIcon className={cx("icon")} icon={faMoneyCheck} />
            <p>SỐ LƯỢNG HOÁ ĐƠN</p>
            <span>SỐ LƯỢNG: {hd}</span>
          </div>
          <div className={cx("stati-register")}>
            <FontAwesomeIcon className={cx("icon")} icon={faUserPlus} />
            <p>KHÁCH HÀNG ĐĂNG KÝ</p>
            <span>SỐ LƯỢNG: {kh}</span>
          </div>
          <div className={cx("stati-tour")}>
            <FontAwesomeIcon className={cx("icon")} icon={faPlane} />
            <p>SỐ LƯỢNG TOUR</p>
            <span>SỐ LƯỢNG: {tour}</span>
          </div>
          <div className={cx("stati-ticket")}>
            <FontAwesomeIcon className={cx("icon")} icon={faTicket} />
            <p>PHIẾU CHƯA DUYỆT</p>
            <span>SỐ LƯỢNG: {phieu}</span>
          </div>
        </div>
        <div className={cx("list-chart1")}>
          <p className={cx("title")}>DANH SÁCH TOUR SẮP DIỄN RA</p>
          <div className={cx("form-table")}>
            <table border={1} cellSpacing={0}>
              <tr className={cx("tr-th")}>
                <th>Mã tour</th>
                <th>Tên tour</th>
                <th>Số ngày còn lại</th>
              </tr>
              {listTour.map((t, i) => {
                let conditionNgayVe = new Date(t.NgayVe);
                let conditionToday = new Date();
                let conditionNgayDi = new Date(t.NgayDi);
                let dateNgayVe = new Date(t.NgayVe).getTime();
                let dateHomNay = new Date().getTime();
                if (
                  conditionNgayDi >= conditionToday &&
                  conditionNgayVe >= conditionToday
                ) {
                  return (
                    <tr className={cx("tr-td")}>
                      <td>{t.MaTour}</td>
                      <td>{t.TenTour}</td>
                      <td className={cx("active")}>
                        {new Date(dateNgayVe - dateHomNay).getDate()} Ngày
                      </td>
                    </tr>
                  );
                }
              })}
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
