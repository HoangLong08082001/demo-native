import React, { useEffect, useState } from "react";
import style from "./UnAutoTable.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
import ReactLoading from "react-loading";

const cx = classNames.bind(style);
export default function UnAutoTable() {
  const [loadDiscount, setLoadDiscount] = useState(null);
  const [listDiscount, setListDiscount] = useState([]);
  const fetchDiscount = () => {
    axios.get("/voucher/get-more-voucher").then((res) => {
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
            let start = new Date(item.thoigianbatdauthem).toLocaleDateString(
              "sv-SE"
            );
            let end = new Date(item.thoigianketthucthem).toLocaleDateString(
              "sv-SE"
            );
            let today = new Date();
            let endday = new Date(item.thoigianketthucthem);
            return (
              <tr
                className={today <= endday ? cx("tr-td") : cx("tr-td-disable")}
              >
                <td>{item.id_giamgiathem}</td>
                <td>{item.ten_dotgiamgiathem}</td>
                <td>{start}</td>
                <td>{end}</td>
                <td>{item.mucgiamgiathem}</td>
                
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
