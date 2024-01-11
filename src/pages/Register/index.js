import classname from "classnames/bind";
import { useState } from "react";
import img4 from "../../../src/assets/images/slider/img5.jpg";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/logoGoogle.png";
import facebook from "../../assets/images/logoFacebook.png";
import styles from "./Register.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import axios from "../../setup-axios/axios";
const cx = classname.bind(styles);
function Register() {
  const navigate = useNavigate();
  const [type, setType] = useState(true);
  const [show, setShow] = useState(true);
  const [typeConfirm, setTypeConfirm] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const checkValidate = () => {
    if (email === "") {
      toast.warning("Vui lòng nhập email");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.warning("Nhập sai định dạng email");
      return false;
    }
    if (password === "") {
      toast.warning("Vui lòng nhập mật khẩu");
      return false;
    }
    if (confirm === "") {
      toast.warning("Vui lòng nhập lại mật khẩu");
      return false;
    }
    if (confirm !== password) {
      toast.warning("Mật khẩu không trùng khớp");
      return false;
    }
    return true;
  };
  const handleHideShow = () => {
    setShow(!show);
    setType(!type);
  };
  const handleHideShowConfirm = () => {
    setShowConfirm(!showConfirm);
    setTypeConfirm(!typeConfirm);
  };
  const handleCreate = () => {
    let check = checkValidate();
    if (check) {
      axios
        .post("/custommer/register-custommer", {
          email,
          password,
        })
        .then((res) => {
          if (res && res.message === "exists") {
            toast.warning("Email này đã tồn tại!");
          }
          if (res && res.message === "success") {
            toast.success("Tạo tài khoản thành công!");
          }
        });
      setPassword("");
      setEmail("");
      setConfirm("");
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
          <p>CREATE YOUR ACCOUNT</p>
        </div>
        <div className={cx("form-login")}>
          <div className={cx("form-logo")}>
            <img src={logo} alt="loi" />
          </div>
          <label htmlFor="">Email</label>
          <div className={cx("input-form")}>
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="">Password</label>
          <div className={cx("input-form")}>
            <input
              type={type === true ? "password" : "text"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <FontAwesomeIcon
              className={cx("icon")}
              icon={showConfirm === true ? faEye : faEyeSlash}
              onClick={handleHideShowConfirm}
            ></FontAwesomeIcon>
          </div>
          <div className={cx("btn-login")}>
            <Button loginweb onClick={handleCreate}>
              CREATE
            </Button>
          </div>
          <div className={cx("text")}>
            <p>
              Don't have an account ?{" "}
              <Button to="/login-user" linkregister>
                login here
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
