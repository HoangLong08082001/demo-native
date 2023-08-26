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
      <form action="">
        <div className={cx("logo-form")}>
          <img src={logo} alt="" />
        </div>
        <div className={cx("form-input")}>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder="Enter your email" />
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
        <div className={cx("password-input")}>
          <label htmlFor=""> Confirm Password</label>

          <FontAwesomeIcon
            onClick={handleHideShowConfirm}
            className={cx("show-confirm-pass")}
            icon={showConfirm === true ? faEyeSlash : faEye}
          ></FontAwesomeIcon>
          <input
            type={typeConfirm === true ? "password" : "text"}
            name=""
            id=""
            placeholder="Confirm your password"
          />
        </div>
        <div className={cx("btn-login")}>
          <Button loginweb>CREATE</Button>
        </div>
        <div className={cx("text")}>
          <p>
            Already have account?
            <Button linkregister to="/login">
              Login here.
            </Button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
