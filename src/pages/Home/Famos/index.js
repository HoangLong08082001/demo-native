import Button from "../../../components/Button";
import Slider from "../FlashSale/Slider";
import style from "./Famos.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
function Famos() {
  return (
    <div className={cx("wrapper")}>
      <h2>Đang Thịnh Hành</h2>
      <div style={{ marginBottom: 20 }}>
        <Button buttonproduct>Đà Nẵng</Button>
        <Button buttonproduct>Đà Nẵng</Button>
        <Button buttonproduct>Đà Nẵng</Button>
        <Button buttonproduct>Đà Nẵng</Button>
        <Button buttonproduct>Đà Nẵng</Button>
      </div>
      <Slider />
    </div>
  );
}

export default Famos;
