import classname from "classnames/bind";
import Button from "../../../components/Button";
import styles from "./Hot.module.scss";
import ProductBox from "../../../components/Product";
import img1 from "../../../assets/images/slider/img1.png";
import img2 from "../../../assets/images/slider/img2.png";
import img3 from "../../../assets/images/slider/img3.png";
import img4 from "../../../assets/images/slider/img4.png";
import img5 from "../../../assets/images/slider/img5.jpg";
const cx = classname.bind(styles);
function HotLocation() {
  return (
    <div className={cx("wrapper")}>
      <h2>Địa Điểm Yêu Thích</h2>

      <div className={cx("container-box")}>
        <div
          className={cx("container")}
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div
          className={cx("container")}
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
        <div
          className={cx("container")}
          style={{ backgroundImage: `url(${img3})` }}
        ></div>
        <div
          className={cx("container")}
          style={{ backgroundImage: `url(${img4})` }}
        ></div>
        <div
          className={cx("container")}
          style={{ backgroundImage: `url(${img5})` }}
        ></div>
        <div
          className={cx("container")}
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
        <div
          className={cx("container")}
          style={{ backgroundImage: `url(${img3})` }}
        ></div>
        <div
          className={cx("container")}
          style={{ backgroundImage: `url(${img4})` }}
        ></div>
      </div>
    </div>
  );
}

export default HotLocation;
