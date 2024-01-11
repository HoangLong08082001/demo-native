import classname from "classnames/bind";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/logoGoogle.png";
import facebook from "../../assets/images/logoFacebook.png";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import axios from "../../setup-axios/axios";
import { toast } from "react-toastify";
import LoginGoogle from "./LoginGoogle";
import { useNavigate } from "react-router-dom";
import img4 from "../../../src/assets/images/slider/img5.jpg";

const cx = classname.bind(styles);
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(true);
  const [show, setShow] = useState(true);
  const handleHideShow = () => {
    setShow(!show);
    setType(!type);
  };
  const checkValidate = () => {
    if (username === "") {
      toast.warning("Vui lòng nhập username");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(username)) {
      toast.warning("Nhập sai định dạng email");
      return false;
    }
    if (password === "") {
      toast.warning("Vui lòng nhập password");
      return false;
    }
    return true;
  };
  const handleLogin = () => {
    let check = checkValidate();
    if (check === true) {
      axios
        .post("/api/login-client", {
          username,
          password,
        })
        .then((res) => {
          if (res.message === "success") {
            localStorage.setItem("account", res.username);
            localStorage.setItem("Ma", res.MaKH);

            navigate(-1);

            toast.success("Đăng nhập thành công");
          } else {
            toast.error("Sai password hoăc username");
          }
        });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${img4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={cx("box-full")}
    >
      <div className={cx("box")}>
        <div className={cx("title")}>
          <p>LOGIN YOUR ACCOUNT</p>
        </div>
        <div className={cx("form-login")}>
          <div className={cx("form-logo")}>
            <img src={logo} alt="loi" />
          </div>
          <label htmlFor="">Email</label>
          <div className={cx("input-form")}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <label htmlFor="">Password</label>
          <div className={cx("input-form")}>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={type === true ? "password" : "text"}
              placeholder="Enter your password"
            />
            <FontAwesomeIcon
              className={cx("icon")}
              icon={show === true ? faEye : faEyeSlash}
              onClick={handleHideShow}
            ></FontAwesomeIcon>
          </div>
          <div className={cx("btn-login")}>
            <Button loginweb onClick={handleLogin}>
              LOGIN
            </Button>
          </div>
          <div className={cx("text")}>
            <p>
              Don't have an account ?{" "}
              <Button to="/register-user" linkregister>
                Register here
              </Button>
              <LoginGoogle />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
