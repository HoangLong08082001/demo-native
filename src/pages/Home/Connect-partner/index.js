import classname from "classnames/bind";
import Button from "../../../components/Button";
import styles from "./Connect.module.scss";
import ProductBox from "../../../components/Product";
import img1 from "../../../assets/images/slider/img1.png";
import img2 from "../../../assets/images/slider/img2.png";
import img3 from "../../../assets/images/slider/img3.png";
import img4 from "../../../assets/images/slider/img4.png";
import img5 from "../../../assets/images/slider/img5.jpg";
import muongthanh from "../../../assets/images/hotel/muong-thanh.png";
import vinpearl from "../../../assets/images/hotel/vinpearl.png";
import silverland from "../../../assets/images/hotel/silverland.png";
import flc from "../../../assets/images/hotel/flc.png";
import anantara from "../../../assets/images/hotel/anantara.png";
import melia from "../../../assets/images/hotel/melia.png";
import laihoangcau from "../../../assets/images/touristCar/lai-hoan-cau-logo.png";
import phuongtrang from "../../../assets/images/touristCar/phuong-trang.png";
import thanhbuoi from "../../../assets/images/touristCar/thanh-buoi.png";
import hoanglong from "../../../assets/images/touristCar/hoang-long.png";
import saoviet from "../../../assets/images/touristCar/sao-viet.png";
import thuanthao from "../../../assets/images/touristCar/thuan-thao.png";
import { useState } from "react";
const cx = classname.bind(styles);
function Connect() {
  const [tab, setTab] = useState(1);
  const hotel = [
    {
      id: 1,
      name: "MƯỜNG THANH",
      thumbnail: muongthanh,
    },
    {
      id: 2,
      name: "VINPEARL",
      thumbnail: vinpearl,
    },
    {
      id: 3,
      name: "SILVERLAND",
      thumbnail: silverland,
    },
    {
      id: 4,
      name: "FLC",
      thumbnail: flc,
    },
    {
      id: 5,
      name: "ANANTARA",
      thumbnail: anantara,
    },
    {
      id: 6,
      name: "MELIA",
      thumbnail: melia,
    },
  ];
  const touristCar = [
    {
      id: 1,
      name: "LAI HOÀN CẦU",
      thumbnail: laihoangcau,
    },
    {
      id: 2,
      name: "PHƯƠNG TRANG",
      thumbnail: phuongtrang,
    },
    {
      id: 3,
      name: "THÀNH BƯỞI",
      thumbnail: thanhbuoi,
    },
    {
      id: 4,
      name: "HOÀNG LONG",
      thumbnail: hoanglong,
    },
    {
      id: 5,
      name: "THUẬN THẢO",
      thumbnail: thuanthao,
    },
    {
      id: 6,
      name: "SAO VIỆT",
      thumbnail: saoviet,
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <h2>Đối Tác Hàng Đầu</h2>
      <div>
        <Button onClick={() => setTab(1)} buttonproduct>
          Khách Sạn
        </Button>
        <Button onClick={() => setTab(2)} buttonproduct>
          Xe Du Lịch
        </Button>
      </div>
      <div className={cx("container-box")}>
        {+tab===1 &&<div className={cx("container-fluid")}>
          {hotel.map((h, i) => {
            return (
              <div key={i} className={cx("container")}>
                <img src={h.thumbnail} alt="loi" />
              </div>
            );
          })}
        </div>}
        {+tab===2 &&<div className={cx("container-fluid")}>
          {touristCar.map((h, i) => {
            return (
              <div key={i} className={cx("container")}>
                <img src={h.thumbnail} alt="loi" />
              </div>
            );
          })}
        </div>}
      </div>
    </div>
  );
}

export default Connect;
