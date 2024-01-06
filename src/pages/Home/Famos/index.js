import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Slider from "../FlashSale/Slider";
import style from "./Famos.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
const cx = classNames.bind(style);
function Famos() {
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
      <h2>Đang Thịnh Hành</h2>
      {/* <div style={{ marginBottom: 20 }}>
        <Button buttonproduct>Đà Nẵng</Button>
        <Button buttonproduct>Đà Nẵng</Button>
        <Button buttonproduct>Đà Nẵng</Button>
        <Button buttonproduct>Đà Nẵng</Button>
        <Button buttonproduct>Đà Nẵng</Button>
      </div> */}
      <Slider data={data} />
    </div>
  );
}

export default Famos;
