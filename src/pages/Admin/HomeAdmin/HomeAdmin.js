import React, { useContext, useEffect } from "react";
import style from "./HomeAdmin.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import Chart from "chart.js";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import ChartOne from "./Chart";
import TableStatitical from "./Statistical";
import ChartTwo from "./Chart/ChartTwo";
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
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("dash-up")}>
          <div className={cx("list-statifies")}>
            <div className={cx("item-up")}>
              <div
                className={cx("item-statifies")}
                style={{ backgroundColor: "#92A8D1" }}
              >
                <p>Customer</p>
                <span>45.000</span>
              </div>
              <div
                className={cx("item-statifies")}
                style={{ backgroundColor: "#0049B7" }}
              >
                <p>Customer</p>
                <span>45.000</span>
              </div>
              <div
                className={cx("item-statifies")}
                style={{ backgroundColor: "#ff1d58" }}
              >
                <p>Customer</p>
                <span>45.000</span>
              </div>
              <div
                className={cx("item-statifies")}
                style={{ backgroundColor: "#88B04B" }}
              >
                <p>Customer</p>
                <span>45.000</span>
              </div>
            </div>
            
            <div className={cx("item-down")}>
              <TableStatitical />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
