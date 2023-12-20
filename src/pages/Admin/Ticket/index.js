import React, { useContext, useEffect, useState } from "react";
import style from "./Ticket.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
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
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/UserContext";
const cx = classNames.bind(style);
export default function Ticket() {
  const { user } = useContext(UserContext);
  const [toggle, setToggle] = useState(1);
  const [listTicketChecked, setListTicketChecked] = useState([]);
  const toggleTab = (index) => {
    setToggle(index);
  };
  const fetchListChecked = async () => {
    await axios.get("/ticket/getall-ticket").then((res) => {
      if (res && res.message === "success") {
        setListTicketChecked(res.data);
        
      }
    });
  };
  const handleSubmit = async (l) => {
    let maphieu = l.MaPhieu;
    console.log(maphieu);
    let response = await axios.put("/ticket/update-status-ticket", { maphieu });
    if (response && response.message === "success") {
      toast.success("Da duyet tour");
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
          TAO PHIEU <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        </button>
      </Link>

      <div className={cx("tab-panel")}>
        <button
          className={toggle === 1 ? cx("checked-active") : cx("checked")}
          onClick={() => toggleTab(1)}
        >
          Danh Sach phieu Chua Duyet
        </button>
        <button
          className={toggle === 2 ? cx("checked-active") : cx("checked")}
          onClick={() => toggleTab(2)}
        >
          Danh Sach phieu Da Duyet{" "}
          <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
        </button>
      </div>
      {toggle === 1 ? (
        <>
          <input type="text" className="search" placeholder="Search here" />
          <table className={cx("active")}>
            <tr className={cx("tr-th")}>
              <th>Mã phiếu</th>
              <th>Tên tour</th>
              <th>Tên khách hàng</th>
              <th>Số điện thoại</th>
              <th>Ngày lập phiếu</th>
              <th>Duyệt phiếu</th>
              <th>Action</th>
            </tr>
            {listTicketChecked.map((l, i) => {
              if (l.TrangThai === 0) {
                return (
                  <tr className={cx("tr")}>
                    <td>{l.MaPhieu}</td>
                    <td>{l.TenTour}</td>
                    <td>{l.TenKH}</td>
                    <td>{l.Sdt}</td>
                    <td>{new Date(l.NgayTao).toLocaleDateString("en-US")}</td>
                    <td>
                      {l.TrangThai === 0 && (
                        <button
                          className={cx("btn-submit")}
                          onClick={() => handleSubmit(l)}
                        >
                          Chua duyet
                        </button>
                      )}
                    </td>
                    <td>
                      <button className={cx("btnInfo")}>
                        <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                      </button>
                      <button className={cx("btnUpdate")}>
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </table>
        </>
      ) : (
        <></>
      )}
      {toggle === 2 ? (
        <>
          <input type="text" className="search" placeholder="Search here" />

          <table>
            <tr className={cx("tr-th")}>
              <th>Ma phieu</th>
              <th>Ten tour</th>
              <th>Ten khach hang</th>
              <th>So dien thoai</th>
              <th>Ngay lap phieu</th>
              <th>Duyet Phieu</th>
              <th>Action</th>
            </tr>
            {listTicketChecked.map((l, i) => {
              if (l.TrangThai === 1) {
                return (
                  <tr className={cx("tr")}>
                    <td>{l.MaPhieu}</td>
                    <td>{l.TenTour}</td>
                    <td>{l.TenKH}</td>
                    <td>{l.Sdt}</td>
                    <td>{new Date(l.NgayTao).toLocaleDateString("en-US")}</td>
                    <td>
                      <button className={cx("btn-submit-checked")}>
                        {l.TrangThai === 1 && "DA DUYET"}
                      </button>
                    </td>
                    <td>
                      <button className={cx("btnInfo")}>
                        <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                      </button>
                      <button className={cx("btnUpdate")}>
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </table>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
