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
  const [hinhAnh, setHinhAnh1] = useState("");
  const [hinhAnh1, setHinhAnh2] = useState("");
  const [hinhAnh2, setHinhAnh3] = useState("");
  const [hinhAnh3, setHinhAnh4] = useState("");
  const [hinhAnh4, setHinhAnh5] = useState("");
  const [lichTrinh1, setLichTrinh1] = useState("");
  const [lichTrinh2, setLichTrinh2] = useState("");
  const [lichTrinh3, setLichTrinh3] = useState("");
  const [lichTrinh4, setLichTrinh4] = useState("");
  const [lichTrinh5, setLichTrinh5] = useState("");
  const [lichTrinh6, setLichTrinh6] = useState("");
  const [lichTrinh7, setLichTrinh7] = useState("");
  const [giamGia, setGiamGia] = useState(0);
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
    setHinhAnh1(location.state.HinhAnh.data);
    setHinhAnh2(location.state.HinhAnh2.data);
    setHinhAnh3(location.state.HinhAnh3.data);
    setHinhAnh4(location.state.HinhAnh4.data);
    setHinhAnh5(location.state.HinhAnh5.data);
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
  const base64String1 = btoa(
    new Uint8Array(hinhAnh1).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String2 = btoa(
    new Uint8Array(hinhAnh2).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String3 = btoa(
    new Uint8Array(hinhAnh3).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String4 = btoa(
    new Uint8Array(hinhAnh4).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return (
    <div className={cx("wrapper")}>
      <Link to="/tour" className={cx("text")}>
        <button className={cx("btn-cancel")}>TRỞ LẠI</button>
      </Link>
      <p className={cx("title")}>THÔNG TIN {tenTour}</p>
      <div className={cx("form")}>
        <div className={cx("form-label")}>
          <label>TÊN TOUR: </label>
          <label>ĐỊA ĐIỂM ĐI: </label>
          <label>ĐỊA ĐIỂM ĐẾN: </label>
          <label>NGÀY ĐI: </label>
          <label>NGÀY VỀ: </label>
          <label>PHƯƠNG TIỆN: </label>
          <label>LOẠI TOUR: </label>
          <label>KHU VỰC: </label>
          <label>QUY MÔ: </label>
          <label>GIÁ TOUR: </label>
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
          <label>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(giaTour)}
          </label>
        </div>
      </div>
      <p className={cx("img-title")}>DANH SÁCH HÌNH ẢNH</p>
      <div className={cx("list-img")}>
        <img
          className={cx("img")}
          src={`data:image/jpeg;base64,${base64String}`}
        />
        <img
          className={cx("img")}
          src={`data:image/jpeg;base64,${base64String1}`}
        />
        <img
          className={cx("img")}
          src={`data:image/jpeg;base64,${base64String2}`}
        />
        <img
          className={cx("img")}
          src={`data:image/jpeg;base64,${base64String3}`}
        />
        <img
          className={cx("img")}
          src={`data:image/jpeg;base64,${base64String4}`}
        />
      </div>{" "}
      <p className={cx("img-title")}>DANH DÁCH LỊCH TRÌNH</p>
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
