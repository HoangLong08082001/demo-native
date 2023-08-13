import React from "react";
import styles from "./ImageDetail.module.scss";
import classNames from "classnames/bind";
import pq1 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq1.jpeg";
import pq2 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq2.png";
import pq3 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq3.png";
import pq4 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq4.png";
import pq5 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq5.jpeg";
const cx = classNames.bind(styles);
export default function ImageDetail() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left-image")}>
        <img src={pq2} alt="loi" />
        <div className={cx("title-tour")}>
          <p>Tour Phu Quoc: Kham pha vung dao vung cuoi dat nuoc</p>
        </div>
      </div>
      <div className={cx("right-image")}>
        <div className={cx("up-image")}>
          <div className={cx("first-img-up")}>
            <img src={pq1} alt="loi" />
          </div>
          <div className={cx("second-img-up")}>
            <img src={pq3} alt="loi" />
          </div>
        </div>
        <div className={cx("down-image")}>
          <div className={cx("first-img-down")}>
            <img src={pq4} alt="loi" />
          </div>
          <div className={cx("second-img-down")}>
            <img src={pq5} alt="loi" />
          </div>
        </div>
      </div>
    </div>
  );
}
