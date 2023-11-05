import classname from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import img1 from "../../assets/images/slider/img1.png";
import styles from "./Product.module.scss";
import Button from "../Button";
import dayjs from "dayjs";
import slugify from "react-slugify";

const cx = classname.bind(styles);

function ProductBox({
  margin,
  container,
  margintop,
  Name,
  DiaDiemDen,
  price,
  img,
  id,
}) {
  const styles = cx({ margin, container, margintop });
  price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  const base64String = btoa(
    new Uint8Array(img).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return (
    
    <Button underline to={"/details/" + slugify(Name) + "/" + id}>
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
          <span>{DiaDiemDen}</span>
          <span>
            <strike>5.200.000</strike>
          </span>
        </div>
        <div className={cx("container-price")}>{price}</div>
      </div>
    </Button>
  );
}

export default ProductBox;
