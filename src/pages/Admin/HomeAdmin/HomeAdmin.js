import React, { useContext, useEffect } from "react";
import style from "./HomeAdmin.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import Chart from "./Chart";
import Statistical from "./Statistical";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
const cx = classNames.bind(style);
export default function HomeAdmin() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const handle = () => {
    setActive(!active);
  };
  // useEffect(() => {
  //   console.log(user);
  //   let session = sessionStorage.getItem("account");
  //   if (!session) {
  //     navigate("/admin-login");
  //   }
  // }, []);
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <div className="btn-service">
          {active === true ? (
            <Button onClick={handle} servicebtn>
              CHART
            </Button>
          ) : (
            <Button onClick={handle} activeitem>
              CHART
            </Button>
          )}
          {active === true ? (
            <Button onClick={handle} activeitem>
              STATISTICAL
            </Button>
          ) : (
            <Button onClick={handle} servicebtn>
              STATISTICAL
            </Button>
          )}
        </div>
        <div className={cx("content")}>
          {active === true ? <Statistical /> : <Chart />}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
