import React, { useState } from "react";
import style from "./Accordion.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
export default function Accordion() {
  const [show, setShow] = useState(null);
  const toogle = (index) => {
    if (show === index) {
      return setShow(null);
    }
    setShow(index);
  };

  const [choose, setChoose] = useState(null);
  const handleClick = (index) => {
    if (choose === index) {
      return setChoose(null);
    }
    setChoose(index);
  };
  const [checked, setChecked] = useState(null);
  const check = (index) => {
    if (checked === index) {
      return setChecked(null);
    }
    setChecked(index);
  };
  const data = [
    {
      title: "Thanh toán chuyển khoản qua ngân hàng",
      content:
        "Sau khi đặt vé thành công và chuyển khoản qua tài khoản TOT-Travel, nhân viên sẽ gửi liên hệ Quý khách qua email/ DT.",
    },
    {
      title: "Thanh toán bằng tiền mặt tại văn phòng TOT-Travel",
      content:
        "Quý khách vui lòng đến các văn phòng TOT-Travel để thanh toán và nhận vé.",
    },
    {
      title: "Thanh toán bằng Zalo Pay",
      content:
        "Sau khi đặt vé và thanh toán thành công, TOT-Travel sẽ gửi vé điện tử của Quý khách qua email.",
    },
    {
      title: "Thanh toán bằng ví điện tử Momo",
      content:
        "Hạn mức tối đa là 20.000.000 VND.Sau khi đặt vé và thanh toán thành công, TOT-Travel sẽ gửi vé điện tử của Quý khách qua email.",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("accordion")}>
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => check(index)}
            className={checked === index ? cx("item-active") : cx("item")}
          >
            <div className={cx("title")}>
              <p>{item.title}</p>
              {checked === index ? (
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={faCheck}
                ></FontAwesomeIcon>
              ) : (
                <></>
              )}
              <p onClick={() => toogle(index)}>{show === index ? "-" : "+"}</p>
            </div>
            <div
              className={show === index ? cx("content-show") : cx("content")}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
