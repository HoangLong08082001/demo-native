import classname from "classnames/bind";
import img4 from "../../../assets/images/slider/img5.jpg";
import styles from "./Panner.module.scss";
const cx = classname.bind(styles);
function Panner() {
  return (
    <div
      className={cx("container")}
      style={{ backgroundImage: `url(${img4})` }}
    ></div>
  );
}

export default Panner;
