import React, { useRef } from "react";
import style from "./PrintPage.module.scss";
import classNames from "classnames/bind";
import logo from "../../../../src/assets/images/logo.png";
import { ReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faPrint,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function PrintPage({
  clickX,
  khachlon,
  khachnho,
  treem,
  tenKhachHang,
  cmnd,
  dienthoai,
  diachi,
  hinhthuc,
  tongtien,
  tentour,
  ngaydi,
  ngayve,
  makhachhang,
}) {
  var componentRef = useRef(null);
  const handlepdf = () => {
    const input = componentRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(
        `PhieuDatTour_${makhachhang}_${new Date().toLocaleDateString(
          "en-US"
        )}.pdf`
      );
    });
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("ticket")} ref={componentRef}>
        <FontAwesomeIcon
          onClick={clickX}
          className={cx("icon")}
          icon={faXmarkCircle}
        />
        <p className={cx("title")}>HOÁ ĐƠN ĐẶT TOUR</p>
        <img src={logo} alt="" className={cx("logo")} />
        <div className={cx("form-info")}>
          <div className={cx("form")}>
            <div className={cx("left")}>
              <p>Tên công ty :</p>
              <p>Điện thoại :</p>
              <p>Địa chỉ :</p>
              <p>Web :</p>
              <p>Fax :</p>
            </div>
            <div className={cx("right")}>
              <p>TOT-TRAVEL</p>
              <p>0898668731</p>
              <p>180 Đ. Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh</p>
              <p>dattourtravel.com</p>
              <p>32627262 </p>
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
              <p>{tenKhachHang}</p>
              <p className={cx("cmnd")}>{cmnd}</p>
              <p className={cx("dienthoai")}>{dienthoai}</p>
              <p className={cx("diachi")}>{diachi}</p>
              <p>{hinhthuc}</p>
            </div>
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
            <th>NGÀY ĐI</th>
            <th>NGÀY VỀ</th>
            <th>SỐ LƯỢNG KHÁCH ({">"}14 TUỔI)</th>
            <th>SỐ LƯỢNG KHÁCH (5-10 TUỔI)</th>
            <th>SỐ LƯỢNG KHÁCH ({"<"}5 TUỔI)</th>
            <th>TỔNG TIỀN</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{tentour}</td>
            <td>{ngaydi}</td>
            <td>{ngayve}</td>
            <td>{khachlon}</td>
            <td>{khachnho}</td>
            <td>{treem}</td>
            <td>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(tongtien)}
            </td>
          </tr>
        </table>
        <p className={cx("sum")}>
          Tổng cộng:{" "}
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(tongtien)}
        </p>
        <button className={cx("btn-print")} onClick={handlepdf}>
          IN <FontAwesomeIcon icon={faPrint} />
        </button>
      </div>
    </div>
  );
}
