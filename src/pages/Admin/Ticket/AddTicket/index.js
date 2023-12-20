import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./AddTicket.module.scss";
import classNames from "classnames/bind";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "../../../../setup-axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCancel,
  faCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function AddTicket() {
  const { user } = useContext(UserContext);
  const ref = useRef(null);
  const handleFocus = () => {
    ref.current.focus();
  };
  const [dateCreated, setDateCreated] = useState("");
  const [listCustommer, setListCustommer] = useState([]);
  const [listTour, setListTour] = useState([]);
  const [soLuong, setSoLuong] = useState(0);
  const [soLuong1, setSoLuong1] = useState(0);
  const [soLuong2, setSoLuong2] = useState(0);
  const [khachhang, setKhachHang] = useState();
  const [tour, setTour] = useState();
  const [sum, setSum] = useState();
  const fetchCustommer = async () => {
    await axios.get("/custommer/list-customer").then((res) => {
      setListCustommer(res.list);
    });
  };
  const fetchTour = async () => {
    await axios.get("/tourserver/getall-tour").then((res) => {
      if (res && res.message === "success") {
        setListTour(res.data);
      }
    });
  };
  const handleOnChange = (e) => {
    const selectedId = e.target.value;
    const selectedCustomer = listCustommer.filter(
      (d) => d.TenKH === selectedId
    )[0];
    setKhachHang(selectedCustomer);
  };
  const onChangeTour = (e) => {
    const selectedIDTour = e.target.value;
    const selectedTour = listTour.filter(
      (t) => t.TenTour === selectedIDTour
    )[0];
    setTour(selectedTour);
  };
  const SumMoney = () => {
    let tong = 0;
    if (soLuong !== 0) {
      tong += soLuong * tour?.GiaTour;
    } else if (soLuong !== 0 && soLuong1 !== 0) {
      tong += soLuong * soLuong1 * tour?.GiaTour;
    } else if (soLuong !== 0 && soLuong1 !== 0 && soLuong2 !== 0) {
      tong += soLuong * soLuong1 * soLuong2 * tour?.GiaTour;
    }
    return tong;
  };

  console.log(user.accout.id !== undefined && user.accout.id);
  const handleSubmit = async () => {
    let idNV = user.accout.id !== undefined && user.accout.id;
    let idKH = khachhang?.MaKH;
    let idTour = tour?.MaTour;
    let sum = SumMoney();
    let qualityCustomer = soLuong + soLuong1 + soLuong2;
    let date = new Date(dateCreated).toLocaleDateString("sv-SE");
    await axios
      .post("/ticket/add-ticket", {
        idNV,
        idKH,
        idTour,
        sum,
        date,
        qualityCustomer,
      })
      .then((res) => {
        if (res && res.message === "success") {
          toast.success(user.accout.email + "Da duyet phieu");
        }
      });
  };

  useEffect(() => {
    fetchCustommer();
    fetchTour();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>THONG TIN PHIEU</p>
      <div className={cx("form")}>
        <div className={cx("form-left")}>
          <div className={cx("input")}>
            <label htmlFor="">Ngay tao phieu</label>
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={dateCreated}
              minDate={new Date()}
              onChange={(date) => setDateCreated(date)}
              className={cx("date-input-1")}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Ho ten khach hanh</label>
            <input
              list="custommer"
              name=""
              onChange={(e) => handleOnChange(e)}
              id=""
              style={{ marginLeft: "50px" }}
            />
            <datalist id="custommer">
              {listCustommer.map((c, i) => {
                return <option key={c.MaKH} value={c.TenKH} />;
              })}
            </datalist>
          </div>
          <div className={cx("input")}>
            <label htmlFor="">CCCD</label>
            <input
              type="text"
              readOnly
              value={khachhang?.CMND}
              name=""
              id=""
              style={{ marginLeft: "185px" }}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Dia chi</label>
            <input
              type="text"
              readOnly
              value={khachhang?.DiaChi}
              name=""
              id=""
              style={{ marginLeft: "175px" }}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">So dien thoai</label>
            <input
              readOnly
              type="text"
              value={khachhang?.Sdt}
              name=""
              id=""
              style={{ marginLeft: "114px" }}
            />
          </div>
          <div className={cx("input")}>
            <p className={cx("sum")}>TONG TIEN: {SumMoney()}</p>
          </div>
        </div>
        <div className={cx("form-right")}>
          <div className={cx("input")}>
            <label htmlFor="">Ten tour</label>
            <input
              list="tours"
              type="text"
              name=""
              id=""
              onChange={(e) => onChangeTour(e)}
              style={{ marginLeft: "180px" }}
            />
            <datalist id="tours">
              {listTour.map((t, i) => {
                return <option key={t.MaTour} value={t.TenTour}></option>;
              })}
            </datalist>
          </div>

          <div className={cx("input")}>
            <label htmlFor="">Ngay di</label>
            <DatePicker
              readOnly
              value={new Date(tour?.NgayDi).toLocaleDateString("en-US")}
              className={cx("date-input-1")}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Ngay ve</label>
            <DatePicker
              readOnly
              value={new Date(tour?.NgayVe).toLocaleDateString("en-US")}
              className={cx("date-input-1")}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Gia tour</label>
            <input
              value={tour?.GiaTour}
              type="text"
              name=""
              readOnly
              id=""
              style={{ marginLeft: "184px" }}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Người Lớn {">"} 14 Tuổi = 100% Vé</label>
            <input
              type="number"
              value={soLuong}
              onChange={(e) => {
                setSoLuong(e.target.value);
                SumMoney();
              }}
              name=""
              className={cx("input-quality")}
              id=""
              style={{ marginLeft: "40px", width: "100px" }}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Người Lớn {"5 - 10 "}Tuổi = 50% Vé</label>
            <input
              type="number"
              value={soLuong1}
              onChange={(e) => {
                setSoLuong1(e.target.value);
              }}
              name=""
              className={cx("input-quality")}
              id=""
              style={{ marginLeft: "37px", width: "100px" }}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Trẻ Em {"< 5"} Tuổi = Miễn Phí Vé </label>
            <input
              type="number"
              value={soLuong2}
              onChange={(e) => {
                setSoLuong2(e.target.value);
              }}
              name=""
              className={cx("input-quality")}
              id=""
              style={{ marginLeft: "45px", width: "100px" }}
            />
          </div>
        </div>
      </div>
      <div className={cx("button")}>
        <button className={cx("submit")} onClick={handleSubmit}>
          DUYET <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
        </button>
        <Link to="/phieu-dat-tour">
          <button className={cx("cancel")}>
            HUY <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
}
