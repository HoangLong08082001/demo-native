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
        <div className={cx("img-form")}>
          <img src={img1} alt="loi" />
        </div>
        <div className={cx("inform")}>
          <p className={cx("name-tour")}>
            THAM GIA SINGAPO VA MALAYSIA TU HA NOI
          </p>
          <div className={cx("list")}>
            <ul>
              <li>
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={faClock}
                ></FontAwesomeIcon>
                <p>3 Ngay 2 Dem</p>
              </li>
              <li>
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={faPlane}
                ></FontAwesomeIcon>
                <p>TP.HCM</p>
              </li>
              <li>
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={faCalendar}
                ></FontAwesomeIcon>
                <p>Khoi hanh: 19/9/2023</p>
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={faUser}
                ></FontAwesomeIcon>
                <p>Con cho: 10 hanh khach</p>
              </li>
              <li>
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={faPlaneArrival}
                ></FontAwesomeIcon>
                <p>Ha Noi</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={cx("title")}>THONG TIN DAT TOUR</p>
      <Booking />
      <p className={cx("title")}>PHUONG THUC THANH TOAN</p>
      <Accordion />
      <Rules />
      <div className={cx("btn")}>
        <Button Booking>DAT TOUR</Button>
        <Button Cancel>HUY</Button>
      </div>
    </div>
  );
}
