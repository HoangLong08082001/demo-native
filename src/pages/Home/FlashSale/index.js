import Button from "../../../components/Button";
import Slider from "./Slider";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import style from "./FlashSale.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
function FlashSale() {
  return (
    <div className={cx("wrapper")}>
      <div>
        <h2>
          FLASH <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>ALES
        </h2>
      </div>
      <Slider />
    </div>
  );
}

export default FlashSale;
