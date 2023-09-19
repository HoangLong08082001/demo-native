import React, { useEffect, useState } from "react";
import style from "./Statistical.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function Statistical() {
  const [custommer, setCustommer] = useState("");
  const [employee, setEmployee] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [tour, setTour] = useState("");
  const fetchCountCustommer = async () => {
    await axios.get("/custommer/count").then((response) => {
      if (response) {
        console.log(response.data[0].count);
        setCustommer(response.data[0].count);
      }
    });
  };
  const fetchCountEmployee = async () => {
    await axios.get("/employees/count").then((res) => {
      if (res) {
        setEmployee(res.data[0].count);
      }
    });
  };
  useEffect(() => {
    fetchCountCustommer();
    fetchCountEmployee();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("list-item")}>
        <div className={cx("item-menu-1")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faUser}
          ></FontAwesomeIcon>
          {custommer.length <= 0 ? (
            <>
              <p>&nbsp;</p>
              <span>Chua co nguoi dung Dang ky</span>
            </>
          ) : (
            <>
              <p>{custommer}</p>
              <span>Nguoi dung Dang ky</span>
            </>
          )}
        </div>
        <div className={cx("item-menu-2")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faUser}
          ></FontAwesomeIcon>
          {employee.length <= 0 ? (
            <>
              <p>&nbsp;</p>
              <span>Chua co nhan vien</span>
            </>
          ) : (
            <>
              <p>{employee}</p>
              <span>Nhan vien da duoc tao</span>
            </>
          )}
        </div>

        <div className={cx("item-menu-4")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faUser}
          ></FontAwesomeIcon>
          {tour.length <= 0 ? (
            <>
              <p>&nbsp;</p>
              <span>Chua co tour</span>
            </>
          ) : (
            <>
              <p>{tour}</p>
              <span>Dang ton tai</span>
            </>
          )}
        </div>
        <div className={cx("item-menu-3")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faUser}
          ></FontAwesomeIcon>
          {maxPrice.length <= 0 ? (
            <>
              <p>&nbsp;</p>
              <span>Chua co gia tour</span>
            </>
          ) : (
            <>
              <p>Gia tour cao nhat</p>
              <span>{maxPrice}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
