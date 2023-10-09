import classname from "classnames/bind";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/logoGoogle.png";
import facebook from "../../assets/images/logoFacebook.png";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { toast } from "react-toastify";
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
  const handleLogin = () => {
    
  };
  return (
    <div  style={{ backgroundImage: `url(${img4})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"  }} className={cx("box-full")} >
      <div className={cx("box")}>
      <div className={cx("title")}>
        <p>LOGIN YOUR ACCOUNT</p>
      </div>
      <div className={cx("form-login")}>
        <div className={cx("form-logo")}>
          <img src={logo} alt="loi" />
        </div>
        <label htmlFor="">Username</label>
        <div className={cx("input-form")}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter your username"
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
            <Button to="/register" linkregister>
              Register here
            </Button>
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Login;
