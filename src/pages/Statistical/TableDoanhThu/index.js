import React, { useContext, useEffect, useState } from "react";
import style from "./TableDoanhThu.module.scss";
import classNames from "classnames/bind";
import axios from "../../../setup-axios/axios";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
import ExcelJS from "exceljs";
const cx = classNames.bind(style);
export default function TableDoanhThu() {
  const thongke = [
    { id: 1, name: "Tháng" },
    { id: 2, name: "Quý" },
  ];
  const [listDoanhThu, setListDoanhThu] = useState([]);
  const [listDoanhThuMonth, setListDoanhThuMonth] = useState([]);
  const [listDoanhThuQuarter, setListDoanhThuQuarter] = useState([]);
  const [tab, setTab] = useState("");
  const fetchAll = async () => {
    await axios.get("/statistical/statis-doanhthu").then((res) => {
      if (res && res.message === "success") {
        setListDoanhThu(res.data);
        console.log(res.data);
      }
    });
  };
  const fetchMonth = async () => {
    await axios.get("/condition/doanhthu-thang").then((res) => {
      if (res && res.message === "success") {
        setListDoanhThuMonth(res.data);
        console.log(res.data);
      }
    });
  };
  const fetchQuarter = async () => {
    await axios.get("/condition/doanhthu-quy").then((res) => {
      if (res && res.message === "success") {
        setListDoanhThuQuarter(res.data);
        console.log(res.data);
      }
    });
  };
  useEffect(() => {
    fetchAll();
    fetchMonth();
    fetchQuarter();
  }, []);
  const sum = () => {
    let t = 0;
    for (let i = 0; i < listDoanhThu.length; i++) {
      t = t + listDoanhThu[i].tongtien;
    }
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(t);
  };
  const summonth = () => {
    let t = 0;
    for (let i = 0; i < listDoanhThuMonth.length; i++) {
      t = t + listDoanhThuMonth[i].tongtien;
    }
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(t);
  };
  const handleChange = (e) => {
    setTab(e);
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
        header: "TONG DOANH THU",
        key: "tongtien",
        width: 10,
      },
    ];
    listDoanhThuMonth.map((list1, index1) => {
      sheet.addRow({
        stt: index1 + 1,
        thang: list1.thang + "/" + list1.nam,
        tongtien: list1.tongtien,
      });
    });
    workBook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `DOANHTHU_THANG_${today}.xlsx`;
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
        header: "TONG DOANH THU",
        key: "tongtien",
        width: 10,
      },
    ];
    listDoanhThuQuarter.map((list1, index1) => {
      sheet.addRow({
        stt: index1 + 1,
        quy: list1.quy + "/" + list1.nam,
        tongtien: list1.tongtien,
      });
    });
    workBook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `DOANHTHU_QUY_${today}.xlsx`;
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
                <th>Tháng/Năm</th>
                <th>Tổng doanh thu</th>
              </tr>
              {listDoanhThu.map((d, i) => {
                return (
                  <tr>
                    <td>
                      {d.thang}/{d.nam}
                    </td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(d.tongtien)}
                    </td>
                  </tr>
                );
              })}
            </table> */}
              </div>
              <p className={cx("sum")}>TỔNG DOANH THU: {sum()}</p>
            </div>
          )}
          {+tab === 1 && (
            <div>
              <button className={cx("btn-excel")} onClick={exportExcel1}>XUẤT EXCEL</button>
              <div className={cx("wrapper")}>
                <table border={1} cellSpacing={0}>
                  <tr style={{ background: "red" }}>
                    <th>Tháng/Năm</th>
                    <th>Tổng doanh thu</th>
                  </tr>
                  {listDoanhThuMonth.map((d, i) => {
                    return (
                      <tr>
                        <td>
                          {d.thang}/{d.nam}
                        </td>
                        <td>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(d.tongtien)}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          )}
          {+tab === 2 && (
            <div>
              <button className={cx("btn-excel")} onClick={exportExcel2}>XUẤT EXCEL</button>
              <div className={cx("wrapper")}>
                <table border={1} cellSpacing={0}>
                  <tr style={{ background: "red" }}>
                    <th>Quý/Năm</th>
                    <th>Tổng doanh thu</th>
                  </tr>
                  {listDoanhThuQuarter.map((d, i) => {
                    return (
                      <tr>
                        <td>
                          {d.quy}/{d.nam}
                        </td>
                        <td>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(d.tongtien)}
                        </td>
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
