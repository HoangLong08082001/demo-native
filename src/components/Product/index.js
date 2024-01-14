import classname from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faStar } from "@fortawesome/free-regular-svg-icons";
import styles from "./Product.module.scss";
import Button from "../Button";
import slugify from "react-slugify";
import axios from "../../setup-axios/axios";
import { useEffect, useState } from "react";
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
  MaTour,
  percent,
}) {
  const [arraycomment, setarraycomment] = useState([]);
 
  useEffect(() => {
    axios
      .post("/tour/getcomment", {
        MaTour: id,
      })
      .then((response) => {
        setarraycomment(response.data);
        if (response.data === "success") {
        }
      });
  }, []);
  const sum = arraycomment.reduce(
    (accumulator, currentValue) => accumulator + currentValue.DanhGia,
    0
  );

  if (sum > 0) {
    var star = Math.round(sum / arraycomment.length);
    var staflase = 5 - star;
  } else {
    var staflase = 5;
  }
  var arraystar = [];

  if (star > 0) {
    for (let i = 0; i < star; i++) {
      arraystar.push(1);
    }
    if (staflase > 0) {
      for (let i = 0; i < staflase; i++) {
        arraystar.push(2);
      }
    }
  } else if (staflase === 5) {
    for (let i = 0; i < staflase; i++) {
      arraystar.push(2);
    }
  }

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
          {percent > 0 ? (
            <div className={cx("sale-off")}>
              <p>{percent}%</p>
            </div>
          ) :(<div className={cx("sale-off-2")}>
          <p>{0}%</p>
        </div>) }
        </div>
        <div className={cx("container-date")}>3N/2D</div>
        <div className={cx("container-content")}>{Name}</div>
        <div className={cx("container-star")}>
          {arraystar.map((comment, index) => {
            if (comment === 1) {
              return (
                <FontAwesomeIcon
                  key={index}
                  style={{ color: "#e5cf08" }}
                  icon={faStar}
                />
              );
            } else {
              return (
                <FontAwesomeIcon
                  key={index}
                  style={{ color: "black" }}
                  icon={faStar}
                />
              );
            }
          })}
        </div>
        <div className={cx("container-discount")}>
          <span>{DiaDiemDen}</span>
         
        </div>
        <div className={cx("container-price")}>{price}</div>
      </div>
    </Button>
  );
}

export default ProductBox;
