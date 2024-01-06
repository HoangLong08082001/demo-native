import React, { useEffect, useState } from "react";
import style from "./Booking.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function Booking(props) {
  
  const [Person, setPerson] = useState(0);
  const [Personmin, setPersonmin] = useState(0);
  const [Personbe, setPerbe] = useState(0);
  const [value, setvalue] = useState({});
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [sdt, setsdt] = useState("");
  const [diachi, setdiachi] = useState("");

  let [countprice, setcountprice] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("Ma") === null) {
      setname("");
      setemail("");
      setsdt("");
      setdiachi("");
    } else {
      axios
        .post("/custommer/getDK", {
          MaKH: localStorage.getItem("Ma"),
        })
        .then((response) => {
          if (response.data === "success") {
            setname(response.list[0].TenKH);
            setemail(response.list[0].username);
            setsdt(response.list[0].Sdt);
            setdiachi(response.list[0].DiaChi);
          }
        });
    }
  }, [props.MaTour]);

  const handleupbe = () => {
    setPerbe(Personbe + 1);
  };
  const handledownbe = () => {
    if (Personbe === 0) {
    } else {
      setPerbe(Personbe - 1);
    }
  };
  const handleuppersonmin = () => {
    setPersonmin(Personmin + 1);
    setcountprice((countprice += props.Price / 2 - ((props.Price / 2) * props.Giam) / 100));
  };
  const handledownpersonmin = () => {
    if (Personmin === 0) {
    } else {
      setPersonmin(Personmin - 1);
      setcountprice((countprice -= props.Price / 2 - ((props.Price / 2) * props.Giam) / 100));
    }
  };
  const handleupperson = () => {
    setPerson(Person + 1);
    setcountprice((countprice += props.Price - (props.Price * props.Giam) / 100));
  };
  const handledownperson = () => {
    if (Person === 0) {
    } else {
      setPerson(Person - 1);
      setcountprice((countprice -= props.Price - (props.Price * props.Giam) / 100));
    }
  };

  const price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.Price);
  const price2 = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.Price / 2);
  const a = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(countprice);
  useEffect(() => {
    props.callBackname(
      name,
      email,
      sdt,
      diachi,
      countprice,
      Person,
      Personmin,
      Personbe
    );
  }, [name, email, sdt, diachi, countprice, Person, Personmin, Personbe]);
  return (
    <div className={cx("booking")}>
      <div className={cx("booking-information")}>
        <div>
          <span>Họ Tên</span>
          <input
            className={cx("booking-information-input")}
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          ></input>
        </div>
        <div>
          <span>Email</span>
          <input
            className={cx("booking-information-input")}
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            id="fname"
            name="firstname"
            placeholder="Your email.."
          ></input>
        </div>
        <div>
          <span>Số Điện Thoại</span>
          <input
            className={cx("booking-information-input")}
            value={sdt}
            onChange={(e) => setsdt(e.target.value)}
            type="number"
            id="fname"
            name="firstname"
            placeholder="Your phone.."
          ></input>
        </div>
        <div>
          <span>Địa Chỉ</span>
          <input
            className={cx("booking-information-input")}
            value={diachi}
            onChange={(e) => setdiachi(e.target.value)}
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your address.."
          ></input>
        </div>
      </div>
      <div className={cx("booking-total")}>
        <div className={cx("booking-total-title")}>
          <span>
            Tổng Giá <FontAwesomeIcon icon={faMoneyCheck} />
          </span>
        </div>
        <div className={cx("booking-total-check")}>
          <span>Người Lớn</span>
          <span> x {price}</span>
          <span style={{ color: "#d10a00", fontWeight: 600 }}> - {props.Giam}%</span>
          <button onClick={handledownperson}>-</button>
          <span>{Person}</span>
          <button onClick={handleupperson}>+</button>
        </div>
        <div className={cx("booking-total-check")}>
          <span>Trẻ Em </span>
          <span> x {price2}</span>
          <span style={{ color: "#d10a00", fontWeight: 600 }}> - {props.Giam}%</span>
          <button onClick={handledownpersonmin}>-</button>
          <span>{Personmin}</span>
          <button onClick={handleuppersonmin}>+</button>
        </div>
        <div className={cx("booking-total-check")}>
          <span>Em Bé </span>
          <span> </span>
          <span style={{ color: "#d10a00", fontWeight: 600 }}></span>
          <button onClick={handledownbe}>-</button>
          <span>{Personbe}</span>
          <button onClick={handleupbe}>+</button>
        </div>
        <div className={cx("booking-total-title")}>
          <span>Chính Sách Giá </span>
        </div>
        <div className={cx("booking-total-check")}>
          <span>Người Lớn {">"} 14 Tuổi = 100% Vé </span>
          <span>Người Lớn {"5 - 10 "}Tuổi = 50% Vé </span>
        </div>
        <div className={cx("booking-total-check")}>
          <span>Trẻ Em {"< 5"} Tuổi = Miễn Phí Vé </span>
        </div>

        <div className={cx("booking-total-price")}>
          <span>Tổng Cộng</span> <span>{a} </span>
        </div>
      </div>
    </div>
  );
}
