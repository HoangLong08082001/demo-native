import React, { useContext, useEffect } from "react";
import style from "./HomeAdmin.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import { Chart } from "react-google-charts";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const cx = classNames.bind(style);

export default function HomeAdmin() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(user);
  //   let local = localStorage.getItem("jwt");
  //   if (!local) {
  //     navigate("/admin-login");
  //   }
  // }, []);
  const data = [
    ["MONTH", "THANG 10", "THANG 11", "THANG 12"],
    [10, 12, 30, 11],
    [11, 5, 7, 4],
    [12, 2, 17, 24],
  ];
  const options = {
    chart: {},
  };
  const data1 = [
    ["City", "NAM 2023 Tang Truong", "NAM 2024 Tang Tuong"],
    ["Phu Quoc", 8175000, 8008000],
    ["Da Lat", 3792000, 3694000],
    ["Da Nang", 2695000, 2896000],
    ["Ha Noi", 2099000, 1953000],
    ["Ca Mau", 1526000, 1517000],
  ];
  const option1 = {
    chartArea: { width: "80%" },
    hAxis: {
      minValue: 0,
    },
  };
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("list-stati")}>
          <div className={cx("stati")}>
            <p>NHAN VIEN</p>
            <p>10</p>
          </div>
          <div className={cx("stati")}>
            <p>NHAN VIEN</p>
            <p>10</p>
          </div>
          <div className={cx("stati")}>
            <p>NHAN VIEN</p>
            <p>10</p>
          </div>
          <div className={cx("stati")}>
            <p>NHAN VIEN</p>
            <p>10</p>
          </div>
        </div>
        <div className={cx("list-chart1")}>
          <p className={cx("title")}>
            BIEU DO DUONG TANG TUONG QUY 4 (NAM 2023)
          </p>
          <div className={cx("chart1")}>
            <Chart
              chartType="Line"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        </div>
        <div className={cx("list-chart1")}>
          <p className={cx("title")}>
            BIEU DO COT TANG TUONG CUOI NAM 2023 VA DAU NAM 2024
          </p>
          <div className={cx("chart1")}>
            <Chart
              chartType="BarChart"
              width="100%"
              height="400px"
              data={data1}
              options={option1}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
