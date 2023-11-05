import React, { useEffect, useState } from "react";
import style from "./AddTicket.module.scss";
import classNames from "classnames/bind";
import { AutoComplete } from "antd";
import Select from "react-select";

import axios from "../../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function AddTicket() {
  const [empName, setEmpName] = useState([]);
  const fetchEmpName = async () => {
    await axios.get("/employees/getNameEmployee").then((res) => {
      setEmpName(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    fetchEmpName();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>THONG TIN PHIEU</p>
      <div className={cx("form")}>
        <label htmlFor="">Ho ten khach hang</label>
        <AutoComplete
          options={empName}
          className={cx("input")}
          style={{ marginLeft: "49px" }}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Sdt</label>
        <AutoComplete className={cx("input")} style={{ marginLeft: "175px" }} />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Ten tour</label>
        <AutoComplete className={cx("input")} style={{ marginLeft: "135px" }} />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">So tien thanh toan</label>
        <AutoComplete className={cx("input")} style={{ marginLeft: "50px" }} />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Ngay thu</label>
        <input
          type="date"
          className={cx("input")}
          style={{ marginLeft: "125px" }}
        />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Noi dung thanh toan</label>
        <AutoComplete className={cx("input")} />
      </div>
      <div className={cx("form")}>
        <label htmlFor="">Nguoi lap phieu</label>
        <AutoComplete
          className={cx("input")}
          filterOption={true}
          style={{ marginLeft: "68px" }}
        />
      </div>
    </div>
  );
}
