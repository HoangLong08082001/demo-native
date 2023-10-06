import React, { useContext, useState } from "react";
import style from "./DefaultAdmin.module.scss";
import classNames from "classnames/bind";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import axios from "../../../setup-axios/axios";
import { UserContext } from "../../../context/UserContext";

const cx = classNames.bind(style);
export default function DefaultAdmin({ children }) {
  const { logoutContext } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = useState("");
  const handleClock = async () => {
    let response = await axios.post("/api/lock");
    localStorage.removeItem("jwt"); //clear localStorage
    if (response && response.message === "success") {
      setOpen(true);
    }
  };
  return (
    <div className={cx("all")}>
      <div className={cx("wrapper")}>
        <Sidebar />
        <div className={cx("container")}>
          <Profile lock={handleClock} />
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
