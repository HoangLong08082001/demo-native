import React, { useContext, useEffect, useState } from "react";
import style from "./TableTour.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import ExcelJS from "exceljs";
const cx = classNames.bind(style);
export default function TableTour() {
  const thongke = [
    { id: 1, name: "Tháng" },
    { id: 2, name: "Quý" },
  ];
  const [listsour, setListtour] = useState([]);
  const [listtourmonth, setListTourMonth] = useState([]);
  const [listTourQuarter, setListTourQuarter] = useState([]);
  const [tab, setTab] = useState("");
  const fetchAll = async () => {
    await axios.get("/statistical/statis-soluongtour").then((res) => {
      if (res && res.message === "success") {
        setListtour(res.data);
        console.log(res.data);
      }
    });
  };
  const fetchTourMonth = async () => {
    await axios.get("/condition/soluongtour-thang").then((res) => {
      if (res && res.message === "success") {
        setListTourMonth(res.data);
      }
    });
  };
  const fetchTourQuarter = async () => {
    await axios.get("/condition/soluongtour-quy").then((res) => {
      if (res && res.message === "success") {
        setListTourQuarter(res.data);
      }
    });
  };
  const handleChange = (e) => {
    setTab(e);
  };
  useEffect(() => {
    fetchAll();
    fetchTourMonth();
    fetchTourQuarter();
  }, []);
  const sum = () => {
    let t = 0;
    for (let i = 0; i < listsour.length; i++) {
      t = t + listsour[i].so_luong_tour;
    }
    return t;
  };
  const today = new Date().toLocaleDateString("en-US");
  const exportExcel1 = () => {
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
        header: "THANG",
        key: "thang",
        width: 5,
      },
      {
        header: "SO LUONG TOUR THEO THANG",
        key: "soluong",
        width: 10,
      },
    ];
    listtourmonth.map((list1, index1) => {
      sheet.addRow({
        stt: index1 + 1,
        thang: list1.thang + "/" + list1.nam,
        soluong: list1.so_luong_tour,
      });
    });
    workBook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `SOLUONGTOUR_THANG_${today}.xlsx`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };
  const exportExcel2 = () => {
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
        header: "QUY",
        key: "quy",
        width: 5,
      },
      {
        header: "SO LUONG TOUR THEO QUY",
        key: "soluong",
        width: 10,
      },
    ];
    listTourQuarter.map((list1, index1) => {
      sheet.addRow({
        stt: index1 + 1,
        quy: list1.quy + "/" + list1.nam,
        soluong: list1.so_luong_tour,
      });
    });
    workBook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `SOLUONGTOUR_QUY_${today}.xlsx`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    if (user.accout.position === "KẾ TOÁN") {
      return (
        <>
          <div className={cx("filter")}>
            <select
              name=""
              id=""
              value={tab}
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value={0}>Tất cả</option>
              {thongke.map((op, i) => {
                return (
                  <option key={i} value={op.id}>
                    {op.name}
                  </option>
                );
              })}
            </select>
          </div>
          {+tab === 0 && (
            <div>
              <div className={cx("wrapper")}>
                {/* <table border={1} cellSpacing={0}>
              <tr style={{ background: "red" }}>
                <th>Tháng</th>
                <th>Số lượng tour</th>
              </tr>
              {listsour.map((t, i) => {
                return (
                  <tr>
                    <td>
                      {t.thang}/{t.nam}
                    </td>
                    <td>{t.so_luong_tour}</td>
                  </tr>
                );
              })}
            </table> */}
              </div>
              <p className={cx("sum")}>TỔNG SỐ LƯỢNG TOUR: {sum()}</p>
            </div>
          )}
          {+tab === 1 && (
            <div>
              <button className={cx("btn-excel")} onClick={exportExcel1}>
                XUẤT EXCEL
              </button>
              <div className={cx("wrapper")}>
                <table border={1} cellSpacing={0}>
                  <tr style={{ background: "red" }}>
                    <th>Tháng</th>
                    <th>Số lượng tour</th>
                  </tr>
                  {listtourmonth.map((t, i) => {
                    return (
                      <tr>
                        <td>
                          {t.thang}/{t.nam}
                        </td>
                        <td>{t.so_luong_tour}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          )}
          {+tab === 2 && (
            <div>
              <button className={cx("btn-excel")} onClick={exportExcel2}>
                XUẤT EXCEL
              </button>
              <div className={cx("wrapper")}>
                <table border={1} cellSpacing={0}>
                  <tr style={{ background: "red" }}>
                    <th>Quý</th>
                    <th>Số lượng tour</th>
                  </tr>
                  {listTourQuarter.map((t, i) => {
                    return (
                      <tr>
                        <td>
                          {t.quy}/{t.nam}
                        </td>
                        <td>{t.so_luong_tour}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          )}
        </>
      );
    }
  } else {
    <Navigate to="/admin-login"></Navigate>;
  }
}
