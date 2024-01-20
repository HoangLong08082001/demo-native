import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../../../../setup-axios/axios";
import style from "./FormUnauto.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
const cx = classNames.bind(style);
export default function FormUnauto() {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString("sv-SE");
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [percent, setPercent] = useState("");
  const [discounts, setDiscounts] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [dateend, setDateEnd] = useState("");
  const [loadTours, setLoadTours] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const fetchTour = () => {
    axios.get("/voucher/get-voucher").then((res) => {
      if (res.message === "success") {
        setDiscounts(res.data);
        setLoadTours(res.data);
        console.log(res.data);
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
    return true;
  };
  const handleChange = (e) => {
    setDiscount(e);

    const copyList = _.cloneDeep(discounts);
    let index = copyList.findIndex((item) => +item.id_giamgia === +e);
    if (index > -1) {
      console.log(copyList[index]);
      let end = new Date(copyList[index].thoigiantoi).toLocaleDateString(
        "sv-SE"
      );
      let start = new Date(copyList[index].thoigianbatdau).toLocaleDateString(
        "sv-SE"
      );
      setMax(end);
      setMin(start);
    } else {
      setMax("");
      setMin("");
    }
  };
  const validateDate = (e) => {
    if (start !== "") {
      setEnd(e);
    } else {
      toast.warning("Vui lòng chọn ngày bắt đầu trước ngày kết thúc!");
      setEnd("");
    }
  };
  const validateStartDate = (e) => {
    let startday = new Date(e);
    let endday = new Date(end);
    if (startday > endday) {
      toast.warning("Vui lòng chọn ngày bắt đầu trước ngày kết thúc!");
    } else {
      setStart(e);
    }
  };
  const handleSubmit = () => {
    let valid = validate();
    if (valid === true) {
      axios
        .post("/voucher/add-more-voucher", {
          discount,
          name,
          start,
          end,
          percent,
        })
        .then((res) => {
          if (res.message === "success") {
            toast.success("Thêm thành công");
            setName("");
            setStart("");
            setDiscount("");
            setEnd("");
            setPercent("");
            navigate("/giam-gia");
          }
        });
    }
  };
  useEffect(() => {
    fetchTour();
  }, []);
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("form-label")}>
          <label htmlFor="">Thuộc giảm giá tự động</label>
          <label htmlFor="">Tên đợt giảm giá thêm:</label>
          <label htmlFor="">Thời gian bắt đầu:</label>
          <label htmlFor="">Thời gian kết thúc:</label>
          <label htmlFor="">Mức giảm(%):</label>
        </div>
        <div className={cx("form-input")}>
          {loadTours ? (
            <select
              name=""
              id=""
              value={discount}
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="" style={{ textAlign: "center" }}>
                --Chọn đợt giảm giá--
              </option>
              {discounts.map((item, index) => {
                let today = new Date();
                let endday = new Date(item.thoigiantoi);
                if (today <= endday) {
                  return (
                    <option value={item.id_giamgia}>
                      {item.ten_dotgiamgia}
                    </option>
                  );
                }
              })}
            </select>
          ) : (
            <select>
              <option value="">loading...</option>
            </select>
          )}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên giảm giá (VD: Đợt Giảm giá cuối năm)"
          />
          <input
            type="date"
            min={min ? min : today}
            max={max && max}
            value={start}
            onChange={(e) => validateStartDate(e.target.value)}
          />
          <input
            type="date"
            min={min ? min : today}
            max={max && max}
            value={end}
            onChange={(e) => validateDate(e.target.value)}
          />
          <input
            type="text"
            maxlength="3"
            value={percent}
            placeholder="Nhập mức giảm (%)"
            onChange={(e) => setPercent(e.target.value)}
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
          />
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
