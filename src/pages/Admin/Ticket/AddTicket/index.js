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
  let Price1 = 0;
  let Price2 = 0;
  let [sum, setSum] = useState(0);
  const fetchCustommer = async () => {
    await axios.get("/custommer/list-customer").then((res) => {
      if(res && res.data === "ok")
      {
        setListCustommer(res.list);
      }
    });
  };
  const fetchTour = async () => {
    await axios.get("/tour/gettour-with-giamgia").then((res) => {
      setListTour(res.data);
      console.log(res.data);
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

  const checkValidate = () => {
    if (!tour?.TenTour) {
      toast.warning("Vui long chon tour");
      return false;
    }
    if (!khachhang?.TenKH) {
      toast.warning("Vui long chon khach hang");
      return false;
    }
    if (soLuong === 0) {
      toast.warning("Vui long chon so luong khach hang");
      return false;
    }
    return true;
  };
  console.log(user.accout.id !== undefined && user.accout.id);
  const handleSubmit = async () => {
    let idNV = user.accout.id !== undefined && user.accout.id;
    let idKH = khachhang?.MaKH;
    let idTour = tour?.MaTour;
    let hinhThucThanhToan = "Tiền mặt";
    let date = new Date(dateCreated).toLocaleDateString("sv-SE");
    let validate = checkValidate();
    if (validate === true) {
      await axios
        .post("/ticket/add-ticket", {
          idNV,
          idKH,
          idTour,
          sum,
          date,
          soLuong,
          soLuong1,
          soLuong2,
          hinhThucThanhToan,
        })
        .then((res) => {
          if (res && res.message === "success") {
            toast.success(user.accout.email + "Đã duyệt phiếu");
          }
        });
    }
  };

  useEffect(() => {
    fetchCustommer();
    fetchTour();
  }, []);
  const handleupbe = () => {
    if (!tour?.TenTour) {
      toast.warning("Vui lòng chọn tour");
      return false;
    }
    setSoLuong2(soLuong2 + 1);
    return true;
  };
  const handledownbe = () => {
    if (soLuong2 === 0) {
    } else {
      setSoLuong2(soLuong2 - 1);
    }
  };
  const handleuppersonmin = () => {
    if (!tour?.TenTour) {
      toast.warning("Vui lòng chọn tour");
      return false;
    }
    setSoLuong1(soLuong1 + 1);
    setSum(
      (sum +=
        tour?.GiaTour / 2 -
        ((tour?.GiaTour / 2) * (+tour?.mucgiamgia + +tour?.mucgiamgiathem)) /
          100)
    );
    return true;
  };
  const handledownpersonmin = () => {
    if (soLuong1 === 0) {
    } else {
      setSoLuong1(soLuong1 - 1);
      setSum(
        (sum -=
          tour?.GiaTour / 2 -
          ((tour?.GiaTour / 2) * (+tour?.mucgiamgia + +tour?.mucgiamgiathem)) /
            100)
      );
    }
  };
  const handleupperson = () => {
    if (!tour?.TenTour) {
      toast.warning("Vui lòng chọn tour");
      return false;
    }
    setSoLuong(soLuong + 1);
    setSum(
      (sum +=
        tour?.GiaTour -
        (tour?.GiaTour * (+tour?.mucgiamgia + +tour?.mucgiamgiathem)) / 100)
    );
    return true;
  };
  const handledownperson = () => {
    if (soLuong === 0) {
    } else {
      setSoLuong(soLuong - 1);
      setSum(
        (sum -=
          tour?.GiaTour -
          (tour?.GiaTour * (+tour?.mucgiamgia + +tour?.mucgiamgiathem)) / 100)
      );
    }
  };
  Price1 = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(tour?.GiaTour);
  Price2 = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(tour?.GiaTour / 2);
  const tongtien = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(sum);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>THÔNG TIN PHIẾU ĐẶT TOUR</p>
      <div className={cx("form")}>
        <div className={cx("form-left")}>
          <div className={cx("input")}>
            <label htmlFor="">Ngày tạo phiếu</label>
            <DatePicker
              placeholderText="Chọn ngày tạo phiếu"
              dateFormat="yyyy-MM-dd"
              selected={dateCreated}
              minDate={new Date()}
              onChange={(date) => setDateCreated(date)}
              className={cx("date-input-1")}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Họ tên khách hàng</label>
            <input
              placeholder="Chọn khách hàng"
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
            <label htmlFor="">Địa chỉ</label>
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
            <label htmlFor="">Số điện thoại</label>
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
            <p className={cx("sum")}>TỔNG TIỀN: {tongtien}</p>
          </div>
        </div>
        <div className={cx("form-right")}>
          <div className={cx("input")}>
            <label htmlFor="">Tên tour</label>
            <input
              placeholder="Chọn tour"
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
            <label htmlFor="">Ngày đi</label>
            <DatePicker
              readOnly
              value={new Date(tour?.NgayDi).toLocaleDateString("en-US")}
              className={cx("date-input-1")}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Ngày về</label>
            <DatePicker
              readOnly
              value={new Date(tour?.NgayVe).toLocaleDateString("en-US")}
              className={cx("date-input-1")}
            />
          </div>
          <div className={cx("input")}>
            <label htmlFor="">Giá tour</label>
            <input
              value={new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(tour?.GiaTour)}
              type="text"
              name=""
              readOnly
              id=""
              style={{ marginLeft: "184px" }}
            />
          </div>
          <br />
          {Price1 !== 0 && (
            <span style={{ color: "red", marginLeft: "10px" }}>{Price1}</span>
          )}
          <div className={cx("input")}>
            <label htmlFor="">Người Lớn {">"} 14 Tuổi = 100% Vé</label>
            <div
              style={{ marginLeft: "43px" }}
              className={cx("increase-descrease")}
            >
              <button className={cx("descrease")} onClick={handledownperson}>
                -
              </button>
              <p>{soLuong}</p>
              <button className={cx("increase")} onClick={handleupperson}>
                +
              </button>
            </div>
            {tour?.TenTour && (
              <p
                style={{
                  marginLeft: "10px",
                  color: "red",
                  fontWeight: "900",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                -{+tour?.mucgiamgia + +tour?.mucgiamgiathem}%
              </p>
            )}
          </div>
          {Price2 !== 0 && (
            <span style={{ color: "red", marginLeft: "10px" }}>{Price2}</span>
          )}
          <div className={cx("input")}>
            <label htmlFor="">Người Lớn {"5 - 10 "}Tuổi = 50% Vé</label>
            <div className={cx("increase-descrease")}>
              <button className={cx("descrease")} onClick={handledownpersonmin}>
                -
              </button>
              <p>{soLuong1}</p>
              <button className={cx("increase")} onClick={handleuppersonmin}>
                +
              </button>
            </div>
            {tour?.TenTour && (
              <p
                style={{
                  marginLeft: "10px",
                  color: "red",
                  fontWeight: "900",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                -{+tour?.mucgiamgia + +tour?.mucgiamgiathem}%
              </p>
            )}
          </div>

          <div className={cx("input")}>
            <label htmlFor="">Trẻ Em {"< 5"} Tuổi = Miễn Phí Vé </label>
            <div
              style={{ marginLeft: "47px" }}
              className={cx("increase-descrease")}
            >
              <button className={cx("descrease")} onClick={handledownbe}>
                -
              </button>
              <p>{soLuong2}</p>
              <button className={cx("increase")} onClick={handleupbe}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("button")}>
        <button className={cx("submit")} onClick={handleSubmit}>
          DUYỆT <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
        </button>
        <Link to="/phieu-dat-tour">
          <button className={cx("cancel")}>
            HUỶ <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
}
