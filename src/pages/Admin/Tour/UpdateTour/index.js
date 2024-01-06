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
import { Link, useLocation, useParams } from "react-router-dom";
const cx = classNames.bind(style);
export default function UpdateTour() {
  const inVN = [
    { city: "Ha Noi" },
    { city: "Sapa" },
    { city: "Vinh Ha Long" },
    { city: " Hà Giang" },
    { city: "Cao Bằng" },
    { city: "Lào Cai" },
    { city: "Bắc Kạn" },
    { city: "Lạng Sơn" },
    { city: "Tuyên Quang" },
    { city: "Yên Bái" },
    { city: "Thái Nguyên" },
    { city: "Phú Thọ" },
    { city: "Bắc Giang" },
    { city: "Lai Châu" },
    { city: "Điện Biên" },
    { city: "Sơn La" },
    { city: "Hòa Bình" },
    { city: "Quảng Ninh" },
    { city: "Thanh Hoá" },
    { city: "Nghệ An" },
    { city: "Hà Tĩnh" },
    { city: "Quảng Bình" },
    { city: "Quảng Trị" },
    { city: "Thừa Thiên-Huế" },
    { city: " Kon Tum" },
    { city: "Gia Lai" },
    { city: "Đắc Lắc" },
    { city: "Đắc Nông" },
    { city: "Lâm Đồng" },
    { city: "Đà Nẵng" },
    { city: "Quảng Nam" },
    { city: "Quảng Ngãi" },
    { city: "Bình Định" },
    { city: "Phú Yên" },
    { city: "Khánh Hoà" },
    { city: "Ninh Thuận" },
    { city: "Bình Thuận" },
    { city: "Bình Phước" },
    { city: "Bình Dương" },
    { city: "Đồng Nai" },
    { city: "Tây Ninh" },
    { city: "Bà Rịa Vũng Tàu" },
    { city: "TP.HCM" },
    { city: "Long An" },
    { city: "Đồng Tháp" },
    { city: "Tiền Giang" },
    { city: "An Giang" },
    { city: "Bến Tre" },
    { city: "Vĩnh Long" },
    { city: "Trà Vinh" },
    { city: "Hậu Giang" },
    { city: "Kiên Giang" },
    { city: "Sóc Trăng" },
    { city: "Bạc Liêu" },
    { city: "Cà Mau" },
  ];
  const countries = [
    {
      name: "NN",
      states: [
        {
          name: "Chau A",
          cities: [
            "Han Quoc",
            "Nhat Ban",
            "Thai Lan",
            "Campuchia",
            "Lao",
            "Myanmar",
            "Trung Quoc",
            "Singapore",
            "A rap Xe Ut",
            "Philippines",
            "UAE",
            "HongKong",
            "Quatar",
            "Maldives",
            "MaCao",
          ],
        },
        {
          name: "Chau Au",
          cities: [
            "Pháp",
            "Tây Ban Nha",
            "Thụy Điển",
            "Đức",
            "Phần Lan",
            "Na Uy",
            "Italy",
            "Đan Mạch",
            "Thụy Sĩ",
            "Hà Lan",
            "Anh",
          ],
        },
        {
          name: "Chau My",
          cities: [
            "Hoa Kỳ",
            "Canada",
            "Mexico",
            "Chile",
            "Argentina",
            "Brazil",
          ],
        },
      ],
    },
    {
      name: "TN",
      states: [
        {
          name: "Bac",
          cities: [
            "Ha Noi",
            "Sapa",
            "Vinh Ha Long",
            " Hà Giang",
            "Cao Bằng",
            "Lào Cai",
            "Bắc Kạn",
            "Lạng Sơn",
            "Tuyên Quang",
            "Yên Bái",
            "Thái Nguyên",
            "Phú Thọ",
            "Bắc Giang",
            "Lai Châu",
            "Điện Biên",
            "Sơn La",
            "Hòa Bình",
          ],
        },
        {
          name: "Trung",
          cities: [
            "Thanh Hoá",
            "Nghệ An",
            "Hà Tĩnh",
            "Quảng Bình",
            "Quảng Trị",
            "Thừa Thiên-Huế",
            " Kon Tum",
            "Gia Lai",
            "Đắc Lắc",
            "Đắc Nông",
            "Lâm Đồng",
            "Đà Nẵng",
            "Quảng Nam",
            "Quảng Ngãi",
            "Bình Định",
            "Phú Yên",
            "Khánh Hoà",
            "Ninh Thuận",
            "Bình Thuận",
          ],
        },
        {
          name: "Nam",
          cities: [
            "Bình Phước",
            "Bình Dương",
            "Đồng Nai",
            "Tây Ninh",
            "Bà Rịa Vũng Tàu",
            "Long An",
            "Đồng Tháp",
            "Tiền Giang",
            "An Giang",
            "Bến Tre",
            "Vĩnh Long",
            "Trà Vinh",
            "Hậu Giang",
            "Kiên Giang",
            "Sóc Trăng",
            "Bạc Liêu",
            "Cà Mau",
          ],
        },
      ],
    },
  ];
  const location = useLocation();
  const vehicles = ["Xe Khach", "May bay", "Tu tuc"];
  const [country, setCountry] = useState("Loai Tour");
  const [state, setState] = useState("Khu Vuc");
  const [city, setCity] = useState("Dia Diem Den");
  const [id, setId] = useState("");
  const [TenTour, setTenTour] = useState("");
  const [ngayDi, setNgayDi] = useState("");
  const [ngayVe, setNgayVe] = useState("");
  const [phuongTien, setPhuongTien] = useState("");
  const [quyMo, setQuyMo] = useState("");
  const [diaDiemDi, setDiaDiemDi] = useState("");
  const [giaTour, setGiaTour] = useState("");
  const [giamgia, setGiamGia] = useState([]);
  const [giamgiathem, setGiamGiaThem] = useState([]);
  const [giam, setGiam] = useState(0);
  const [giamthem, setGiamthem] = useState(0);
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
    await axios.get("/tour/get-giamgia").then((res) => {
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
  const checkValidate = ()=>{
    let ngaydi = new Date(ngayDi);
    let ngayve = new Date(ngayVe);
    if(ngayVe < ngayDi)
    {
      toast.warning("Ngay ve khong duoc be hon ngay di");
      return false;
    }
    return true;
  }
  const handleAddTour = (e) => {
    // e.preventDefault();
    // let fd = new FormData();
    // fd.append("char", TenTour);
    // fd.append("char", giaTour);
    // fd.append("char", diaDiemDi);
    // fd.append("char", id);
    // fd.append("number", quyMo);
    // fd.append("editor", lichTrinh1);
    // fd.append("editor", lichTrinh2);
    // fd.append("editor", lichTrinh3);
    // fd.append("editor", lichTrinh4);
    // fd.append("editor", lichTrinh5);
    // fd.append("editor", lichTrinh6);
    // fd.append("editor", lichTrinh7);
    // fd.append("select", country);
    // fd.append("select", state);
    // fd.append("select", city);
    // fd.append("select", phuongTien);
    // fd.append("date", new Date(ngayDi).toLocaleDateString("sv-SE"));
    // fd.append("date", new Date(ngayVe).toLocaleDateString("sv-SE"));
    // console.log(fd);
    // axios
    //   .put("/tourserver/update-tour", fd, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((res) => {
    //     if (res && res.message === "success") {
    //       toast.success("Cap nhat tour thanh cong");
    //     } else {
    //       toast.error("khong cap nhat duoc tour");
    //     }
    //   })
    //   .catch((err) => console.log(err));
    let check = checkValidate();
    if(check === true)
    {
      toast.success("SUA THANH CONG");
    }
  };
  const handleChangeGiamGiaThem = (e) => {
    setGiamthem(e);
    console.log(e);
  };
  const SetItemUpdate = () => {
    setId(location.state.MaTour);
    setTenTour(location.state.TenTour);
    setNgayDi(location.state.NgayDi);
    setNgayVe(location.state.NgayVe);
    setQuyMo(location.state.QuyMo);
    setGiaTour(location.state.GiaTour);
    setGiamGia(location.state.GiamGia);
    setState(location.state.vungMien);
    setCountry(location.state.LoaiTour);
    setDiaDiemDi(location.state.DiaDiemDi);
    setCity(location.state.DiaDiemDen);
    setLichTrinh1(location.state.LichTrinh1);
    setLichTrinh2(location.state.LichTrinh2);
    setLichTrinh3(location.state.LichTrinh3);
    setLichTrinh4(location.state.LichTrinh4);
    setLichTrinh5(location.state.LichTrinh5);
    setLichTrinh6(location.state.LichTrinh6);
  };
  useEffect(() => {
    SetItemUpdate();
    fetchGiamGia();
    fetchGiamGiaThem();
  }, []);
  let ngaydi = new Date(ngayDi).toLocaleDateString("en-US");
  let today = new Date();
  let max = new Date(ngayDi);
  let nextThreeDays = new Date(max.setDate(max.getDate() + 7));
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
      <p className={cx("title")}>Thong tin tour can sua</p>
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
              value={TenTour}
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
            <DatePicker
              dateFormat="yyyy-MM-dd"
              name="date"
              minDate={today}
              onChange={(date) => setNgayDi(date)}
              value={new Date(ngayDi).toLocaleDateString("sv-SE")}
            />
            <DatePicker
              dateFormat="yyyy-MM-dd"
              name="date"
              minDate={today}
              maxDate={nextThreeDays}
              onChange={(date) => setNgayVe(date)}
              value={new Date(ngayVe).toLocaleDateString("sv-SE")}
            />
            <input
              type="number"
              value={quyMo}
              name="number"
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              onChange={(e) => setQuyMo(e.target.value)}
            />
            <select
              name="select"
              id=""
              value={phuongTien}
              onChange={(e) => setPhuongTien(e.target.value)}
            >
              <option>{phuongTien ? phuongTien : "Phuong Tien"}</option>
              {vehicles.map((item) => (
                <option value={item}>{item}</option>
              ))}
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
              <option value="">{country ? country : "country"}</option>
              {countries.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            <select name="select" id="" onChange={handleChange2} value={state}>
              {" "}
              <option>{state ? state : "Loai Tour"}</option>
              {states.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            <select
              name="select"
              id=""
              value={diaDiemDi}
              onChange={(e) => setDiaDiemDi(e.target.value)}
            >
              <option>{diaDiemDi ? diaDiemDi : "Dia Diem Den"}</option>
              {inVN.map((item, index) => (
                <option key={index} value={item.city}>
                  {item.city}
                </option>
              ))}
            </select>
            <select name="select" id="" value={city} onChange={handleChange3}>
              <option>{city ? city : "Dia Diem Den"}</option>
              {cities.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            
            <select
              name="select"
              id=""
              value={giamthem}
              onChange={(e) => handleChangeGiamGiaThem(e.target.value)}
            >
              <option value={0}> Giảm giá thêm</option>
              {giamgiathem.map((item) => (
                <option value={item.id_giamgiathem}>
                  {item.ten_dotgiamgiathem}
                </option>
              ))}
            </select>
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
        <p className={cx("title")}>Lich trinh tour can sua</p>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 1</label>
          <JoditEditor
            value={lichTrinh1}
            name="editor"
            onChange={(e) => setLichTrinh1(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 2</label>
          <JoditEditor
            value={lichTrinh2}
            name="editor"
            onChange={(e) => setLichTrinh2(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 3</label>
          <JoditEditor
            value={lichTrinh3}
            name="editor"
            onChange={(e) => setLichTrinh3(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 4</label>
          <JoditEditor
            value={lichTrinh4}
            name="editor"
            onChange={(e) => setLichTrinh4(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 5</label>
          <JoditEditor
            name="editor"
            value={lichTrinh5}
            onChange={(e) => setLichTrinh5(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 6</label>
          <JoditEditor
            name="editor"
            value={lichTrinh6}
            onChange={(e) => setLichTrinh6(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 7</label>
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
          <button className={cx("btn-cancel")}>TRO LAI</button>
        </Link>
        <button className={cx("btn-submit")} onClick={handleAddTour}>
          CAP NHAT <FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
