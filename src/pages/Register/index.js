import classname from "classnames/bind";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/logoGoogle.png";
import facebook from "../../assets/images/logoFacebook.png";
import styles from "./Register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import axios from "../../setup-axios/axios";
const cx = classname.bind(styles);
function Register() {
  const [type, setType] = useState(true);
  const [show, setShow] = useState(true);
  const [typeConfirm, setTypeConfirm] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [TenKH, setTenKH] = useState("");
  const [Sdt, setSdt] = useState("");
  const [Diachi, setDiaChi] = useState("");
  const [CMND, setCMND] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const checkValidate = () => {
    if (TenKH === "") {
      toast.warning("Vui long nhap ten");
      return false;
    }
    if (Sdt === "") {
      toast.warning("Vui long nhap so dien thoai");
      return false;
    }
    if (Diachi === "") {
      toast.warning("Vui long nhap dia chi");
      return false;
    }
    if (CMND === "") {
      toast.warning("Vui long nhap chung minh nhan dan");
      return false;
    }
    if (email === "") {
      toast.warning("Vui long nhap email");
      return false;
    }
    if (password === "") {
      toast.warning("Vui long nhap mat khau");
      return false;
    }
    if (confirm === "") {
      toast.warning("Vui long nhap lai mat khau");
      return false;
    }
    if (confirm !== password) {
      toast.warning("Sai mat khau");
      return false;
    }
    toast.success("Tao mat khau thanh cong");
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
      axios.post("/custommer/register-custommer", {
        TenKH,
        Sdt,
        Diachi,
        CMND,
        email,
        password,
      });
      setCMND("");
      setConfirm("");
      setDiaChi("");
      setEmail("");
      setPassword("");
      setSdt("");
      setTenKH("");
    }
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
        <label htmlFor="">Ten Khach hang</label>
        <div className={cx("input-form")}>
          <input
            type="text"
            value={TenKH}
            onChange={(e) => setTenKH(e.target.value)}
            placeholder="Enter your name"
          />
        </div>{" "}
        <label htmlFor="">So dien thoai</label>
        <div className={cx("input-form")}>
          <input
            type="number"
            placeholder="Enter your phone munber"
            value={Sdt}
            onChange={(e) => setSdt(e.target.value)}
          />
        </div>
        <label htmlFor="">Dia chi</label>
        <div className={cx("input-form")}>
          <input
            type="text"
            placeholder="Enter your address"
            value={Diachi}
            onChange={(e) => setDiaChi(e.target.value)}
          />
        </div>
        <label htmlFor="">CMND</label>
        <div className={cx("input-form")}>
          <input
            type="number"
            placeholder="Enter your code"
            value={CMND}
            onChange={(e) => setCMND(e.target.value)}
          />
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
