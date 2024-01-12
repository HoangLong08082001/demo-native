import React, { useContext, useEffect, useState } from "react";
import style from "./Ticket.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faFlagCheckered,
  faInfo,
  faListCheck,
  faPen,
  faPenAlt,
  faPenClip,
  faPlusCircle,
  faSort,
  faSortDesc,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/UserContext";
const cx = classNames.bind(style);
export default function Ticket() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(null);
  const { user } = useContext(UserContext);
  const [toggle, setToggle] = useState(1);
  const [status, setstatus] = useState(null);
  const [countDown, setCountDown] = useState("");
  const [listTicketChecked, setListTicketChecked] = useState([]);
  const toggleTab = (index) => {
    setToggle(index);
  };
  const fetchListChecked = async () => {
    await axios.get("/ticket/getall-ticket").then((res) => {
      if (res && res.message === "success") {
        setListTicketChecked(res.data);
        setLoad(res.data);
        console.log(res.data);
      }
    });
  };
  const handleSubmit = async (l) => {
    let maphieu = l.MaPhieu;
    let mahoadon = l.MaHoaDon;
    let tongtien = l.Tongtien;
    let hinhthucthanhtoan = l.HinhThucThanhToan;
    console.log(maphieu);
    let response = await axios.put("/ticket/update-status-ticket", {
      maphieu,
      mahoadon,
      tongtien,
      hinhthucthanhtoan,
    });
    if (response && response.message === "success") {
      toast.success("Xác nhận đã thanh toán");
      fetchListChecked();
    }
  };

  useEffect(() => {
    fetchListChecked();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <Link to="/them-phieu">
        <button className={cx("btn-add")}>
          TẠO PHIẾU <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        </button>
      </Link>
      <div className={cx("tab-panel")}>
        <button
          onClick={() => setToggle(1)}
          className={toggle === 1 ? cx("checked-active") : cx("checked")}
        >
          Chờ thanh toán
        </button>
        <button
          onClick={() => setToggle(2)}
          className={toggle === 2 ? cx("checked-active") : cx("checked")}
        >
          Đã huỷ
        </button>
      </div>
      {toggle === 1 && (
        <>
          {load ? (
            <table className={cx("active")}>
              <tr className={cx("tr-th")}>
                <th>Mã phiếu</th>
                <th>Tên tour</th>
                <th>Tên khách hàng</th>
                <th>Số điện thoại</th>
                <th>Ngày lập phiếu</th>
                <th>Thời hạn thanh toán</th>
                <th>Action</th>
              </tr>
              {listTicketChecked.map((l, i) => {
                const today = new Date();
                const ngaytao = new Date(l.NgayTao);
                // Ngày mục tiêu (20/1/2024)
                const targetDate = new Date(l.NgayDi);

                // Tính số mili giây còn lại
                const timeRemaining = targetDate - today;

                // Chuyển đổi số mili giây thành số ngày
                const days = Math.floor(
                  timeRemaining / (1000 * 60 * 60 * 24) - 1
                );
                if (l.TrangThai === 0 && days > 0) {
                  return (
                    <tr className={cx("tr")}>
                      <td>{l.MaPhieu}</td>
                      <td>{l.TenTour}</td>
                      <td>{l.TenKH}</td>
                      <td>{l.Sdt}</td>
                      <td>{new Date(l.NgayTao).toLocaleDateString("en-US")}</td>
                      {days <= 0 ? (
                        <td className={cx("offday")}>Hết Hạn Thanh Toán</td>
                      ) : (
                        <td>Còn {days} Ngày</td>
                      )}
                      <td>
                        {days <= 0 ? (
                          <button
                            className={cx("btnDelete")}
                            onClick={() =>
                              navigate(
                                `/chi-tiet-phieu-dat-tour/${l.MaPhieu}`,
                                {
                                  state: l,
                                }
                              )
                            }
                          >
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          </button>
                        ) : (
                          <button
                            className={cx("btnUpdate")}
                            onClick={() => handleSubmit(l)}
                          >
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                }
              })}
            </table>
          ) : (
            <div className={cx("loading-form")}>
              <ReactLoading
                type={"spin"}
                color="#808080"
                height={"5%"}
                width={"5%"}
                className={cx("loading")}
              />
              <h2>Loading data...</h2>
            </div>
          )}
        </>
      )}
      {toggle === 2 && (
        <>
          {load ? (
            <table className={cx("active")}>
              <tr className={cx("tr-th")}>
                <th>Mã phiếu</th>
                <th>Tên tour</th>
                <th>Tên khách hàng</th>
                <th>Số điện thoại</th>
                <th>Ngày lập phiếu</th>
                <th>Thời hạn thanh toán</th>
              </tr>
              {listTicketChecked.map((l, i) => {
                const today = new Date();
                const ngaytao = new Date(l.NgayTao);
                // Ngày mục tiêu (20/1/2024)
                const targetDate = new Date(l.NgayDi);

                // Tính số mili giây còn lại
                const timeRemaining = targetDate - today;

                // Chuyển đổi số mili giây thành số ngày
                const days = Math.floor(
                  timeRemaining / (1000 * 60 * 60 * 24) - 1
                );
                if (l.TrangThai === 0 && days <= 0) {
                  return (
                    <tr className={cx("tr-off")}>
                      <td>{l.MaPhieu}</td>
                      <td>{l.TenTour}</td>
                      <td>{l.TenKH}</td>
                      <td>{l.Sdt}</td>
                      <td>{new Date(l.NgayTao).toLocaleDateString("en-US")}</td>
                      {days <= 0 ? (
                        <td className={cx("offday")}>Hết Hạn Thanh Toán</td>
                      ) : (
                        <td>Còn {days} Ngày</td>
                      )}
                    </tr>
                  );
                }
              })}
            </table>
          ) : (
            <div className={cx("loading-form")}>
              <ReactLoading
                type={"spin"}
                color="#808080"
                height={"5%"}
                width={"5%"}
                className={cx("loading")}
              />
              <h2>Loading data...</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}
