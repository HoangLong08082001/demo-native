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
  const nextThree = new Date();
  nextThree.setDate(nextThree.getDate() + 4);
  const today = nextThree.toLocaleDateString("sv-SE");
  const vehicles = ["Xe Khách", "Máy bay"];
  const [country, setCountry] = useState("Loai Tour");
  const [state, setState] = useState("Khu Vuc");
  const [city, setCity] = useState("");
  const [diaDiemDi, setDiaDiemDi] = useState("");
  const [TenTour, setTenTour] = useState(`Tour du lịch ${diaDiemDi}-${city}`);
  const [ngayDi, setNgayDi] = useState("");
  const [ngayVe, setNgayVe] = useState("");
  const [phuongTien, setPhuongTien] = useState("");
  const [quyMo, setQuyMo] = useState("");
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
  const [lichTrinhs, setLichTrinhs] = useState([
    lichTrinh1,
    lichTrinh2,
    lichTrinh3,
    lichTrinh4,
    lichTrinh5,
    lichTrinh6,
    lichTrinh7,
  ]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [giamgia, setGiamGia] = useState([]);
  const [giamgiathem, setGiamGiaThem] = useState([]);
  const [giam, setGiam] = useState(0);
  const [giamthem, setGiamthem] = useState(0);
  const [maxDay, setMaxDay] = useState("");
  console.log(diaDiemDi);
  console.log(city);
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

  const handleChange = (event) => {
    setCountry(event.target.value);
    setStates(
      countries.find((item) => item.name === event.target.value).states
    );
  };
  function tinhSoNgay(ngayDi, ngayVe) {
    // Chuyển đổi chuỗi ngày thành đối tượng Date
    let dateDi = new Date(ngayDi);
    let dateVe = new Date(ngayVe);

    // Tính số mili giây giữa hai ngày
    let soMiligiayGiua = dateVe - dateDi;

    // Chuyển đổi số mili giây thành số ngày
    let soNgay = Math.floor(soMiligiayGiua / (1000 * 60 * 60 * 24));

    return soNgay;
  }
  const CheckValidate = () => {
    let soNgay = tinhSoNgay(ngayDi, ngayVe);

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
    if (lichTrinh1 === "") {
      toast.warning("Vui lòng nhập ít nhất 1 lịch trình");
      return false;
    }
    // for (let i = 1; i <= lichTrinhs.length; i++) {
    //     if (lichTrinhs[i] === "" && i < soNgay) {
    //       toast.warning(`Vui long nhap du ${soNgay} lich trinh`);
    //       return false;
    //     }
    //     return true;
    // }
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
      fd.append("num", quyMo);
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
      console.log(TenTour);
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
  const handleInputChange = (e) => {
    // Lọc ra chỉ các chữ số và dấu chấm
    const inputValue = e.target.value.replace(/[^\d.]/g, "");

    // Kiểm tra xem có nhiều hơn một dấu chấm không
    if (inputValue.split(".").length <= 2) {
      setGiaTour(inputValue);
    }
  };

  const handleChange2 = (event) => {
    setState(event.target.value);
    setCities(states.find((state) => state.name === event.target.value).cities);
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
              readOnly
              type="text"
              value={`Tour du lịch ${diaDiemDi}-${city}`}
              name="char"
              onChange={(e) => setTenTour(e.target.value)}
            />
            <input
              type="date"
              min={today}
              value={ngayDi}
              name="date"
              onChange={(e) => {
                let startDay = new Date(e.target.value);
                let endDay = new Date(ngayVe);
                if (startDay > endDay) {
                  toast.warning("Ngày đi phải trước ngày về!");
                } else {
                  setNgayDi(e.target.value);
                }
              }}
            />
            <input
              type="date"
              value={ngayVe}
              min={ngayDi !== "" ? ngayDi : today}
              max={maxDate().toLocaleDateString("sv-SE")}
              name="date"
              onChange={(e) => {
                if (ngayDi === "") {
                  toast.warning("Vui chọn ngày đi trước khi chọn ngày về!");
                  setNgayDi("");
                } else {
                  setNgayVe(e.target.value);
                }
              }}
            />
            <input
              type="text"
              maxlength="3"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              value={quyMo}
              name="num"
              placeholder="VD:100"
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
              placeholder="VD:1000000"
              onChange={handleInputChange}
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
            <input
              type="text"
              name="char"
              placeholder="VD: TP.HCM"
              value={diaDiemDi}
              onChange={(e) => setDiaDiemDi(e.target.value)}
            />
            <input
              type="text"
              placeholder="VD: TP.HCM"
              id=""
              name="select"
              value={city}
              onChange={(e) => {
                if (diaDiemDi === "") {
                  toast.warning("Vui lòng nhập địa điểm đi trước");
                  setCity("");
                } else {
                  setCity(e.target.value);
                }
              }}
            />

            <select
              name="select"
              id=""
              value={giam}
              onChange={(e) => handleChangeGiamGia(e.target.value)}
            >
              <option value={0}> Giảm giá tự động</option>
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
            <select
              name="select"
              id=""
              value={giamthem}
              onChange={(e) => handleChangeGiamGiaThem(e.target.value)}
            >
              <option value={0}> Giảm giá thêm</option>
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
