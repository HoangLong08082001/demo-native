import React, { useEffect, useState } from "react";
import style from "./DetailTour.module.scss";
import classNames from "classnames/bind";
import HTMLReactParser from "html-react-parser";
import { Link, useLocation } from "react-router-dom";
const cx = classNames.bind(style);
export default function DetailTour() {
  const location = useLocation();
  const [tenTour, setTenTour] = useState("");
  const [diaDiemDi, setDiaDiemDi] = useState("");
  const [diaDiemDen, setDiaDiemDen] = useState("");
  const [ngayDi, setNgayDi] = useState("");
  const [ngayVe, setNgayVe] = useState("");
  const [phuongTien, setPhuongTien] = useState("");
  const [loaiTour, setLoaiTour] = useState("");
  const [khuVuc, setKhuVuc] = useState("");
  const [quyMo, setQuyMo] = useState("");
  const [giaTour, setGiaTour] = useState("");
  const [giamGia, setGiamGia] = useState("");
  const [hinhAnh, setHinhAnh1] = useState("");
  const [lichTrinh1, setLichTrinh1] = useState("");
  const [lichTrinh2, setLichTrinh2] = useState("");
  const [lichTrinh3, setLichTrinh3] = useState("");
  const [lichTrinh4, setLichTrinh4] = useState("");
  const [lichTrinh5, setLichTrinh5] = useState("");
  const [lichTrinh6, setLichTrinh6] = useState("");
  const [lichTrinh7, setLichTrinh7] = useState("");
  const getItemLocaion = () => {
    setTenTour(location.state.TenTour);
    setDiaDiemDen(location.state.DiaDiemDen);
    setDiaDiemDi(location.state.DiaDiemDi);
    setNgayDi(location.state.NgayDi);
    setNgayVe(location.state.NgayVe);
    setPhuongTien(location.state.PhuongTien);
    setLoaiTour(location.state.LoaiTour);
    setKhuVuc(location.state.vungMien);
    setQuyMo(location.state.QuyMo);
    setGiaTour(location.state.GiaTour);
    setGiamGia(location.state.GiamGia);
    setLichTrinh1(location.state.LichTrinh1);
    setLichTrinh2(location.state.LichTrinh2);
    setLichTrinh3(location.state.LichTrinh3);
    setLichTrinh4(location.state.LichTrinh4);
    setLichTrinh5(location.state.LichTrinh5);
    setLichTrinh6(location.state.LichTrinh6);
    setLichTrinh7(location.state.LichTrinh7);
    setHinhAnh1(location.state.HinhAnh);
  };
  const arrayTrip = new Array(
    lichTrinh1,
    lichTrinh2,
    lichTrinh3,
    lichTrinh4,
    lichTrinh5,
    lichTrinh6,
    lichTrinh7
  );
  useEffect(() => {
    getItemLocaion();
    console.log(location.state);
  }, []);
  let ngaydi = new Date(ngayDi).toLocaleDateString("en-US");
  
  let ngayve = new Date(ngayVe).toLocaleDateString("en-US");
  const base64String = btoa(
    new Uint8Array(hinhAnh).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return (
    <div className={cx("wrapper")}>
      <Link to="/tour" className={cx("text")}>
        <button className={cx("btn-cancel")}>TRO LAI</button>
      </Link>
      <p className={cx("title")}>THONG TIN Tour Da Nang</p>
      <div className={cx("form")}>
        <div className={cx("form-label")}>
          <label>TEN TOUR: </label>
          <label>DIA DIEM DI: </label>
          <label>DIA DIEM VE: </label>
          <label>NGAY DI: </label>
          <label>NGAY VE: </label>
          <label>PHUONG TIEN: </label>
          <label>LOAI TOUR: </label>
          <label>KHU VUC: </label>
          <label>QUY MO: </label>
          <label>GIA TOUR: </label>
          <label>GIAM GIA: </label>
        </div>
        <div className={cx("form-info")}>
          <label>{tenTour}</label>
          <label>{diaDiemDi}</label>
          <label>{diaDiemDen}</label>
          <label>{ngaydi}</label>
          <label>{ngayve}</label>
          <label>{phuongTien}</label>
          <label>{loaiTour}</label>
          <label>{khuVuc}</label>
          <label>{quyMo} nguoi</label>
          <label>{giaTour}</label>
          <label>{giamGia}</label>
        </div>
      </div>
      <p className={cx("img-title")}>DANH SACH HINH ANH</p>
      <div className={cx("list-img")}>
        <div
          className={cx("img")}
          style={{
            backgroundImage: `url(data:image/jpeg;base64,${base64String})`,
          }}
        ></div>
        <div className={cx("img")}></div>
        <div className={cx("img")}></div>
        <div className={cx("img")}></div>
        <div className={cx("img")}></div>
      </div>{" "}
      <p className={cx("img-title")}>DANH SACH LICH TRINH</p>
      {arrayTrip.map((trip, index) => {
        if (trip !== null) {
          return (
            <div className={cx("list-trip")}>
              <p className={cx("img-title")}> + Ngay {index + 1}</p>
              <p className={cx("trip")}>{HTMLReactParser(`${trip}`)}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
