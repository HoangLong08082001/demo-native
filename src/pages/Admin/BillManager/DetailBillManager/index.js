import React, { useContext, useEffect, useState } from "react";
import style from "./DetailBillManager.module.scss";
import classNames from "classnames/bind";
import axios from "../../../../setup-axios/axios";
import logo from "../../../../../src/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import PrintPage from "../../PrintPage";
const cx = classNames.bind(style);
export default function DetailBillManager() {
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [bill, setBill] = useState([]);
  const fetchBillById = async () => {
    await axios.get(`/hoadon/get-hoadonbyid/${id}`).then((res) => {
      if (res && res.message === "success") {
        console.log(res.data[0]);
        setBill(res.data[0]);
      }
    });
  };
  useEffect(() => {
    fetchBillById();
  }, []);
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <p className={cx("title")}>HOÁ ĐƠN ĐẶT TOUR</p>
        <img src={logo} alt="" className={cx("logo")} />
        <div className={cx("form")}>
          <div className={cx("left")}>
            <p>Tên công ty :</p>
            <p>Điện thoại :</p>
            <p>Địa chỉ :</p>
            <p>Web :</p>
            <p>Email :</p>
          </div>
          <div className={cx("right")}>
            <p>TOT-TRAVEL</p>
            <p>0898668731</p>
            <p>180 Đ. Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh</p>
            <p>dattourtravel.com</p>
            <p>Email :</p>
          </div>
        </div>
        <div className={cx("form")}>
          <div className={cx("left")}>
            <p>Tên khách hàng :</p>
            <p>Số CMND :</p>
            <p>Điện thoại :</p>
            <p>Địa chỉ :</p>
            <p>Hình thức thanh toán :</p>
          </div>
          <div className={cx("right")}>
            <p>{bill.TenKH}</p>
            <p>{bill.CMND}</p>
            <p>{bill.Sdt}</p>
            <p>{bill.DiaChi}</p>
            <p>{bill.HinhThucThanhToan}</p>
          </div>
        </div>
        <table border={1} cellSpacing={0}>
          <tr
            style={{
              color: "black",
              fontWeight: "900",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            <th>STT</th>
            <th>TÊN TOUR</th>
            <th>SỐ LƯỢNG KHÁCH ({">"}14 TUỔI)</th>
            <th>SỐ LƯỢNG KHÁCH (5-10 TUỔI)</th>
            <th>SỐ LƯỢNG KHÁCH ({"<"}5 TUỔI)</th>
            <th>TỔNG TIỀN</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{bill.TenTour}</td>
            <td>{bill.NguoiLon}</td>
            <td>{bill.TreEm}</td>
            <td>{bill.EmBe}</td>
            <td>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(bill.Tongtien)}
            </td>
          </tr>
        </table>
        <p className={cx("sum")}>
          Tổng cộng:{" "}
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(bill.Tongtien)}
        </p>
        <div className={cx("btn")}>
          <Link to="/hoa-don">
            <button className={cx("btn-back")}>
              TRỞ LẠI <FontAwesomeIcon icon={faRotateLeft} />
            </button>
          </Link>
          <button className={cx("btn-print")} onClick={() => setShow(!show)}>
            IN HOÁ ĐƠN <FontAwesomeIcon icon={faPrint} />
          </button>
        </div>
        {show === true && (
          <PrintPage
            clickX={() => setShow(false)}
            khachlon={bill.NguoiLon}
            khachnho={bill.TreEm}
            treem={bill.EmBe}
            tenKhachHang={bill.TenKH}
            cmnd={bill.CMND}
            dienthoai={bill.Sdt}
            diachi={bill.DiaChi}
            hinhthuc={bill.HinhThucThanhToan}
            tongtien={bill.Tongtien}
            tentour={bill.TenTour}
          />
        )}
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
