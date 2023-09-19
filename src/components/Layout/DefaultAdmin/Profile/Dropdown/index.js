import React, { useContext } from "react";
import style from "./Dropdown.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../Button";
import { UserContext } from "../../../../../context/UserContext";
import axios from "../../../../../setup-axios/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function Dropdown() {
  const navigator = useNavigate();
  const { user, logoutContext } = useContext(UserContext);
  const handleLogout = async () => {
    let res = await axios.post("/api/logout"); //clear cookies
    localStorage.removeItem("jwt"); //clear localStorage
    logoutContext(); //clear userContext
    if (res.message === "success") {
      toast.success("Logout success");
      navigator("/admin-login");
    }
  };
  return (
    <div className={cx("wrapper")}>
      {user && user.isAuthenticated === true && <p>{user.accout.email}</p>}
      <p>
        <Button btnDetailAdmin to="/">
          DETAIL
        </Button>
      </p>
      <p>
        <Button btnLogoutAdmin onClick={handleLogout}>
          Logout
        </Button>
      </p>
    </div>
  );
}
