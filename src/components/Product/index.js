import classname from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import img1 from "../../assets/images/slider/img1.png";
import styles from "./Product.module.scss";
import Button from "../Button";
import dayjs from "dayjs";
const cx = classname.bind(styles);

function ProductBox({ margin, container, margintop, Name, NgayDi, img, id }) {
  const styles = cx({ margin, container, margintop });
  const base64String = btoa(String.fromCharCode(...new Uint8Array(img)));
  return (
    <Button underline to={"/details/" + id}>
      <div className={styles}>
        <div
          className={cx("container-img")}
          style={{
            backgroundImage: `url(data:image/png;base64,${base64String})`,
          }}
        >
          <div className={cx("sale-off")}>
            <p>15%</p>
          </div>
        </div>
        <div className={cx("container-date")}>3N/2D</div>
        <div className={cx("container-content")}>{Name}</div>
        <div className={cx("container-star")}>
          <FontAwesomeIcon style={{ color: "#e5cf08" }} icon={faStar} />
          <FontAwesomeIcon style={{ color: "#e5cf08" }} icon={faStar} />
          <FontAwesomeIcon style={{ color: "#e5cf08" }} icon={faStar} />
          <FontAwesomeIcon style={{ color: "black" }} icon={faStar} />
          <FontAwesomeIcon style={{ color: "black" }} icon={faStar} />
        </div>
        <div className={cx("container-discount")}>
          <span>{NgayDi}</span>
          <span>
            <strike>5.200.000</strike>
          </span>
        </div>
        <div className={cx("container-price")}>4.200.000</div>
      </div>
    </Button>
  );
}

export default ProductBox;
