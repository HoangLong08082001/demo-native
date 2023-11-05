import React from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import img1 from "../../../assets/images/PhuQuoc/af035f3bb11c6d9eca3de54d5123e07a.jpg";
import imgLOGO from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEarth,
  faPerson,
  faPlane,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
export default function About({
  matour,
  tentour,
  diadiemdi,
  diadiemden,
  loaitour,
  quymo,
  phuongtien,
}) {
  return (
    <div className={cx("wrapper")}>
      <hr></hr>
      <div className={cx("wrapper-dow")}>
        <div className={cx("wrapper-dow-1")}>
          <p>{tentour}</p>
        </div>
        <div className={cx("wrapper-dow-2")}>
          <div>
            <img src={imgLOGO}></img>
          </div>
          <div>
            <span>Đánh Giá</span>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            <span>TOT TOUR</span>
            <br></br>
            <span>Nhà cung cấp</span>
          </div>
        </div>
        <div className={cx("wrapper-menu")}>
          <div>
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <span>Thời Lượng</span>
              <br></br>
              <span>5 Ngày</span>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faEarth} />
            </div>
            <div>
              <span>Địa Điểm Đi</span>
              <br></br>
              <span>{diadiemdi}</span>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faEarth} />
            </div>
            <div>
              <span>Địa Điểm Đến</span>
              <br></br>
              <span>{diadiemden}</span>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faChrome} />
            </div>
            <div>
              <span>Loại Tour</span>
              <br></br>
              <span>{loaitour}</span>
            </div>
          </div>
        </div>
        <div className={cx("wrapper-menu")}>
          <div>
            <div>
              <FontAwesomeIcon icon={faPerson} />
            </div>
            <div>
              <span>Quy Mô</span>
              <br></br>
              <span>{quymo} Người</span>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faPlane} />
            </div>
            <div>
              <span>Phương Tiện Chính</span>
              <br></br>
              <span>{phuongtien}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
