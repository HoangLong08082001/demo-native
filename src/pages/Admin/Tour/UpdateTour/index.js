import React, { useEffect, useState } from "react";
import style from "./UpdateTour.module.scss";
import classNames from "classnames/bind";
import JoditEditor from "jodit-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tippy.js/dist/tippy.css"; // optional
import CurrencyInput from "react-currency-input-field";
import Tippy from "@tippyjs/react/headless"; // different import path!
import Button from "../../../../components/Button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faChevronDown,
  faImage,
  faRotateLeft,
  faRotateRight,
  faSortDown,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import FormData from "form-data";
import axios from "../../../../setup-axios/axios";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
const cx = classNames.bind(style);
export default function UpdateTour() {
  const navigate = useNavigate();
  const countries = [
    {
      name: "NN",
      states: [{ name: "Châu Á" }, { name: "Châu Âu" }, { name: "Châu Mỹ" }],
    },
    {
      name: "TN",
      states: [
        { name: "Miền Bắc" },
        { name: "Miền Trung" },
        { name: "Miền Nam" },
      ],
    },
  ];
  const location = useLocation();
  const vehicles = ["Xe Khách", "Máy bay"];
  const [country, setCountry] = useState("Loai Tour");
  const [state, setState] = useState("Khu Vuc");
  const [city, setCity] = useState("Dia Diem Den");
  const [diaDiemDi, setDiaDiemDi] = useState("");
  const [id, setId] = useState("");
  const [TenTour, setTenTour] = useState(`Tour du lịch ${diaDiemDi}-${city}`);
  const [ngayDi, setNgayDi] = useState("");
  const [ngayVe, setNgayVe] = useState("");
  const [phuongTien, setPhuongTien] = useState("");
  const [quyMo, setQuyMo] = useState("");
  const [giaTour, setGiaTour] = useState("");
  const [giamgia, setGiamGia] = useState([]);
  const [giamgiathem, setGiamGiaThem] = useState([]);
  const [giam, setGiam] = useState(0);
  const [giamthem, setGiamthem] = useState(0);
  const [idGiam, setIdGiam] = useState(0);
  const [idGiamThem, setIdGiamThem] = useState(0);
  const [tenGiamGia, setTenGiamGia] = useState("");
  const [tenGiamGiaThem, setTenGiamGiaThem] = useState("");
  const [hinhAnh1, setHinhAnh1] = useState(null);
  const [hinhAnh2, setHinhAnh2] = useState(null);
  const [hinhAnh3, setHinhAnh3] = useState(null);
  const [hinhAnh4, setHinhAnh4] = useState(null);
  const [hinhAnh5, setHinhAnh5] = useState(null);
  const [files, setFiles] = useState([]);
  const [lichTrinh1, setLichTrinh1] = useState("");
  const [lichTrinh2, setLichTrinh2] = useState("");
  const [lichTrinh3, setLichTrinh3] = useState("");
  const [lichTrinh4, setLichTrinh4] = useState("");
  const [lichTrinh5, setLichTrinh5] = useState("");
  const [lichTrinh6, setLichTrinh6] = useState("");
  const [lichTrinh7, setLichTrinh7] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchGiamGia = async () => {
    await axios.get("/voucher/get-voucher").then((res) => {
      if (res && res.message === "success") {
        setGiamGia(res.data);
        console.log("giamgia ", res.data);
      }
    });
  };
  const fetchGiamGiaThem = async () => {
    await axios.get("/voucher/get-more-voucher").then((res) => {
      if (res && res.message === "success") {
        setGiamGiaThem(res.data);
        console.log("them ", res.data);
      }
    });
  };
  const handleChange2 = (event) => {
    setState(event.target.value);
    setCities(states.find((state) => state.name === event.target.value).cities);
  };
  const handleChange3 = (event) => {
    setCity(event.target.value);
  };
  const handleChange = (event) => {
    setCountry(event.target.value);
    setStates(
      countries.find((item) => item.name === event.target.value).states
    );
  };
  const checkValidate = () => {
    let ngaydi = new Date(ngayDi);
    let ngayve = new Date(ngayVe);
    if (ngayDi === "") {
      toast.warning("Vui lòng chọn ngày đi");
      return false;
    }
    if (ngayVe === "") {
      toast.warning("Vui lòng chọn ngày về");
      return false;
    }
    if (ngayve < ngaydi) {
      toast.warning("Ngày về không được bé hơn ngày đi");
      return false;
    }
    if (quyMo === "") {
      toast.warning("Vui lòng nhập quy mô khách hàng");
      return false;
    }
    if (phuongTien === "") {
      toast.warning("Vui lòng chọn phương tiện");
      return false;
    }
    if (giaTour === "") {
      toast.warning("Vui lòng nhập giá tour");
      return false;
    }
    if (country === "") {
      toast.warning("Vui lòng chọn loại tour");
      return false;
    }
    if (state === "") {
      toast.warning("Vui lòng chọn khu vực");
      return false;
    }
    if (diaDiemDi === "") {
      toast.warning("Vui lòng nhập địa điểm đi");
      return false;
    }
    if (city === "") {
      toast.warning("Vui lòng nhập địa điểm đến");
      return false;
    }
    if (city === diaDiemDi) {
      toast.warning("Địa điểm đến và đi không được giống nhau");
      return false;
    }
    if (lichTrinh1 === "" || lichTrinh2 === "") {
      toast.warning("Vui lòng nhập ít nhất 2 lịch trình");
      return false;
    }
    return true;
  };
  const handleAddTour = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("char", TenTour);
    fd.append("char", giaTour);
    fd.append("char", diaDiemDi);
    fd.append("char", id);
    fd.append("number", quyMo);
    fd.append("number", giam === null ? 0 : giam);
    fd.append("number", giamthem === null ? 0 : giamthem);
    fd.append("editor", lichTrinh1);
    fd.append("editor", lichTrinh2);
    fd.append("editor", lichTrinh3);
    fd.append("editor", lichTrinh4);
    fd.append("editor", lichTrinh5);
    fd.append("editor", lichTrinh6);
    fd.append("editor", lichTrinh7);
    fd.append("select", country);
    fd.append("select", state);
    fd.append("select", city);
    fd.append("select", phuongTien);
    fd.append("date", new Date(ngayDi).toLocaleDateString("sv-SE"));
    fd.append("date", new Date(ngayVe).toLocaleDateString("sv-SE"));
    console.log(fd);
    let check = checkValidate();
    if (check === true) {
      axios
        .put("/tourserver/update-tour", fd, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res && res.message === "success") {
            toast.success("Cập nhật thành công!");
            navigate("/tour");
          } else {
            toast.error("không cập nhật thành công!");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const handleChangeGiamGiaThem = (e) => {
    setGiamthem(e);
    console.log(e);
  };
  const handleChangeGiamGia = (e) => {
    setGiam(e);
  };
  const SetItemUpdate = () => {
    setId(location.state.MaTour);
    setNgayDi(location.state.NgayDi);
    setNgayVe(location.state.NgayVe);
    setQuyMo(location.state.QuyMo);
    setGiaTour(location.state.GiaTour);
    setState(location.state.vungMien);
    setCountry(location.state.LoaiTour);
    setDiaDiemDi(location.state.DiaDiemDi);
    setPhuongTien(location.state.PhuongTien);
    setCity(location.state.DiaDiemDen);
    setLichTrinh1(location.state.LichTrinh1);
    setLichTrinh2(location.state.LichTrinh2);
    setLichTrinh3(location.state.LichTrinh3);
    setLichTrinh4(location.state.LichTrinh4);
    setLichTrinh5(location.state.LichTrinh5);
    setLichTrinh6(location.state.LichTrinh6);
    setGiam(location.state.id_giamgia);
    setGiamthem(location.state.id_giamgiathem);
    console.log(location.state.id_giamgia);
    console.log(location.state.id_giamgiathem);
  };
  useEffect(() => {
    SetItemUpdate();
    fetchGiamGia();
    fetchGiamGiaThem();
  }, []);
  let ngaydi = new Date(ngayDi).toLocaleDateString("en-US");
  const today = new Date().toLocaleDateString("sv-SE");
  let max = new Date(ngayDi);
  let nextThreeDays = () => {
    let max = new Date(ngayDi);
    let nextThreeDays = new Date(max.setDate(max.getDate() + 7));
    return nextThreeDays;
  };
  let ngayve = new Date(ngayVe).toLocaleDateString("en-US");
  return (
    <div className={cx("wrapper")}>
      <input
        type="text"
        hidden
        name="char"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <p className={cx("title")}>Thông tin tour cần sửa</p>
      <div className={cx("form")}>
        <div className={cx("left")}>
          <div className={cx("list-label")}>
            <label htmlFor="">Tên tour</label>
            <label htmlFor="">Ngày đi</label>
            <label htmlFor="">Ngày về</label>
            <label htmlFor="">Quy mô</label>
            <label htmlFor="">Phương tiện</label>
            <label htmlFor="">Giá tour</label>
          </div>
          <div className={cx("list-input")}>
            <input
              type="text"
              readOnly
              value={`Tour du lịch ${diaDiemDi}-${city}`}
              name="char"
              onChange={(e) => setTenTour(e.target.value)}
            />
            {/* <input
              type="date"
              value={ngaydi}
              name="date"
              onChange={(e) => setNgayDi(e.target.value)}
            />
            <input
              type="date"
              value={ngayve}
              name="date"
              onChange={(e) => setNgayVe(e.target.value)}
            /> */}
            <input
              type="date"
              name="date"
              min={today}
              onChange={(e) => {
                let ngaydi = new Date(e.target.value);
                let ngayve = new Date(ngayVe);
                if (ngaydi > ngayve) {
                  toast.warning("Ngày về không được bé hơn ngày đi");
                } else {
                  setNgayDi(e.target.value);
                }
              }}
              value={new Date(ngayDi).toLocaleDateString("sv-SE")}
            />
            <input
              type="date"
              name="date"
              min={today}
              max={nextThreeDays().toLocaleDateString("sv-SE")}
              onChange={(e) => {
                let ngaydi = new Date(e.target.value);
                let ngayve = new Date(ngayVe);
                if (ngayve > ngaydi) {
                  toast.warning("Ngày về không được bé hơn ngày đi");
                } else {
                  setNgayVe(e.target.value);
                }
              }}
              value={new Date(ngayVe).toLocaleDateString("sv-SE")}
            />
            <input
              type="text"
              maxlength="3"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              value={quyMo}
              name="number"
              onChange={(e) => setQuyMo(e.target.value)}
            />
            <select
              name="select"
              id=""
              value={phuongTien}
              onChange={(e) => setPhuongTien(e.target.value)}
            >
              {vehicles.map((item) => {
                if (phuongTien === item) {
                  return <option value={item}>{item}</option>;
                } else {
                  return <option value={item}>{item}</option>;
                }
              })}
            </select>
            <input
              name="char"
              type="text"
              value={giaTour}
              onChange={(e) => setGiaTour(e.target.value)}
            />
          </div>
        </div>
        <div className={cx("right")}>
          <div className={cx("list-label")}>
            <label htmlFor="">Loại tour</label>
            <label htmlFor="">Khu vực</label>
            <label htmlFor="">Địa điểm đi</label>
            <label htmlFor="">Địa điểm đến</label>
            <label htmlFor="">Giảm giá </label>
            <label htmlFor="">Giảm giá thêm</label>
          </div>
          <div className={cx("list-input")}>
            <select name="select" id="" value={country} onChange={handleChange}>
              {countries.map((item) => {
                if (country === item.name) {
                  return <option value={item.name}>{item.name}</option>;
                } else {
                  return <option value={item.name}>{item.name}</option>;
                }
              })}
            </select>
            <select name="select" id="" onChange={handleChange2} value={state}>
              {" "}
              <option>{state ? state : "Loai Tour"}</option>
              {states.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            <input
              name="select"
              id=""
              value={diaDiemDi}
              onChange={(e) => setDiaDiemDi(e.target.value)}
            />
            <input name="select" id="" value={city} onChange={handleChange3} />

            {giam ? (
              <select
                name="number"
                id=""
                value={giam}
                onChange={(e) => handleChangeGiamGia(e.target.value)}
              >
                {giamgia.map((item) => {
                  let today = new Date();
                  let endday = new Date(item.thoigiantoi);
                  if (giam && giam !== null && giam === item.id_giamgia) {
                    if (today <= endday) {
                      return (
                        <option value={item.id_giamgia}>
                          {item.ten_dotgiamgia}
                        </option>
                      );
                    }
                  } else {
                    if (today <= endday) {
                      return (
                        <option value={item.id_giamgia}>
                          {item.ten_dotgiamgia}
                        </option>
                      );
                    }
                  }
                })}
              </select>
            ) : (
              <select
                name="number"
                id=""
                value={giam}
                onChange={(e) => handleChangeGiamGia(e.target.value)}
              >
                <option value={0}>Giảm giá tự động</option>
                {giamgia.map((item) => {
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
            )}
            {giamthem ? (
              <select
                name="number"
                id=""
                value={giamthem}
                onChange={(e) => handleChangeGiamGiaThem(e.target.value)}
              >
                {giamgiathem.map((item) => {
                  let today = new Date();
                  let endday = new Date(item.thoigianketthucthem);
                  if (
                    giamthem &&
                    giamthem !== null &&
                    giamthem === item.id_giamgiathem
                  ) {
                    if (today <= endday) {
                      return (
                        <option value={item.id_giamgiathem}>
                          {item.ten_dotgiamgiathem}
                        </option>
                      );
                    }
                  } else {
                    if (today <= endday) {
                      return (
                        <option value={item.id_giamgiathem}>
                          {item.ten_dotgiamgiathem}
                        </option>
                      );
                    }
                  }
                })}
              </select>
            ) : (
              <select
                name="number"
                id=""
                value={giamthem}
                onChange={(e) => handleChangeGiamGiaThem(e.target.value)}
              >
                <option value={0}>Giảm giá thêm</option>
                {giamgiathem.map((item) => {
                  let today = new Date();
                  let endday = new Date(item.thoigianketthucthem);
                  if (today <= endday) {
                    return (
                      <option value={item.id_giamgiathem}>
                        {item.ten_dotgiamgiathem}
                      </option>
                    );
                  }
                })}
              </select>
            )}
          </div>
        </div>
      </div>
      {/* <p className={cx("title")}>File hinh anh tour can sua</p>
      <div className={cx("form-down")}>
        <div className={cx("left")}>
          <div className={cx("list-label")}>
            <label htmlFor="">Hinh anh bia</label>
            <label htmlFor="">Hinh anh 1</label>
            <label htmlFor="">Hinh anh 2</label>
            <label htmlFor="">Hinh anh 3</label>
            <label htmlFor="">Hinh anh 4</label>
          </div>
          <div className={cx("list-input")}>
            <input
              type="file"
              id="imagetwo"
              name="imgone"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh1(e.target.files[0]);
                setImageName2(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName2 ? imageName2 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagetwo">UPLOAD</label>
              </div>
            </div>
            <input
              type="file"
              name="files"
              id="imagethree"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh2(e.target.files[0]);
                setImageName3(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName3 ? imageName3 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagethree">UPLOAD</label>
              </div>
            </div>
            <input
              type="file"
              name="imgone"
              id="imagefour"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh3(e.target.files[0]);
                setImageName4(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName4 ? imageName4 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagefour">UPLOAD</label>
              </div>
            </div>
            <input
              type="file"
              name="imgone"
              id="imagefive"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh4(e.target.files[0]);
                setImageName5(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName5 ? imageName5 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagefive">UPLOAD</label>
              </div>
            </div>
            <input
              type="file"
              name="imgone"
              id="imagesix"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh5(e.target.files[0]);
                setImageName6(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName6 ? imageName6 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagesix">UPLOAD</label>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className={cx("list-tourist")}>
        <p className={cx("title")}>Lịch trình tour cần sửa</p>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngày 1</label>
          <JoditEditor
            value={lichTrinh1}
            name="editor"
            onChange={(e) => setLichTrinh1(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngày 2</label>
          <JoditEditor
            value={lichTrinh2}
            name="editor"
            onChange={(e) => setLichTrinh2(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngày 3</label>
          <JoditEditor
            value={lichTrinh3}
            name="editor"
            onChange={(e) => setLichTrinh3(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngày 4</label>
          <JoditEditor
            value={lichTrinh4}
            name="editor"
            onChange={(e) => setLichTrinh4(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngày 5</label>
          <JoditEditor
            name="editor"
            value={lichTrinh5}
            onChange={(e) => setLichTrinh5(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngày 6</label>
          <JoditEditor
            name="editor"
            value={lichTrinh6}
            onChange={(e) => setLichTrinh6(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngày 7</label>
          <JoditEditor
            name="editor"
            value={lichTrinh7}
            onChange={(e) => setLichTrinh7(e)}
            className=""
          />
        </div>
      </div>
      <div className={cx("btn-submit")}>
        <Link to="/tour" className={cx("text")}>
          <button className={cx("btn-cancel")}>TRỞ LẠI</button>
        </Link>
        <button className={cx("btn-submit")} onClick={handleAddTour}>
          CẬP NHẬT <FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
