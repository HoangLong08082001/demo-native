import Button from "../../../components/Button";
import Slider from "./Slider";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import style from "./FlashSale.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
const cx = classNames.bind(style);
function FlashSale() {
  const [timerDays,setTimerDays]=useState('00')
  const [timerHous,setTimerHous]=useState('00')
  const [timerMinutes,setTimerMinutes]=useState('00')
  const [timerSeconds,setTimerSeconds]=useState('00')
  let interval=useRef();
  const startTimer=()=>{
    const coutdownsDate=new Date('November 17,2024 00:00:00  ').getTime();
    interval=setInterval(() => {
      const now= new Date().getTime();
      const distance=coutdownsDate - now;
      const days=Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours=Math.floor(distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
      const minutes=Math.floor(distance % (1000 * 60 * 60 )/(1000 * 60));
      const seconds=Math.floor((distance % (1000 * 60  ))/1000);
      if(distance <0 )
      {
        clearInterval(interval.current)
      }
      else{
        setTimerDays(days)
        setTimerHous(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000);
  }
  useEffect(()=>{
    startTimer();
    return(
      clearInterval(interval.current)
    )
  },)
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-box")}>
        <h2>
          FLASH <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>ALES
        </h2>
        <div className={cx("wrapper-box")} >
          <div className={cx("wrapper-date")}>
              <div><span>{timerDays}</span></div>
              <div className={cx("wrapper-box-time")}>Ngày</div>
          </div>
          <div className={cx("wrapper-date-distance")}>:</div>
          <div className={cx("wrapper-date")}>
              <span>{timerHous}</span>
              <div className={cx("wrapper-box-time")}>Giờ</div>
          </div>
          <div className={cx("wrapper-date-distance")}>:</div>
          <div className={cx("wrapper-date")}>
              <span>{timerMinutes}</span>
              <div className={cx("wrapper-box-time")}>Phút</div>
          </div>
          <div className={cx("wrapper-date-distance")}>:</div>
          <div className={cx("wrapper-date")}>
              <span>{timerSeconds}</span>
              <div className={cx("wrapper-box-time")}>Giây</div>
          </div>
         
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default FlashSale;
