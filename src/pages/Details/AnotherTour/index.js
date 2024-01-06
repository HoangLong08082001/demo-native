import React, { useEffect, useState } from "react";
import styles from "./anotherTour.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import Slider from "../../Home/FlashSale/Slider"
const cx = classNames.bind(styles);
export default function AnotherTour() {
  const [data, setdata] = useState([]);
  const fetchTourByVoucher = async () => {
    await axios.get("/tour/alltour").then((response) => {
      setdata(response.data);
    });
  };
  useEffect(() => {
    fetchTourByVoucher();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("wrapper-p")}>Các Tour Liên Quan</p>
      <div className={cx("line")}></div>
      
        <Slider data={data}/>
      
    </div>
  );
}
