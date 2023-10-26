import React from "react";
import style from "./Bill.module.scss";
import classNames from "classnames/bind";

import img1 from "../../assets/images/PhuQuoc/pq3.png";
import paypal from "../../assets/images/paypal.png";
import momo from "../../assets/images/momo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
  faPlane,
  faPlaneArrival,
  faPlaneSlash,
  faPlaneUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Booking from "./Booking";
import Accordion from "./Accordion";
import Rules from "./Rules";
import Button from "../../components/Button";
const cx = classNames.bind(style);
export default function Bill() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-tour")}>
        <div className={cx("background-tour")}  style={{ backgroundImage: `url(${img1})` }}>

        </div>
        <div className={cx("background-tour-detail-tittle-css")}  >
        <div className={cx("background-tour-detail-tittle")}>
            <div><h2>Tour Hà Nội 2 Ngày 1 Đêm</h2>
            </div>
        </div>
        <div className={cx("background-tour-hr")}></div>
        <div className={cx("background-tour-detail")}>
            <div>Mã Tour</div>
            <div>TK52352</div>
        </div>
        <div className={cx("background-tour-hr")}></div>
        <div className={cx("background-tour-detail")}>
            <div>Chỗ Còn Trống</div>
            <div>50</div>
        </div>
        <div className={cx("background-tour-hr")}></div>
        <div className={cx("background-tour-detail")}>
            <div>Ngày Khởi Hành</div>
            <div>14/14/2200</div>
        </div>
        <div className={cx("background-tour-hr")}></div>
        <div className={cx("background-tour-detail")}>
            <div>Địa Điểm Khởi Hành</div>
            <div>Hồ Chí Minh</div>
        </div>
        <div className={cx("background-tour-hr")}></div>
        <div className={cx("background-tour-detail")}>
          <div className={cx("background-tour-detail-price")} >Giá Từ 9.000.000 VND</div>
        </div>
        </div>
        
      </div>
      <p className={cx("title")}>Thông Tin Đặt Tour</p>
      <Booking />
      <p className={cx("title")}>Phương Thức Thanh Toán</p>
      <Accordion />
      <Rules />
      <div className={cx("btn")}>
        <Button Booking>Đặt  Tour</Button>
        <Button Cancel>Hủy</Button>
      </div>
    </div>
  );
}
