import React, { useEffect, useState } from "react";
import style from "./AddEmployee.module.scss";
import classNames from "classnames/bind";
import Select from "react-dropdown-select";
import Button from "../../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "../../../../setup-axios/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { faCancel, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
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
  const checkValidate = () => {
    if (TenNV === "") {
      toast.warning("Vui lòng nhập đầy đủ họ tên nhân viên");
      return false;
    }
    if (cmnd === "" || cmnd.length !== 12) {
      toast.warning("Vui lòng nhập căn cước công dân nhân viên");
      return false;
    }
    if (Ngaysinh === "") {
      toast.warning("Vui lòng ngày sinh nhân viên");
      return false;
    }
    if (Sdt === "") {
      toast.warning("Vui lòng nhập số điện thoại");
      return false;
    }
    if (Sdt.length !== 10) {
      toast.warning("Vui lòng nhập đúng định dạng số điện thoại Việt Nam");
      return false;
    }
    if (Email === "") {
      toast.warning("Vui lòng nhập email nhân viên");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(Email)) {
      toast.warning("Nhập sai định dạng email");
      return false;
    }
    if (Password === "") {
      toast.warning("Vui lòng nhập password của nhân viên");
      return false;
    }
    if (Position === "") {
      toast.warning("Vui lòng chọn vị trí nhân viên");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    let check = checkValidate();
    if (check === true) {
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
          if (res && res.message === "exists") {
            toast.warning("Email này đã tồn tại");
          }
          if (res && res.message === "success") {
            toast.success("Thêm thành công");
            setTenvNV("");
            setCMND("");
            setNgaySinh("");
            setSdt("");
            setEmail("");
            setPaswword("");
          }
        });
    }
  };

  useEffect(() => {
    axios.get("/position/list-position").then((res) => {
      console.log(res.data);
      setListPosition(res.data);
    });
  }, []);
  return (
    <div className={cx("wrapper")}>
      {/* TENNV CMND NGAYSINH SDT EMAIL PASS POSTION*/}
      <p>NHẬP THÔNG TIN NHÂN VIÊN</p>
      <div className={cx("form")}>
        <div className={cx("form-left")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Tên nhân viên:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Nhập đầy đủ họ và tên"
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
              placeholder="Nhập số căn cước công dân"
              value={cmnd}
              onChange={(e) => setCMND(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Ngày sinh:</label>
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
            <label htmlFor="">Số điện thoại:</label>
            <input
              style={{ marginLeft: "20px" }}
              type="number"
              name=""
              id=""
              placeholder="Nhập số điện thoại (VD:09x)"
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
              placeholder="Nhập email cá nhân"
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
                placeholder="Nhập password đăng nhập"
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
            <label htmlFor="">Vị trí:</label>
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
        <button
          className={cx("btn-submit")}
          onClick={handleSubmit}
          onSubmit={handleSubmit}
        >
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>THÊM MỚI
        </button>
        <Link to="/nhan-vien" className={cx("text")}>
          <button className={cx("btn-cancel")}>
            TRỞ LẠI<FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
}
