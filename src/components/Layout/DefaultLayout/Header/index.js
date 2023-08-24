import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classname from "classnames/bind";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button";
import { faCaretDown, faEarth } from "@fortawesome/free-solid-svg-icons";
import { faBell, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import logo from "../../../../assets/images/logo.png";
const cx = classname.bind(styles);
function Header() {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <div>
        <img src={logo} alt="Logo" width={400} height={150}></img>
      </div>

      <div className={cx("warpper-link")}>
        <div className={cx("warpper-link-h")}>
          <Link className={cx("link")} to="/">
            {" "}
            Trang Chu
          </Link>
          <Link className={cx("link")} to="/">
            Ưu Đãi
          </Link>
          <Link className={cx("link")} to="/">
            Chúng Tôi
          </Link>
          <Link className={cx("link")} to="/">
            Hợp Tác
          </Link>
        </div>
        <div className={cx("warpper-link-h")}>
          <Link className={cx("link")} to="/">
            {" "}
            Tour Trong Nước{" "}
            <span>
              <FontAwesomeIcon icon={faCaretDown} />
            </span>{" "}
          </Link>
          <Link className={cx("link")} to="/">
            Tour Nước Ngoài{" "}
            <span>
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </Link>
        </div>
      </div>

      <div className={cx("warpper-icon")}>
        <div className={cx("warpper-link-icon")}>
          <div>
            {" "}
            <FontAwesomeIcon icon={faEarth} />
          </div>
          <div>
            {" "}
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <div className={cx("warpper-link-icon")}>
          <div>
            <Button login onClick={() => navigate("/login")}>
              Đăng Nhập
            </Button>
          </div>
          <div>
            <Button logout onClick={() => navigate("/register")}>
              Đăng Xuất
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
