import React from "react";
import style from "./Bill.module.scss";
import classNames from "classnames/bind";
import img1 from "../../assets/images/PhuQuoc/pq3.png";
import paypal from "../../assets/images/paypal.png";
import momo from "../../assets/images/momo.png";
const cx = classNames.bind(style);
export default function Bill() {
  return (
    <div className={cx("wrapper")}>
      <p>Thong tin</p>
      <div className={cx("wrapper-tour")}>
        <div className={cx("img-form")}>
          <img src={img1} alt="loi" />
        </div>
        <div className={cx("inform")}>
          <p className={cx("name-tour")}>
            THAM GIA SINGAPO VA MALAYSIA TU HA NOI
          </p>
          <ul>
            <li>- Ma tour: SG-ML-2013</li>
            <li>- Thoi gian: 3N2D</li>
            <li>- Ngay di: 10-10-2023</li>
            <li>- Ngay Ve: 10-11-2023</li>
            <li>- Loai tour: Ngoai nuoc</li>
            <li>- Phuong tien: May Bay</li>
          </ul>
          <div className={cx("children-price")}>
            <p>Gia tre em: 0</p>
          </div>
          <div className={cx("total-price")}>
            <p>Tong: 10.000.000</p>
          </div>
        </div>
      </div>
      <p>Phieu dat tour</p>
      <div className={cx("form")}>
        <div className={cx("form-input")}>
          <label htmlFor="">Phone</label>
          <br />
          <input type="text" />
        </div>
        <div className={cx("form-input")}>
          <label htmlFor="">Email</label>
          <br />
          <input type="text" />
        </div>
        <div className={cx("form-input")}>
          <label htmlFor="">Address</label>
          <br />
          <input type="text" />
        </div>
      </div>
      <p>Phuong thuc thanh toan</p>
      <div className={cx("payment-paypal")}>
        <div className={cx("img-payment")}>
          <img src={paypal} alt="loi" />
        </div>
        <div className={cx("text-payment")}>
          <p>PAYPAL</p>
        </div>
      </div>
      <div className={cx("payment-momo")}>
        <div className={cx("img-payment")}>
          <img src={momo} alt="loi" />
        </div>
        <div className={cx("text-payment")}>
          <p>MOMO</p>
        </div>
      </div>
      <div className={cx("payment-cash")}>
        <div className={cx("text-payment")}>
          <p>CASH</p>
        </div>
      </div>
      
    </div>
  );
}
