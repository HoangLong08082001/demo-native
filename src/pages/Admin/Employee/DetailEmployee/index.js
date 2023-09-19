import React, { useEffect, useState } from "react";
import style from "./DetailEmployee.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button";
import { useParams } from "react-router-dom";
import axios from "../../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function DetailEmployee() {
  const [name, setName] = useState("");
  const [sdt, setSdt] = useState("");
  const [email, setEmail] = useState("");
  const [postion, setPosition] = useState("");
  const { id } = useParams();
  const fetchById = async () => {
    await axios.get(`/employees/GetById/${id}`).then((res) => {
      if (res) {
        let result = res;
        // setName(res.data[0].TenNV);
        // setEmail(res.data[0].Email);
        // setSdt(res.data[0].Sdt);
        // setPosition(res.data[0].TenViTri);
        console.log(result);
      }
    });
  };
  useEffect(() => {
    fetchById();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <Button btnAdd to="/employee">
        TRO LAI
      </Button>
      <div className={cx("form-img")}>
        <FontAwesomeIcon className={cx("icon")} icon={faUser}></FontAwesomeIcon>
      </div>
      <div className={cx("name")}>
        <p>Ten: {name}</p>
      </div>
      <div className={cx("sdt")}>
        <p>So dien thoai: {sdt}</p>
      </div>
      <div className={cx("email")}>
        <p>Email: {email}</p>
      </div>
      <div className={cx("position")}>
        <p>Vi tri: {postion}</p>
      </div>
    </div>
  );
}
