import React, { useEffect, useState } from "react";
import style from "./FormAuto.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../../../../setup-axios/axios";
const cx = classNames.bind(style);
export default function FormAuto() {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString("sv-SE");
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [latestDay, setLatestDay] = useState("");
  const [percent, setPercent] = useState("");
  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState("");
  // const [loadTours, setLoadTours] = useState(null);
  // const fetchTour = () => {
  //   axios.get("/tourserver/getall-tour").then((res) => {
  //     if (res.message === "success") {
  //       setTours(res.data);
  //       setLoadTours(res.data);
  //       console.log(res.data);
  //     }
  //   });
  // };
  const fetchLatest = () => {
    axios.get("/voucher/lastest-day").then((res) => {
      if (res && res.message === "success") {
        console.log(new Date(res.data[0].lastest).toLocaleDateString("sv-SE"));
        setLatestDay(new Date(res.data[0].lastest).toLocaleDateString("sv-SE"));
      }
    });
  };
  const validate = () => {
    if (name === "" && start === "" && end === "" && percent === "") {
      toast.warning("Vui lòng nhập đầy đủ");
      return false;
    }
    if (name === "") {
      toast.warning("Vui lòng nhập tên đợt giảm giá");
      return false;
    }
    if (name.length > 100) {
      toast.warning("Tên đợt vượt quá chiều dài quy định");
      return false;
    }
    if (start === "") {
      toast.warning("Vui lòng nhập ngày bắt đầu áp dụng");
      return false;
    }
    if (end === "") {
      toast.warning("Vui lòng nhập ngày kết thúc");
      return false;
    }
    if (end === start) {
      toast.warning("Ngày kết thúc không được giống ngày bắt đầu");
      return false;
    }
    if (percent === "") {
      toast.warning("Vui lòng nhập mức giảm");
      return false;
    }
    if (percent > 100) {
      toast.warning("Mức giảm vượt quá 100%");
      return false;
    }
    toast.success("Thêm thành công");
    return true;
  };
  const handleSubmit = () => {
    let valid = validate();
    if (valid === true) {
      axios
        .post("/voucher/add-voucher", { name, start, end, percent })
        .then((res) => {
          if (res.message === "success") {
            navigate("/giam-gia");
          }
        });
    }
  };
  useEffect(() => {
    fetchLatest();
  }, []);
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("form-label")}>
          <label htmlFor="">Tên đợt giảm giá:</label>
          <label htmlFor="">Thời gian bắt đầu:</label>
          <label htmlFor="">Thời gian kết thúc:</label>
          <label htmlFor="">Mức giảm(%):</label>
        </div>
        <div className={cx("form-input")}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên giảm giá (VD: Đợt Giảm giá cuối năm)"
          />
          <input
            type="date"
            min={latestDay}
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
          <input
            type="date"
            min={latestDay}
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
          <input
            type="text"
            maxlength="3"
            value={percent}
            placeholder="Nhập mức giảm (%)"
            onChange={(e) => setPercent(e.target.value)}
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
          />
          {/* {loadTours ? (
            <select
              name=""
              id=""
              value={tour}
              onChange={(e) => setTour(e.target.value)}
            >
              {tours.map((item, index) => {
                return <option value={item.MaTour}>{item.TenTour}</option>;
              })}
            </select>
          ) : (
            <select>
              <option value="">loading...</option>
            </select>
          )} */}
        </div>
      </div>
      <div className={cx("btn")}>
        <Link to="/giam-gia">
          <button className={cx("cancel")}>
            HUỶ <FontAwesomeIcon icon={faCancel} />
          </button>
        </Link>
        <button className={cx("add")} onClick={handleSubmit}>
          THÊM MỚI <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </>
  );
}
