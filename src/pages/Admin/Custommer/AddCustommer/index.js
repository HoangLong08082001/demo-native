import React, { useEffect, useState } from "react";
import style from "./AddCustommer.module.scss";
import classNames from "classnames/bind";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "../../../../setup-axios/axios.js";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function AddCustommer() {
  const [ngaySinh, setNgaySinh] = useState("");
  const [TenKH, setTenKH] = useState("");
  const [CMND, setCMND] = useState("");
  const [DiaChi, setDiaChi] = useState("");
  const [Sdt, setSdt] = useState("");
  const [listCustommer, setListCustommer] = useState([]);
  const [listTour, setListTour] = useState([]);
  const checkValidate = () => {
    if (TenKH === "") {
      toast.warning("Vui lòng nhập đầy đủ họ và tên khách hàng");
      return false;
    }
    if (CMND === "" || CMND.length !== 12) {
      toast.warning("Vui lòng nhập số căn cước công dân khách hàng");
      return false;
    }
    if (DiaChi === "") {
      toast.warning("Vui lòng nhập địa chỉ khách hàng");
      return false;
    }
    if (ngaySinh === "") {
      toast.warning("Vui lòng chọn ngày sinh khách hàng");
      return false;
    }
    if (Sdt === "") {
      toast.warning("Vui lòng nhập số điện thoại khách hàng");
      return false;
    }
    return true;
  };
  const handleAddCustommer = async () => {
    let check = checkValidate();
    if (check === true) {
      let Birth = new Date(ngaySinh).toLocaleDateString("en-US");
      await axios
        .post("/custommer/add-custommer", {
          TenKH,
          CMND,
          DiaChi,
          Birth,
          Sdt,
        })
        .then((res) => {
          if (res && res.message === "success") {
            toast.success("Thêm thành công");
          }
        });
    }
  };
  useEffect(() => {}, []);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>THÔNG TIN KHÁCH HÀNG</p>
      <div className={cx("form")}>
        <label htmlFor="">Tên khách hàng</label>
        <input
          value={TenKH}
          onChange={(e) => setTenKH(e.target.value)}
          type="text"
          name=""
          placeholder="Nhập đầy đủ họ và tên khách hàng"
          id=""
          style={{ marginLeft: "100px" }}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">CMND</label>
        <input
          type="number"
          value={CMND}
          onChange={(e) => setCMND(e.target.value)}
          name=""
          placeholder="Nhập số căn cước công dân khách hàng"
          id=""
          style={{ marginLeft: "195px" }}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Địa chỉ</label>
        <input
          type="text"
          value={DiaChi}
          onChange={(e) => setDiaChi(e.target.value)}
          name=""
          placeholder="Nhập địa chỉ khách hàng"
          id=""
          style={{ marginLeft: "195px" }}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Ngày sinh</label>
        <DatePicker
          dateFormat="MM/dd/yyyy"
          placeholderText="mm/dd/yyyy"
          selected={ngaySinh}
          onChange={(date) => setNgaySinh(date)}
          className={cx("date-input")}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Số điện thoại</label>
        <input
          type="text"
          value={Sdt}
          placeholder="Nhập số điện thoại khách hàng"
          onChange={(e) => setSdt(e.target.value)}
          name=""
          id=""
          style={{ marginLeft: "135px" }}
        />
      </div>
      <div className={cx("button")}>
        <button className={cx("Add")} onClick={handleAddCustommer}>
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>THÊM
        </button>
        <Link to="/khach-hang">
          <button className={cx("Cancel")}>
            HUỶ<FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
}
