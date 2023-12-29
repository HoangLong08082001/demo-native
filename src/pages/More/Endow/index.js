import React, { useEffect, useState } from "react";
import styles from "./Endow.module.scss";
import classNames from "classnames/bind";
import Endows from "./Endows";
import Carousel from "react-multi-carousel";
import axios from "../../../setup-axios/axios";
import "react-multi-carousel/lib/styles.css";

const cx = classNames.bind(styles);
export default function Endow() {
  const [listVoucher, setListVoucher] = useState([]);
  const fetchVoucherHere = async () => {
    await axios.get("/tour/get-more-voucher").then((res) => {
      if (res && res.message === "success") {
        setListVoucher(res.data);
        console.log(res.data);
      }
    });
  };
  useEffect(()=>{
    fetchVoucherHere();
  },[])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={cx("wrapper")}>
      <p>Các ưu đãi khác</p>
      <div className={cx("line")}></div>
      <div className={cx("list-endow")}>
        <Endows />
        <Endows />
        <Endows />
        <Endows />
      </div>
    </div>
  );
}
