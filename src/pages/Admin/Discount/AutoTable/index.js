import React, { useEffect, useState } from "react";
import style from "./AutoTable.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
import ReactLoading from "react-loading";
const cx = classNames.bind(style);
export default function AutoTable() {
  const [loadDiscount, setLoadDiscount] = useState(null);
  const [listDiscount, setListDiscount] = useState([]);
  const fetchDiscount = () => {
    axios.get("/voucher/get-voucher").then((res) => {
      if (res.message === "success") {
        setListDiscount(res.data);
        setLoadDiscount(res.data);
      }
    });
  };
  useEffect(() => {
    fetchDiscount();
  }, []);
  return (
    <div>
      {loadDiscount ? (
        <table border={1} cellSpacing={0}>
          <tr className={cx("tr-th")}>
            <th>Mã</th>
            <th>Tên đợt giảm giá</th>
            <th>Thời gian bắt đầu</th>
            <th>Thời gian kết thúc</th>
            <th>Mức giảm(%)</th>
          </tr>
          {listDiscount.map((item, index) => {
            let start = new Date(item.thoigianbatdau).toLocaleDateString(
              "sv-SE"
            );
            let end = new Date(item.thoigiantoi).toLocaleDateString("sv-SE");
            let enday = new Date(item.thoigiantoi);
            let today = new Date();
            return (
              <tr className={today <= enday ? cx("tr-td") : cx("tr-td-disable")}>
                <td>{item.id_giamgia}</td>
                <td>{item.ten_dotgiamgia}</td>
                <td>{start}</td>
                <td>{end}</td>
                <td>{item.mucgiamgia}</td>
                
              </tr>
            );
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
    </div>
  );
}
