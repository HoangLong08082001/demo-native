import React, { useEffect, useState } from "react";
import style from "./DetailEmployee.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../../../../setup-axios/axios";
import user from "../../../../../src/assets/images/userimg.png";
const cx = classNames.bind(style);
export default function DetailEmployee() {
  const [name, setName] = useState("");
  const [sdt, setSdt] = useState("");
  const [email, setEmail] = useState("");
  const [postion, setPosition] = useState("");
  const { id } = useParams();
  const location = useLocation();
  const getItemLocation = () => {
    setEmail(location.state.Email);
    setName(location.state.TenNV);
    setSdt(location.state.Sdt);
    setPosition(location.state.TenViTri);
  };
  useEffect(() => {
    getItemLocation();
    console.log(location);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <div className={cx("img-user")}>
          <img src={user} alt="" />
        </div>
        <div className={cx("form-info")}>
          <p>THONG TIN NHAN VIEN</p>
          <div className={cx("form-input")}>
            <label htmlFor="">Email</label>
            <input type="text" disabled value={email} />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Ten</label>
            <input
              style={{ marginLeft: "32px" }}
              disabled
              value={name}
              type="text"
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Sdt</label>
            <input
              type="text"
              disabled
              style={{ marginLeft: "32px" }}
              value={sdt}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Vi tri</label>
            <input
              type="text"
              disabled
              style={{ marginLeft: "22px" }}
              value={postion}
            />
          </div>
        </div>
      </div>
      <Link to="/nhan-vien">
        <button className={cx("btn-cancel")}>Tro lai</button>
      </Link>
    </div>
  );
}
