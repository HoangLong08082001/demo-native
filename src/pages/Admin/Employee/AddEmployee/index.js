import React, { useEffect, useState } from "react";
import style from "./AddEmployee.module.scss";
import classNames from "classnames/bind";
import Select from 'react-dropdown-select';
import Button from "../../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "../../../../setup-axios/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function AddEmployee() {
  const [TenNV, setTenvNV] = useState("");
  const [cmnd, setCMND] = useState("");
  const [Ngaysinh, setNgaySinh] = useState("");
  const [Sdt, setSdt] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPaswword] = useState("");
  const [Position, setPosition] = useState("");
  const [show, setShow] = useState(false);
  const [listPosition, setListPosition] = useState([]);
  const handleShow = () => {
    setShow(!show);
  };
  const handleSubmit = async () => {
    await axios
      .post("/employees/add", {
        TenNV,
        cmnd,
        Ngaysinh,
        Sdt,
        Email,
        Password,
        Position,
      })
      .then((res) => {
        if (res) {
          toast.success("Them thanh cong");
        }
      });
    setTenvNV("");
    setCMND("");
    setNgaySinh("");
    setSdt("");
    setEmail("");
    setPaswword("");
  };
  useEffect(() => {
    axios.get("/position/list-postion").then((res) => {
      console.log(res.data);
      setListPosition(res.data);
    });
  }, []);
  return (
    <div className={cx("wrapper")}>
      {/* TENNV CMND NGAYSINH SDT EMAIL PASS POSTION*/}
      <p>Nhap thong tin nhan vien</p>
      <div className={cx("form")}>
        <div className={cx("form-left")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Ten nhan vien:</label>
            <input
              type="text"
              name=""
              id=""
              value={TenNV}
              onChange={(e) => setTenvNV(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">CMND:</label>
            <input
              style={{ marginLeft: "85px" }}
              type="number"
              name=""
              id=""
              value={cmnd}
              onChange={(e) => setCMND(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Ngay sinh:</label>
            <input
              style={{ marginLeft: "50px" }}
              type="date"
              name=""
              id=""
              value={Ngaysinh}
              onChange={(e) => setNgaySinh(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">So dien thoai:</label>
            <input
              style={{ marginLeft: "20px" }}
              type="number"
              name=""
              id=""
              value={Sdt}
              onChange={(e) => setSdt(e.target.value)}
            />
          </div>
        </div>
        <div className={cx("form-right")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name=""
              id=""
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={cx("form-input-password")}>
            <label htmlFor="">Password:</label>
            <div className={cx("input-password")}>
              <input
                type={show === false ? "password" : "text"}
                name=""
                id=""
                value={Password}
                onChange={(e) => setPaswword(e.target.value)}
              />
              <FontAwesomeIcon
                onClick={handleShow}
                className={cx("icon")}
                icon={show === false ? faEye : faEyeSlash}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className={cx("form-input")} style={{ display: "flex" }}>
            <label htmlFor="">Vi tri:</label>
            <select
              name={Position}
              id=""
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Chon vi tri</option>
              {listPosition.length > 0 &&
                listPosition.map((postion, index) => {
                  return (
                    <option value={postion.id_vitri} key={index}>
                      {postion.TenViTri}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </div>
      <div className={cx("btn-submit")}>
        <Link to="/employee" className={cx("text")}>
          <button className={cx("btn-cancel")}>TRO LAI</button>
        </Link>
        <button
          className={cx("btn-submit")}
          onClick={handleSubmit}
          onSubmit={handleSubmit}
        >
          THEM MOI
        </button>
      </div>
    </div>
  );
}
