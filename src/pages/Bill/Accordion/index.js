import React, { useState } from "react";
import style from "./Accordion.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../setup-axios/axios"
import dateFormat from 'dayjs'
const cx = classNames.bind(style);
export default function Accordion(props) {
  const [show, setShow] = useState(null);
  const [htmlContent, setHtmlContent] = useState('');
  const [choose, setChoose] = useState(null);
  const [checked, setChecked] = useState(null);
  const createMarkup = () => {
    return { __html: htmlContent };
  };
  const toogle = (index) => {
    if (show === index) {
      return setShow(null);
    }
    setShow(index);
  };

 
  
  const check = (index) => {
    if (checked === index) {
      props.callBackParent(null);
      return setChecked(null);
    }
    setChecked(index);
    props.callBackParent(index);
  };
  
  const data = [
    {
      title: "Thanh toán bằng tiền mặt tại văn phòng TOT-Travel",
      content:
        "Quý khách vui lòng đến các văn phòng TOT-Travel để thanh toán và nhận vé.",
    },
    {
      title: "Thanh toán bằng VNPAY",
      content:
        "Sau khi đặt vé và thanh toán thành công, TOT-Travel sẽ gửi vé điện tử của Quý khách qua email.",
    },
   
  ];
  return (
    <div className={cx("wrapper")}>
      <div dangerouslySetInnerHTML={createMarkup()}>
          
      </div>
    <div>
      
      
    </div>
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
