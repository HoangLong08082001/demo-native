import React from "react";
import style from "./Booking.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Booking() {
  return (
    <div className={cx("booking")}>
      <div className={cx("inform-passenger")}>
        <div className={cx("form-input")}>
          <label htmlFor="">Ho va Ten</label>
          <br />
          <input type="text" name="" placeholder="Nhap ho va ten" id="" />
        </div>
        <div className={cx("form-input-inform")}>
          <label htmlFor="">Thong tin</label>
          <div className={cx("input")}>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <input placeholder="Nhap dia chi email" type="text" name="" id="" />
          </div>
          <div className={cx("input")}>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faLocationDot}
            ></FontAwesomeIcon>
            <input placeholder="Nhap dia chi noi o" type="text" name="" id="" />
          </div>
          <div className={cx("input")}>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faPhone}
            ></FontAwesomeIcon>
            <input placeholder="Nhap so dien thoai" type="text" name="" id="" />
          </div>
        </div>
      </div>
      <div className={cx("quantity-tour")}>
        <label htmlFor="">So luong hanh khach</label>
        <div className={cx("quality")}>
          <div className={cx("title-quality")}>
            <p>Nguoi lon ( {">"} 12 tuoi)</p>
            <p>Tre em ( 2 - 11 tuoi)</p>
            <p>Em be (0 - 1 tuoi)</p>
            <span>TONG CONG</span>
          </div>
          <div className={cx("money-quality")}>
            <div className={cx("item-quality")}>
              <p>900.000 VND x</p>
              <input type="number" name="" id="" />
            </div>
            <div className={cx("item-quality")}>
              <p>900.000 VND x</p>
              <input type="number" name="" id="" />
            </div>
            <div className={cx("item-quality")} style={{ marginLeft: "55px" }}>
              <p>0 VND x</p>
              <input type="number" name="" id="" />
            </div>
            <div className={cx("item-quality")}>
              <span>90.000.000 VND</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
