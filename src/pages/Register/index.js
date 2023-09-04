import classname from "classnames/bind";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/logoGoogle.png";
import facebook from "../../assets/images/logoFacebook.png";
import styles from "./Register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
const cx = classname.bind(styles);
function Register() {
  const [type, setType] = useState(true);
  const [show, setShow] = useState(true);
  const [typeConfirm, setTypeConfirm] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const handleHideShow = () => {
    setShow(!show);
    setType(!type);
  };
  const handleHideShowConfirm = () => {
    setShowConfirm(!showConfirm);
    setTypeConfirm(!typeConfirm);
  };
  return (
    <div className={cx("box")}>
      <div className={cx("title")}>
        <p>CREATE YOUR ACCOUNT</p>
      </div>
      <div className={cx("form-login")}>
        <div className={cx("form-logo")}>
          <img src={logo} alt="loi" />
        </div>
        <label htmlFor="">Username</label>
        <div className={cx("input-form")}>
          <input type="text" placeholder="Enter your username" />
        </div>
        <label htmlFor="">Password</label>
        <div className={cx("input-form")}>
          <input
            type={type === true ? "password" : "text"}
            placeholder="Enter your password"
          />
          <FontAwesomeIcon
            className={cx("icon")}
            icon={show === true ? faEye : faEyeSlash}
            onClick={handleHideShow}
          ></FontAwesomeIcon>
        </div>
        <label htmlFor="">Confirm Password</label>
        <div className={cx("input-form")}>
          <input
            type={typeConfirm === true ? "password" : "text"}
            placeholder="Confirm your password"
          />
          <FontAwesomeIcon
            className={cx("icon")}
            icon={showConfirm === true ? faEye : faEyeSlash}
            onClick={handleHideShowConfirm}
          ></FontAwesomeIcon>
        </div>
        <div className={cx("btn-login")}>
          <Button loginweb>CREATE</Button>
        </div>
        <div className={cx("text")}>
          <p>
            Don't have an account ?{" "}
            <Button to="/login" linkregister>
              login here
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
