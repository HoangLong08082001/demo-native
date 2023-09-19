import React, { useContext, useState } from "react";
import style from "./LoginAdmin.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faE,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import axios from "../../../setup-axios/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const cx = classNames.bind(style);
export default function LoginAdmin() {
  const { loginContext } = useContext(UserContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleShowHide = () => {
    setShow(!show);
  };
  const handleLogin = () => {
    axios
      .post("/api/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.message === "success") {
          let email = res.email;
          let roles = res.data;
          let data = {
            isAuthenticated: true,
            token: res.access_token,
            accout: { email, roles },
          };
          loginContext(data);
          localStorage.setItem("jwt", res.access_token);
          toast.success("Login success");
          navigate("/admin-home");
        } else {
          toast.error("Wrong password or username");
        }
      });
  };

  return (
    <div className={cx("wrapper")}>
      <p>
        LOGIN FOR EMPLOYEE <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
      </p>
      <div className={cx("form")}>
        <div className={cx("form-input")}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className={cx("form-input")}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show === false ? "text" : "password"}
            placeholder="Enter your password"
          />
          <FontAwesomeIcon
            onClick={handleShowHide}
            className={cx("icon")}
            icon={show === true ? faEye : faEyeSlash}
          ></FontAwesomeIcon>
        </div>
        <div className={cx("form-input")}>
          <Button loginadmin onClick={handleLogin}>
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
}
