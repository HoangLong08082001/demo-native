import { useEffect, useState } from "react";
import classname from "classnames/bind";

import styles from "./Slider.module.scss";
import img1 from "../../../../../travel-ui/src/assets/images/slider/img1.png";
import img2 from "../../../../../travel-ui/src/assets/images/slider/img2.png";
import img3 from "../../../../../travel-ui/src/assets/images/slider/img3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
const cx = classname.bind(styles);
const data = [img1, img2, img3];
function Slider() {
  const [index, setindex] = useState(0);

  useEffect(() => {
    const lastindex = data.length - 1;
    if (index < 0) {
      setindex(lastindex);
    }
    if (index > lastindex) {
      setindex(0);
    }
  }, [index]);
  useEffect(() => {
    const time = setInterval(() => {
      setindex(index + 1);
    }, 7000);
    return () => {
      clearInterval(time);
    };
  }, [index]);
  const preonclick = () => {
    setindex(index - 1);
  };
  const nextonclick = () => {
    setindex(index + 1);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left-icon")} onClick={preonclick}>
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </div>
      {data.map((item, zindex) => {
        return (
          <img
            key={zindex}
            alt="Loi "
            className={cx("wrapper-img", zindex === index ? "active" : " ")}
            src={item}
          ></img>
        );
      })}
      <div className={cx("title-about")}>
        <p>Tour Du Lịch</p>
        
        <Button watchadd  to="/more-summer">Xem Thêm</Button>
      </div>
      <div className={cx("right-icon")} onClick={nextonclick}>
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Slider;
