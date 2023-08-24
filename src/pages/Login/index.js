import classname from "classnames/bind";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/logoGoogle.png";
import facebook from "../../assets/images/logoFacebook.png";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
const cx = classname.bind(styles);
function Login() {
  const [type, setType] = useState(true);
  const [show, setShow] = useState(true);
  const handleHideShow = () => {
    setShow(!show);
    setType(!type);
  };
  return (
    <div className={cx("box")}>
      <div className={cx("title")}>
        <p>LOGIN YOUR ACCOUNT</p>
      </div>
      <form action="">
        <div className={cx("logo-form")}>
          <img src={logo} alt="" />
        </div>
        <div className={cx("form-input")}>
          <label htmlFor="">Username</label>
          <input type="text" name="" id="" placeholder="Enter your username" />
        </div>
        <div className={cx("password-input")}>
          <label htmlFor="">Password</label>

          <FontAwesomeIcon
            onClick={handleHideShow}
            className={cx("show-pass")}
            icon={show === true ? faEyeSlash : faEye}
          ></FontAwesomeIcon>
          <input
            type={type === true ? "password" : "text"}
            name=""
            id=""
            placeholder="Enter your password"
          />
        </div>
        <div className={cx("btn-login")}>
          <Button loginweb>LOGIN</Button>
        </div>
        <div className={cx("text")}>
          <p>
            <Button forgotPass to="/">
              Forgot Password?
            </Button>
          </p>
          <p>
            Don't have an account?{" "}
            <Button linkregister to="/register">
              Register here
            </Button>
          </p>
        </div>
        <div className={cx("login-service")}>
          <div className={cx("circle")}>
            <img src={google} alt="" />
          </div>
          <div className={cx("circle")}>
            <img src={facebook} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
