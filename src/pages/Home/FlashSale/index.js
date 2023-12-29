import Button from "../../../components/Button";
import Slider from "./Slider";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import style from "./FlashSale.module.scss";
import axios from "../../../setup-axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import dateFormat from "dayjs";
const cx = classNames.bind(style);
function FlashSale() {
  // const today = new Date().toLocaleDateString("sv-SE");
  // const [timerDays, setTimerDays] = useState("00");
  // const [timerHous, setTimerHous] = useState("00");
  // const [timerMinutes, setTimerMinutes] = useState("00");
  // const [timerSeconds, setTimerSeconds] = useState("00");
  // const [timeNow, setTimeNow] = useState("");
  // const [timeTarget, setTimeTarget] = useState("");
  // const setDate = (day)=>{
  //   day = new Date().toLocaleDateString("sv-SE");
  //   return day;
  // }
  // const fetchTourByDiscount = () => {
  //   axios.get("/tour/get-tour-by-voucher").then((res) => {
  //     console.log(res.data);
  //     setTimeNow(res.data[0].NgayDito);
  //     setTimeTarget(res.data[0].NgayVe);
  //   });
  // };
  // let interval = useRef();
  // const startTimer = () => {
  //   const coutdownsDate = new Date("November 17,2024 00:00:00  ").getTime();
  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = coutdownsDate - now;
  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     if (distance < 0) {
  //       clearInterval(interval.current);
  //     } else {
  //       setTimerDays(days);
  //       setTimerHous(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   }, 1000);
  // };
  // useEffect(() => {
  //   fetchTourByDiscount();
  //   startTimer();
  //   return clearInterval(interval.current);
  // }, []);
  const [timeNow, setTimeNow] = useState("");
  const [name, setName] = useState("");
  const [timeTarget, setTimeTarget] = useState("");
  const [list, setList] = useState([]);
  const setDate = (day) => {
    return new Date(day);
  };

  // const getDay = () => {
  //   let today = new Date();
  //   for (let i = 0; i < list.length - 1; i++) {
  //     if (
  //       setDate(list[i].thoigianbatdau) === setDate(today) &&
  //       setDate(list[i].thoigiantoi) >= setDate(today)
  //     ) {
  //       console.log(list[i]);
  //     }
  //   }
  // };
  // getDay();
  const [tourByVoucher, setTourByVoucher] = useState([]);
  const [timeStart, setTimeStart] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    axios.get("/tour/get-tour-withday").then((res) => {
      setTimeTarget(res.data[0].toi);
      setName(res.data[0].ten_dotgiamgia);
      // setList(res.data);
    });
  }, []);
  useEffect(() => {
    // Set the target date to tomorrow
    const datenew = dateFormat(timeTarget).format("YYYY/MM/DD");
    const targetDate = new Date(datenew);

    const updateCountdown = () => {
      // Get the current date and time
      const now = new Date().getTime();
      // Calculate the distance between now and the target date
      const distance = targetDate - now;
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state with the new values
      setTimeLeft({ days, hours, minutes, seconds });
    };
    // Update the countdown every 1 second
    const interval = setInterval(updateCountdown, 1000);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [timeTarget]); // The empty dependency array ensures that useEffect runs only once on mount
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-box")}>
        <h2>
          {name}
          {/* FLASH <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>ALES */}
        </h2>
        <div className={cx("wrapper-box")}>
          <div className={cx("wrapper-date")}>
            <div>
              <span>{timeLeft.days}</span>
            </div>
            <div className={cx("wrapper-box-time")}>Ngày</div>
          </div>
          <div className={cx("wrapper-date-distance")}>:</div>
          <div className={cx("wrapper-date")}>
            <span>{timeLeft.hours}</span>
            <div className={cx("wrapper-box-time")}>Giờ</div>
          </div>
          <div className={cx("wrapper-date-distance")}>:</div>
          <div className={cx("wrapper-date")}>
            <span>{timeLeft.minutes}</span>
            <div className={cx("wrapper-box-time")}>Phút</div>
          </div>
          <div className={cx("wrapper-date-distance")}>:</div>
          <div className={cx("wrapper-date")}>
            <span>{timeLeft.seconds}</span>
            <div className={cx("wrapper-box-time")}>Giây</div>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default FlashSale;
