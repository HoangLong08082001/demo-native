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
  const handleAddCustommer = async () => {
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
          toast.success("Them thanh cong");
        }
      });
  };
  const fetchCustommer = async () => {
    await axios.get("/custommer/list-customer").then((res) => {
      console.log(res.data);
    });
  };
  const fetchTour = async () => {
    await axios.get("/tourserver/getall-tour").then((res) => {
      if (res && res.message === "success") {
        console.log(res);
      }
    });
  };
  useEffect(() => {
    fetchCustommer();
    fetchTour();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>THONG TIN KHACH HANG</p>
      <div className={cx("form")}>
        <label htmlFor="">Ten khach hang</label>
        <input
          value={TenKH}
          onChange={(e) => setTenKH(e.target.value)}
          type="text"
          name=""
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
          id=""
          style={{ marginLeft: "195px" }}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Dia chi</label>
        <input
          type="text"
          value={DiaChi}
          onChange={(e) => setDiaChi(e.target.value)}
          name=""
          id=""
          style={{ marginLeft: "195px" }}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Ngay sinh</label>
        <DatePicker
          dateFormat="MM/dd/yyyy"
          placeholderText="mm/dd/yyyy"
          selected={ngaySinh}
          onChange={(date) => setNgaySinh(date)}
          className={cx("date-input")}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">So dien thoai</label>
        <input
          type="text"
          value={Sdt}
          onChange={(e) => setSdt(e.target.value)}
          name=""
          id=""
          style={{ marginLeft: "135px" }}
        />
      </div>
      <div className={cx("button")}>
        <button className={cx("Add")} onClick={handleAddCustommer}>
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>THEM
        </button>
        <Link to="/custommer">
          <button className={cx("Cancel")}>
            HUY<FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
}
