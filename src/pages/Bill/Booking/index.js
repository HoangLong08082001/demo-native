import React, { useState } from "react";
import style from "./Booking.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Booking() {
  const [Person,setPerson]=useState(0);
  const [Personmin,setPersonmin]=useState(0);
  const handleuppersonmin=()=>{
    setPersonmin(Personmin+1);
  }
  const handledownpersonmin=()=>{
    setPersonmin(Personmin-1);
  }
  const handleupperson=()=>{
    setPerson(Person+1);
  }
  const handledownperson=()=>{
    setPerson(Person-1);
  }
  
  return (
    <div className={cx("booking")}>
        <div className={cx("booking-information")}>
            <div>
                 <span>Họ Tên</span>
                 <input className={cx("booking-information-input")} type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            </div>
            <div>
                 <span>Email</span>
                 <input className={cx("booking-information-input")} type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            </div>
            <div>
                 <span>Số Điện Thoại</span>
                 <input className={cx("booking-information-input")} type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            </div>
            <div>
                 <span>Địa Chỉ</span>
                 <input className={cx("booking-information-input")} type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            </div>
        </div>
        <div className={cx("booking-total")}>
           <div className={cx("booking-total-title")}><span>Tổng Giá <FontAwesomeIcon  icon={faMoneyCheck}/></span></div>
           <div className={cx("booking-total-check")}><span>Người Lớn</span> 
           <span> x 700.000</span>
           <button onClick={handledownperson}>-</button>
           <span>{Person}</span>
           <button onClick={handleupperson}>+</button></div>
           <div className={cx("booking-total-check")}><span>Trẻ Em </span> 
           <span> x 700.000</span>
           <button onClick={handledownpersonmin}>-</button>
           <span>{Personmin}</span>
           <button onClick={handleuppersonmin}>+</button></div>
           <div className={cx("booking-total-check")}><span>Trẻ Em </span> 
           <span> x 700.000</span>
           <button onClick={handledownpersonmin}>-</button>
           <span>{Personmin}</span>
           <button onClick={handleuppersonmin}>+</button></div>
           <div className={cx("booking-total-price")}><span>Tổng Cộng</span> <span>700000 VND</span></div>

        </div>
     </div>
  );
}
