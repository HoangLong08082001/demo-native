import React, { useEffect, useState } from "react";
import style from "./Bill.module.scss";
import classNames from "classnames/bind";

import img1 from "../../assets/images/PhuQuoc/pq3.png";
import paypal from "../../assets/images/paypal.png";
import momo from "../../assets/images/momo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleInfo,
  faClock,
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
  faPlane,
  faPlaneArrival,
  faPlaneSlash,
  faPlaneUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Booking from "./Booking";
import Accordion from "./Accordion";
import Rules from "./Rules";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import axios from "../../setup-axios/axios";
import Alert from "../../components/Alert/Alert";
import dateFormat from "dayjs";
const cx = classNames.bind(style);
export default function Bill() {
  const { id, date, giam } = useParams();
  const [value, setData] = useState([]);
  const [valueobject, setDataobject] = useState({});
  const [statuspay, setstatuspay] = useState(null);
  const [statusdk, setstatusdk] = useState(false);
  const [adderror, seterror] = useState(false);
  const [data, setttdata] = useState({});
  let nextpage = 1;
  const [status, setstatus] = useState("Vui Lòng Cung Cấp Thêm Thông Tin");
  useEffect(() => {
    axios
      .post(`tour/alltour/gettourbill`, { MaTour: id, NgayDi: date })
      .then((response) => {
        setData(response.data);
        setDataobject(response.data[0]);
      });
  }, [id]);
  const handlechoosepay = (e) => {
    setstatuspay(e);
  };
  const handlechoosedk = (e) => {
    setstatusdk(e);
  };
  console.log(statuspay);
  const handlebook = () => {
    if (
      data.name === "" ||
      data.email === "" ||
      data.sdt === "" ||
      data.countprice === 0 ||
      statuspay === null ||
      statusdk === false
    ) {
      seterror(true);
    }
    // if(statuspay===0)
    // {
    //     ///tienmat
    // }
    // else if(statuspay===1 && statuspay!=null)
    // {
    //     ///payment
    // }
  };
  const handleclose = () => {
    seterror(false);
  };
  const handlename = (
    name,
    email,
    sdt,
    diachi,
    countprice,
    Person,
    Personmin,
    Personbe
  ) => {
    setttdata({
      name: name,
      email: email,
      sdt: sdt,
      diachi: diachi,
      countprice: countprice,
      person: Person,
      personmin: Personmin,
      personbe: Personbe,
    });
  };
  let arraytdata = [];
  if (data.name == "") {
    nextpage = 0;
    arraytdata.push("Họ Tên  ?");
  } else if (data.email == "") {
    nextpage = 0;
    arraytdata.push("Email  ?");
  } else if (data.sdt == "") {
    nextpage = 0;
    arraytdata.push("Phone  ?");
  } else if (data.diachi == "") {
    nextpage = 0;
    arraytdata.push("Địa Chỉ  ?");
  } else if (data.countprice == 0) {
    nextpage = 0;
    arraytdata.push("Số lượng thành viên ?");
  } else if (data.person === 0) {
    nextpage = 0;
    arraytdata.push("Số lượng thành viên đủ tuổi  ?");
  } else if (statuspay === null) {
    nextpage = 0;
    arraytdata.push("Phương thức thanh toán?");
  } else if (statusdk === false) {
    nextpage = 0;
    arraytdata.push("Chấp thuận điều khoản ?");
  }

  console.log(statuspay);
  return (
    <div className={cx("wrapper")}>
      {value.map((value) => {
        const base64String5 = btoa(
          new Uint8Array(value.HinhAnh.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        const date = value.NgayDi;
        const datenew = dateFormat(date).format("DD/MM/YYYY");
        const price = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(value.GiaTour);
        return (
          <div
            className={cx("wrapper-tour")}
            style={{
              backgroundImage: `url(data:image/jpeg;base64,${base64String5})`,
            }}
          >
            <div
              className={cx("background-tour")}
              style={{
                backgroundImage: `url(data:image/jpeg;base64,${base64String5})`,
              }}
            ></div>
            <div className={cx("background-tour-detail-tittle-css")}>
              <div className={cx("background-tour-detail-tittle")}>
                <div>
                  <h2>{value.TenTour}</h2>
                </div>
              </div>

              <div className={cx("background-tour-detail")}>
                <div>Mã Tour</div>
                <div>{value.LoaiTour + value.MaTour}</div>
              </div>

              <div className={cx("background-tour-detail")}>
                <div>Chỗ Còn Trống</div>
                <div>{value.QuyMo}</div>
              </div>

              <div className={cx("background-tour-detail")}>
                <div>Ngày Khởi Hành</div>
                <div>{datenew}</div>
              </div>

              <div className={cx("background-tour-detail")}>
                <div>Địa Điểm Khởi Hành</div>
                <div>{value.DiaDiemDi}</div>
              </div>

              <div className={cx("background-tour-detail")}>
                <div className={cx("background-tour-detail-price")}>
                  Giá Từ {" " + price}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <p className={cx("title")}>
        Thông Tin Đặt Tour{" "}
        <FontAwesomeIcon style={{ color: "#0d91f5 " }} icon={faCircleInfo} />
      </p>
      <Booking
        Price={valueobject.GiaTour}
        Giam={giam}
        MaTour={valueobject.MaTour}
        callBackname={handlename}
      />
      <p className={cx("title")}>
        Phương Thức Thanh Toán{" "}
        <FontAwesomeIcon style={{ color: "#0d91f5 " }} icon={faCircleInfo} />
      </p>
      <Accordion callBackParent={handlechoosepay} />
      <Rules callBackParent={handlechoosedk} />
      <div className={cx("btn")}>
        {nextpage === 1 ? (
          <Button
            onClick={handlebook}
            underline
            Booking
            to={`/Confirm?name=${data.name}&email=${data.email}&sdt=${data.sdt}&diachi=${data.diachi}&payment=${statuspay}&summoney=${data.countprice}
        &person=${data.person}&personmin=${data.personmin}&personbe=${data.personbe}
        &ngaykhoihanh=${date}&matour=${valueobject.MaTour}&loaitour=${valueobject.LoaiTour}
        &tentour=${valueobject.TenTour}`}
          >
            Đặt Tour
          </Button>
        ) : (
          <Button onClick={handlebook} underline Booking>
            Đặt Tour
          </Button>
        )}
        <Button Cancel>Hủy</Button>
      </div>
      {adderror ? (
        <Alert
          callBackParent={handleclose}
          datatt={arraytdata}
          dataprops={status}
          icon={1}
        />
      ) : (
        ""
      )}
    </div>
  );
}
