import React, { useContext, useEffect, useState } from "react";
import style from "./Tour.module.scss";
import classNames from "classnames/bind";
import { UserContext } from "../../../context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import axios from "../../../setup-axios/axios";
import ReactLoading from "react-loading";
import ExcelJS from "exceljs";
import {
  faCircleInfo,
  faFileExcel,
  faFileExport,
  faInfo,
  faPen,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function Tour() {
  const [check, setCheck] = useState(true);
  const [listTour, setListTour] = useState([]);
  const [api, setApi] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const fetchListTour = async () => {
    let response = await axios.get("/tourserver/getall-tour");
    if (response.message === "success") {
      setListTour(response.data);
      setApi(response.data);
    }
  };
  useEffect(() => {
    fetchListTour();
  }, []);

  const { user } = useContext(UserContext);
  const handleChange = (id) => {
    setCheck(!check);
    console.log(id, check);
  };
  const today = new Date().toLocaleDateString("en-US");
  const handleExportExcel = () => {
    const workBook = new ExcelJS.Workbook();
    const sheet = workBook.addWorksheet("Sheet1");
    sheet.properties.defaultRowHeight = 20;

    sheet.columns = [
      {
        header: "STT",
        key: "stt",
        width: 5,
      },
      {
        header: "Ma Tour",
        key: "matour",
        width: 10,
      },
      {
        header: "Dia diem di",
        key: "diadiemdi",
        width: 10,
      },
      {
        header: "Dia diem den",
        key: "diadiemden",
        width: 10,
      },
      {
        header: "Khu vuc",
        key: "khuvuc",
        width: 10,
      },
      {
        header: "Ngay di",
        key: "ngaydi",
        width: 15,
      },
      {
        header: "Ngay ve",
        key: "ngayve",
        width: 15,
      },
      {
        header: "Gia tour",
        key: "giatour",
        width: 10,
      },
      {
        header: "Loai Tour",
        key: "loaitour",
        width: 10,
      },
      {
        header: "Giam Gia",
        key: "giamgia",
        width: 10,
      },
    ];
    listTour.map((list, index) => {
      sheet.addRow({
        stt: index + 1,
        matour: list.MaTour,
        loaitour: list.LoaiTour,
        diadiemdi: list.DiaDiemDi,
        diadiemden: list.DiaDiemDen,
        khuvuc: list.vungMien,
        ngaydi: new Date(list.NgayDi).toLocaleDateString("en-US"),
        ngayve: new Date(list.NgayVe).toLocaleDateString("en-US"),
        giatour: list.GiaTour,
        giamgia: list.GiamGia,
      });
    });
    workBook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `LIST_Tour_${today}.xlsx`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };
  if (user && user.isAuthenticated === true) {
    if (
      user.accout.position === "DEV" ||
      user.accout.position === "DUYET PHIEU TOUR" ||
      user.accout.position === "KẾ TOÁN" ||
      user.accout.position === "QUẢN LÝ TOUR"
    ) {
      return (
        <div className={cx("wrapper")}>
          <Link to="/them-tour">
            <button className={cx("btn-add")}>
              THÊM TOUR <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            </button>
          </Link>
          <button className={cx("btnExcel")} onClick={handleExportExcel}>
            XUẤT EXCEL <FontAwesomeIcon icon={faFileExcel}></FontAwesomeIcon>
          </button>

          <div className={cx("search")}>
            <input
              type="text"
              name=""
              id=""
              placeholder="search employee"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={cx("tab-pannel")}>
            <button
              onClick={() => setTab(1)}
              className={tab === 1 ? cx("tab-active") : cx("tab")}
            >
              Tour mới
            </button>
            <button
              onClick={() => setTab(2)}
              className={tab === 2 ? cx("tab-active") : cx("tab")}
              style={{ marginLeft: "10px" }}
            >
              Tour đã hết hạn
            </button>
          </div>
          {tab === 1 && (
            <div className={cx("form-table")}>
              {api ? (
                <table border={1} cellSpacing={0}>
                  <tr>
                    <th>STT</th>
                    <th>Mã tour</th>
                    <th>Địa điểm đi</th>
                    <th>Địa điểm đến</th>
                    <th>Khu vực</th>
                    <th>Ngày đi</th>
                    <th>Ngày về</th>
                    <th>Giá tour</th>
                    <th>Loại tour</th>
                    <th>Action</th>
                  </tr>
                  {
                    /* `listTour` is a state variable that stores an array of tour objects. It is used to
              display the list of tours in the table on the UI. */
                    listTour
                      .filter((list) => {
                        return search.toUpperCase() === "" ||
                          search.toLowerCase() === ""
                          ? list
                          : list.LoaiTour.toUpperCase().includes(search) ||
                              list.LoaiTour.toLowerCase().includes(search) ||
                              list.LoaiTour.includes(search) ||
                              list.DiaDiemDen.toLowerCase().includes(search) ||
                              list.DiaDiemDen.toUpperCase().includes(search) ||
                              list.DiaDiemDen.includes(search) ||
                              list.DiaDiemDi.toLowerCase().includes(search) ||
                              list.DiaDiemDi.toUpperCase().includes(search) ||
                              list.DiaDiemDi.includes(search) ||
                              list.vungMien.toLowerCase().includes(search) ||
                              list.vungMien.toUpperCase().includes(search) ||
                              list.vungMien.includes(search);
                      })
                      .map((list, index) => {
                        let ngaydi = new Date(list.NgayDi).toLocaleDateString(
                          "en-US"
                        );
                        let conditionNgayVe = new Date(list.NgayVe);
                        let conditionToday = new Date();
                        let homnay = new Date().toLocaleDateString("en-US");
                        let ngayve = new Date(list.NgayVe).toLocaleDateString(
                          "en-US"
                        );
                        if (conditionNgayVe >= conditionToday) {
                          return (
                            <tr key={index} className={cx("tr")}>
                              <td>{index + 1}</td>
                              <td>
                                {list.LoaiTour}
                                {list.MaTour}
                              </td>
                              <td>{list.DiaDiemDi}</td>
                              <td>{list.DiaDiemDen}</td>
                              <td>{list.vungMien}</td>
                              <td>{ngaydi}</td>
                              <td>{ngayve}</td>
                              <td>
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(list.GiaTour)}
                              </td>
                              <td>{list.LoaiTour}</td>
                              <td>
                                <button
                                  className={cx("btnInfo")}
                                  onClick={() =>
                                    navigate("/chi-tiet-tour", { state: list })
                                  }
                                >
                                  <FontAwesomeIcon
                                    className={cx("icon-info")}
                                    icon={faInfo}
                                  ></FontAwesomeIcon>
                                </button>
                                <button
                                  className={cx("btnUpdate")}
                                  onClick={() =>
                                    navigate(
                                      `/sua-tour/${list.TenTour}/${list.MaTour}`,
                                      { state: list }
                                    )
                                  }
                                >
                                  <FontAwesomeIcon
                                    className={cx("icon-pen")}
                                    icon={faPen}
                                  ></FontAwesomeIcon>
                                </button>
                              </td>
                            </tr>
                          );
                        }
                      })
                  }
                </table>
              ) : (
                <>
                  <ReactLoading
                    type={"spin"}
                    color="#808080"
                    height={"5%"}
                    width={"5%"}
                    className={cx("loading")}
                  />
                  <h2>Loading data...</h2>
                </>
              )}
            </div>
          )}
          {tab === 2 && (
            <div className={cx("form-table")}>
              {api ? (
                <table border={1} cellSpacing={0}>
                  <tr>
                    <th>STT</th>
                    <th>Mã tour</th>
                    <th>Địa điểm đi</th>
                    <th>Địa điểm đến</th>
                    <th>Khu vực</th>
                    <th>Ngày đi</th>
                    <th>Ngày về</th>
                    <th>Giá tour</th>
                    <th>Loại tour</th>
                    <th>Action</th>
                  </tr>
                  {
                    /* `listTour` is a state variable that stores an array of tour objects. It is used to
              display the list of tours in the table on the UI. */
                    listTour
                      .filter((list) => {
                        return search.toUpperCase() === "" ||
                          search.toLowerCase() === ""
                          ? list
                          : list.LoaiTour.toUpperCase().includes(search) ||
                              list.LoaiTour.toLowerCase().includes(search) ||
                              list.LoaiTour.includes(search) ||
                              list.DiaDiemDen.toLowerCase().includes(search) ||
                              list.DiaDiemDen.toUpperCase().includes(search) ||
                              list.DiaDiemDen.includes(search) ||
                              list.DiaDiemDi.toLowerCase().includes(search) ||
                              list.DiaDiemDi.toUpperCase().includes(search) ||
                              list.DiaDiemDi.includes(search) ||
                              list.vungMien.toLowerCase().includes(search) ||
                              list.vungMien.toUpperCase().includes(search) ||
                              list.vungMien.includes(search);
                      })
                      .map((list, index) => {
                        let ngaydi = new Date(list.NgayDi).toLocaleDateString(
                          "en-US"
                        );
                        let conditionNgayDi = new Date(list.NgayDi);
                        let conditionNgayVe = new Date(list.NgayVe);
                        let conditionToday = new Date();
                        let homnay = new Date();
                        let ngayve = new Date(list.NgayVe).toLocaleDateString(
                          "en-US"
                        );
                        if (conditionNgayVe < conditionToday) {
                          return (
                            <tr key={index} className={cx("tr")}>
                              <td>{index + 1}</td>
                              <td>
                                {list.LoaiTour}
                                {list.MaTour}
                              </td>
                              <td>{list.DiaDiemDi}</td>
                              <td>{list.DiaDiemDen}</td>
                              <td>{list.vungMien}</td>
                              <td>{ngaydi}</td>
                              <td>{ngayve}</td>
                              <td>
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(list.GiaTour)}
                              </td>
                              <td>{list.LoaiTour}</td>
                              <td>
                                <button
                                  className={cx("btn-Info")}
                                  onClick={() =>
                                    navigate("/chi-tiet-tour", { state: list })
                                  }
                                >
                                  <FontAwesomeIcon
                                    className={cx("icon-info")}
                                    icon={faInfo}
                                  ></FontAwesomeIcon>
                                </button>
                                {/* <button
                                  className={cx("btnUpdate")}
                                  onClick={() =>
                                    navigate(
                                      `/sua-tour/${list.TenTour}/${list.MaTour}`,
                                      { state: list }
                                    )
                                  }
                                >
                                  <FontAwesomeIcon
                                    className={cx("icon-pen")}
                                    icon={faPen}
                                  ></FontAwesomeIcon>
                                </button> */}
                              </td>
                            </tr>
                          );
                        }
                      })
                  }
                </table>
              ) : (
                <>
                  <ReactLoading
                    type={"spin"}
                    color="#808080"
                    height={"5%"}
                    width={"5%"}
                    className={cx("loading")}
                  />
                  <h2>Loading data...</h2>
                </>
              )}
            </div>
          )}
        </div>
      );
    }
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
