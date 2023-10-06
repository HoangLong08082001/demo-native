import React, { useEffect, useState } from "react";
import style from "./AddTour.module.scss";
import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css"; // optional
import CurrencyInput from "react-currency-input-field";
import Tippy from "@tippyjs/react/headless"; // different import path!
import Button from "../../../../components/Button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faChevronDown,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../setup-axios/axios";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function AddTour() {
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
  const vehicles = ["Xe Khach", "May bay", "Tu tuc"];
  const [country, setCountry] = useState("--Loai Tour--");
  const [state, setState] = useState("--Khu Vuc--");
  const [city, setCity] = useState("--Dia Diem Den--");
  const [TenTour, setTenTour] = useState("");
  const [ngayDi, setNgayDi] = useState("");
  const [ngayVe, setNgayVe] = useState("");
  const [phuongTien, setPhuongTien] = useState("");
  const [quyMo, setQuyMo] = useState("");
  const [diaDiemDi, setDiaDiemDi] = useState("TP.HCM");
  const [giaTour, setGiaTour] = useState("");
  const [giamGia, setGiamGia] = useState("");
  const [hinhAnh2, setHinhAnh2] = useState();
  const [hinhAnh3, setHinhAnh3] = useState();
  const [hinhAnh4, setHinhAnh4] = useState();
  const [hinhAnh1, setHinhAnh1] = useState();
  const [hinhAnh, setHinhAnh] = useState();
  const [lichTrinh, setLichTrinh] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

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
  const handleAddTour = async () => {
    const fd = new FormData();
    fd.append("image", hinhAnh);
    const fd1 = new FormData();
    fd1.append("image", hinhAnh1);
    const fd2 = new FormData();
    fd2.append("image", hinhAnh2);
    const fd3 = new FormData();
    fd3.append("image", hinhAnh3);
    const fd4 = new FormData();
    fd4.append("image", hinhAnh4);
    let response = await axios.post("/tourserver/add-tour", {
      country,
      city,
      TenTour,
      ngayDi,
      ngayVe,
      phuongTien,
      quyMo,
      diaDiemDi,
      giaTour,
      giamGia,
      fd,
      fd1,
      fd2,
      fd3,
      fd4,
      lichTrinh,
    });
    if (response && response.message === "success") {
      toast.success("Add success");
      setCountry("--Loai Tour--");
      setState("--Khu Vuc--");
      setCity("--Dia Diem Den");
      setTenTour("");
      setNgayDi("");
      setNgayVe("");
      setPhuongTien("");
      setQuyMo("");
      setDiaDiemDi("TP.HCM");
      setGiaTour("");
      setGiamGia("");
      setHinhAnh2();
      setHinhAnh3();
      setHinhAnh4();
      setHinhAnh1();
      setHinhAnh();
      setLichTrinh("");
      console.log(fd);
      console.log(fd1);
      console.log(fd2);
      console.log(fd3);
      console.log(fd4);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className={cx("wrapper")}>
      <Button btnAdd to="/tour">
        TRO LAI
      </Button>
      <div className={cx("form")}>
        <div className={cx("left-form")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Ten Tour</label>
            <input
              value={TenTour}
              type="text"
              name=""
              id=""
              onChange={(e) => setTenTour(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Ngay Di</label>
            <input
              value={ngayDi}
              type="date"
              name=""
              id=""
              onChange={(e) => setNgayDi(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Ngay Ve</label>
            <input
              value={ngayVe}
              type="date"
              name=""
              id=""
              onChange={(e) => setNgayVe(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Phuong tien</label>
            <div className={cx("select-container")}>
              <select
                value={phuongTien}
                name=""
                id=""
                className={cx("select-box")}
                onChange={(e) => setPhuongTien(e.target.value)}
              >
                <option>{phuongTien ? phuongTien : "--Phuong Tien--"}</option>
                {vehicles.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <FontAwesomeIcon
                icon={faSortDown}
                className={cx("icon-dropdown")}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Loai tour</label>
            <div className={cx("select-container")}>
              <select
                className={cx("select-box")}
                name=""
                id=""
                value={country}
                onChange={handleChange}
              >
                <option value="">{country ? country : "--country--"}</option>
                {countries.map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>

              <FontAwesomeIcon
                icon={faSortDown}
                className={cx("icon-dropdown")}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div className={cx("right-form")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Quy Mo</label>
            <input
              value={quyMo}
              type="number"
              name=""
              id=""
              onChange={(e) => setQuyMo(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Dia Diem Di</label>
            <input
              type="text"
              name=""
              id=""
              value={diaDiemDi}
              readOnly
              onChange={(e) => setDiaDiemDi(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Khu Vuc</label>
            <div className={cx("select-container")}>
              <select
                value={state}
                className={cx("select-box")}
                onChange={handleChange2}
              >
                <option>{state ? state : "--Loai Tour--"}</option>
                {states.map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>
              <FontAwesomeIcon
                icon={faSortDown}
                className={cx("icon-dropdown")}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Dia Diem Den</label>
            <div className={cx("select-container")}>
              <select
                name=""
                id=""
                className={cx("select-box")}
                value={city}
                onChange={handleChange3}
              >
                <option>--Dia Diem Den--</option>
                {cities.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <FontAwesomeIcon
                icon={faSortDown}
                className={cx("icon-dropdown")}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Gia Tour</label>
            <CurrencyInput
              value={giaTour}
              placeholder="VD: 100.000.000 VND"
              decimalsLimit={2}
              prefix="VND: "
              onChange={(e) => setGiaTour(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Giam gia</label>
            <CurrencyInput
              value={giamGia}
              placeholder="VD: 100%"
              decimalsLimit={2}
              prefix="%: "
              onChange={(e) => setGiamGia(e.target.value)}
            />{" "}
          </div>
        </div>
        <div className={cx("third-form")}>
          <div className={cx("form-input-file")}>
            <label htmlFor="">Hinh Anh 1</label>
            <input
              className={cx("input-file")}
              type="file"
              name=""
              id=""
              onChange={(e) => setHinhAnh(e.target.files[0])}
            />
          </div>
          <div className={cx("form-input-file")}>
            <label htmlFor="">Hinh Anh 2</label>
            <input
              className={cx("input-file")}
              type="file"
              name=""
              id=""
              onChange={(e) => setHinhAnh1(e.target.files[0])}
            />
          </div>
          <div className={cx("form-input-file")}>
            <label htmlFor="">Hinh Anh 3</label>
            <input
              className={cx("input-file")}
              type="file"
              name=""
              id=""
              onChange={(e) => setHinhAnh2(e.target.files[0])}
            />
          </div>
          <div className={cx("form-input-file")}>
            <label htmlFor="">Hinh Anh 4</label>
            <input
              className={cx("input-file")}
              type="file"
              name=""
              id=""
              onChange={(e) => setHinhAnh3(e.target.files[0])}
            />
          </div>
          <div className={cx("form-input-file")}>
            <label htmlFor="">Hinh Anh 5</label>
            <input
              className={cx("input-file")}
              type="file"
              name=""
              id=""
              onChange={(e) => setHinhAnh4(e.target.files[0])}
            />
          </div>
        </div>
      </div>
      <div className={cx("form-input-text-area")}>
        <label htmlFor="">LichTrinh</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => setLichTrinh(e.target.value)}
          value={lichTrinh}
        ></textarea>
      </div>
      <div className={cx("btn-submit")}>
        <Button type="submit" btnSubmit onClick={handleAddTour}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
