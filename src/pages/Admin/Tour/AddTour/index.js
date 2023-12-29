import React, { useEffect, useState } from "react";
import style from "./AddTour.module.scss";
import classNames from "classnames/bind";
import JoditEditor from "jodit-react";

import "tippy.js/dist/tippy.css"; // optional
import CurrencyInput from "react-currency-input-field";
import Tippy from "@tippyjs/react/headless"; // different import path!
import Button from "../../../../components/Button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faChevronDown,
  faImage,
  faSortDown,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import FormData from "form-data";
import axios from "../../../../setup-axios/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function AddTour() {
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
            "Quảng Ninh",
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

  const today = new Date().toLocaleDateString("sv-SE");
  const vehicles = ["Xe Khach", "May bay", "Tu tuc"];
  const [country, setCountry] = useState("Loai Tour");
  const [state, setState] = useState("Khu Vuc");
  const [city, setCity] = useState("Dia Diem Den");
  const [TenTour, setTenTour] = useState("");
  const [ngayDi, setNgayDi] = useState("");
  const [ngayVe, setNgayVe] = useState("");
  const [phuongTien, setPhuongTien] = useState("");
  const [quyMo, setQuyMo] = useState("");
  const [diaDiemDi, setDiaDiemDi] = useState("TP.HCM");
  const [giaTour, setGiaTour] = useState("");
  const [hinhAnh1, setHinhAnh1] = useState(null);
  const [hinhAnh2, setHinhAnh2] = useState(null);
  const [hinhAnh3, setHinhAnh3] = useState(null);
  const [hinhAnh4, setHinhAnh4] = useState(null);
  const [hinhAnh5, setHinhAnh5] = useState(null);
  const [files, setFiles] = useState([]);
  const [imageName1, setImageName1] = useState("");
  const [imageName2, setImageName2] = useState("");
  const [imageName3, setImageName3] = useState("");
  const [imageName4, setImageName4] = useState("");
  const [imageName5, setImageName5] = useState("");
  const [imageName6, setImageName6] = useState("");
  const [lichTrinh1, setLichTrinh1] = useState("");
  const [lichTrinh2, setLichTrinh2] = useState("");
  const [lichTrinh3, setLichTrinh3] = useState("");
  const [lichTrinh4, setLichTrinh4] = useState("");
  const [lichTrinh5, setLichTrinh5] = useState("");
  const [lichTrinh6, setLichTrinh6] = useState("");
  const [lichTrinh7, setLichTrinh7] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [giamgia, setGiamGia] = useState([]);
  const [giamgiathem, setGiamGiaThem] = useState([]);
  const [giam, setGiam] = useState(0);
  const [giamthem, setGiamthem] = useState(0);
  const [maxDay, setMaxDay] = useState("");
  const fetchGiamGia = async () => {
    await axios.get("/voucher/get-voucher").then((res) => {
      if (res && res.message === "success") {
        setGiamGia(res.data);
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
  const CheckValidate = () => {
    if (TenTour === "") {
      toast.warning("Vui lòng nhập tên tour");
      return false;
    }
    if (ngayDi === "") {
      toast.warning("Vui lòng chọn ngày đi");
      return false;
    }
    if (ngayVe === "") {
      toast.warning("Vui lòng chọn ngày về");
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
    if (city === "") {
      toast.warning("Vui lòng chọn địa điểm đến");
      return false;
    }
    if (diaDiemDi === "") {
      toast.warning("Vui lòng chọn địa điểm đi");
      return false;
    }
    if (imageName2 === "") {
      toast.warning("Vui lòng thêm ảnh bìa");
      return false;
    }
    if (imageName3 === "") {
      toast.warning("Vui lòng thêm ảnh thứ 1");
      return false;
    }
    if (imageName4 === "") {
      toast.warning("Vui lòng thêm ảnh thứ 2");
      return false;
    }
    if (imageName5 === "") {
      toast.warning("Vui lòng thêm ảnh thứ 3");
      return false;
    }
    if (imageName6 === "") {
      toast.warning("Vui lòng thêm ảnh thứ 4");
      return false;
    }
    if (lichTrinh1 === "" || lichTrinh2 === "") {
      toast.warning("Vui lòng nhập ít nhất 2 lịch trình");
      return false;
    }

    toast.success("Thêm thành công");
    return true;
  };
  const handleAddTour = () => {
    let validate = CheckValidate();
    if (validate) {
      let fd = new FormData();
      fd.append("imgone", hinhAnh1);
      fd.append("imgone", hinhAnh2);
      fd.append("imgone", hinhAnh3);
      fd.append("imgone", hinhAnh4);
      fd.append("imgone", hinhAnh5);
      fd.append("date", ngayDi);
      fd.append("date", ngayVe);
      fd.append("char", TenTour);
      fd.append("char", giaTour);
      fd.append("char", diaDiemDi);
      fd.append("number", quyMo);
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
      fd.append("select", giam);
      fd.append("select", giamthem);
      console.log(fd);
      axios
        .post("/tourserver/add-tour", fd, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res && res.message === "success") {
            setTenTour("");
            setNgayDi("");
            setNgayVe("");
            setPhuongTien("");
            setQuyMo("");
            setGiaTour("");
            setImageName1("");
            setImageName2("");
            setImageName3("");
            setImageName4("");
            setImageName5("");
            setImageName6("");
            setLichTrinh1("");
            setLichTrinh2("");
            setLichTrinh3("");
            setLichTrinh4("");
            setLichTrinh5("");
            setLichTrinh6("");
            setLichTrinh7("");
          }
        });
    }
  };
  const maxDate = () => {
    let max = new Date(ngayDi);
    let nextThreeDays = new Date(max.setDate(max.getDate() + 7));
    return nextThreeDays;
  };
  const handleChangeGiamGia = (e) => {
    setGiam(e);
    console.log(e);
  };
  const handleChangeGiamGiaThem = (e) => {
    setGiamthem(e);
    console.log(e);
  };
  useEffect(() => {
    fetchGiamGia();
    fetchGiamGiaThem();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Nhập thông tin tour</p>
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
            <input
              type="date"
              min={today}
              value={ngayDi}
              name="date"
              onChange={(e) => {
                setNgayDi(e.target.value);
              }}
            />
            <input
              type="date"
              value={ngayVe}
              min={today}
              max={maxDate().toLocaleDateString("sv-SE")}
              name="date"
              onChange={(e) => setNgayVe(e.target.value)}
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
              <option>{phuongTien ? phuongTien : "Chọn Phương tiện"}</option>
              {vehicles.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <input
              name="char"
              type="text"
              value={giaTour}
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
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
              <option value="">{country ? country : "Khu vực"}</option>
              {countries.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            <select name="select" id="" onChange={handleChange2} value={state}>
              {" "}
              <option>{state ? state : "Loại tour"}</option>
              {states.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            <select
              name="select"
              id=""
              value={diaDiemDi}
              onChange={(e) => {
                setDiaDiemDi(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option>Địa điểm đi</option>
              {inVN.map((item) => (
                <option value={item.city}>{item.city}</option>
              ))}
            </select>
            <select name="select" id="" value={city} onChange={handleChange3}>
              <option>Địa điểm đến</option>
              {cities.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <select
              name="select"
              id=""
              value={giam}
              onChange={(e) => handleChangeGiamGia(e.target.value)}
            >
              <option value={0}> Giảm giá</option>
              {giamgia.map((item) => (
                <option value={item.id_giamgia}>{item.ten_dotgiamgia}</option>
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
      <p className={cx("title")}>Upload hình ảnh tour</p>
      <div className={cx("form-down")}>
        <div className={cx("left")}>
          <div className={cx("list-label")}>
            <label htmlFor="">Hình ảnh bìa</label>
            <label htmlFor="">Hình ảnh 1</label>
            <label htmlFor="">Hình ảnh 2</label>
            <label htmlFor="">Hình ảnh 3</label>
            <label htmlFor="">Hình ảnh 4</label>
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
      </div>

      <div className={cx("list-tourist")}>
        <p className={cx("title")}>Lịch trình tour</p>
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
        <button className={cx("btn-submit")} onClick={() => handleAddTour()}>
          THÊM MỚI
        </button>
      </div>
    </div>
  );
}
