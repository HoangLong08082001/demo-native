import React from "react";
import style from "./About.module.scss";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import employee from "../../../src/assets/images/employee.png";
import logo from "../../../src/assets/images/logo.png";
import payment from "../../../src/assets/images/payment.png";
import sale from "../../../src/assets/images/sale.png";
import hotline from "../../../src/assets/images/hotine.png";
import layout from "../../../src/assets/images/layout.png";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function About() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("introduce")}>
        <div className={cx("left")}>
          <p className={cx("title")}>CHÚNG TÔI LÀ AI?</p>
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </span>
        </div>
        <div className={cx("right")}>
          <img src={logo} alt="" />
        </div>
      </div>

      <p className={cx("title-2")}>LỢI ÍCH CỦA WEBSITE</p>
      <div className={cx("list-employee")}>
        <div className={cx("employee")}>
          <img className={cx("img-benefit")} src={layout} alt="loi" />
          <p className={cx("des")}>GIAO DIỆN DỄ DÙNG</p>
        </div>
        <div className={cx("employee")}>
          <img className={cx("img-benefit")} src={sale} alt="loi" />
          <p className={cx("des")}>KHUYẾN MÃI ĐẶC BIỆT</p>
        </div>
        <div className={cx("employee")}>
          <img className={cx("img-benefit")} src={hotline} alt="loi" />
          <p className={cx("des")}>HỖ TRỢ LIÊN TỤC</p>
        </div>
        <div className={cx("employee")}>
          <img className={cx("img-benefit")} src={payment} alt="loi" />
          <p className={cx("des")}>THANH TOÁN NHANH CHÓNG</p>
        </div>
      </div>

      <p className={cx("title-2")}>DANH SÁCH NHÂN VIÊN?</p>
      <div className={cx("list-employee")}>
        <div className={cx("employee")}>
          <img className={cx("img-employee")} src={employee} alt="loi" />
          <p className={cx("name")}>HÀ HOÀNG LONG</p>
        </div>
        <div className={cx("employee")}>
          <img className={cx("img-employee")} src={employee} alt="loi" />
          <p className={cx("name")}>ĐẶNG VĂN TUYẾN</p>
        </div>
      </div>
    </div>
  );
}
