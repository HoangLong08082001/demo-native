import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classname from "classnames/bind";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button";
import Tippy from "@tippyjs/react/headless"; // different import path!
import "tippy.js/dist/tippy.css"; // optional
import { faBars, faCaretDown, faCaretRight, faEarth, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBell, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../../../assets/images/slider/th.jpeg"
import logo from "../../../../../src/assets/images/logo.png";
import { useEffect, useRef, useState } from "react";

const cx = classname.bind(styles);
function Header() {
  const navigate = useNavigate();
  const [set, setvalue] = useState(false);
  const nn={1:"TourTrongNuoc",
  2:"TourNuocNgoai"
}
 
  
  useEffect(() =>{
    if(localStorage.getItem('account')||localStorage.getItem('account-google'))
  {
    setvalue(true);
  }
  },[set])
  
  
  const handlelogout= () => {
    if(localStorage.getItem('account'))
    {
      toast.success('Logout Success');
      localStorage.removeItem('account');
      localStorage.removeItem('Ma');
      if(localStorage.getItem('image')){
        localStorage.removeItem("image");
      }
      setvalue(false)
     
        window.location.reload();                     
    
    }
    
  }
  
  return (
    <div className={cx("wrapper")}>
       
      <input className={cx("wrapper-input")} type="checkbox" id="checkboxbar"></input>
      <label for="checkboxbar"  className={cx("bar-icon")}>
        <FontAwesomeIcon icon={faBars}/>
      </label>
      <div className={cx("menu-bar")}>
        <label for="checkboxbar"><FontAwesomeIcon icon={faXmark}/></label>
        <ul>
          <li><Link>Trang Chủ</Link></li>
          <li><Link>Ưu Đãi</Link></li>
          <li><Link>Chúng Tôi</Link></li>
          <li><Link>Hợp Tác</Link></li>
          <li><Link>Tour Trong Nước</Link></li>
          <li><Link>Tour Ngoài Nước</Link></li>
        </ul>
      </div>
      <label for="checkboxbar" className={cx("menu-bar-overlay")}>

      </label>
      <div className={cx("bar-img-height")}>
        <img className={cx("bar-img")} src={logo} alt="Logo" width={400} height={150}></img>
      </div>

      <div className={cx("warpper-link")}>
        <div className={cx("warpper-link-h")}>
          <Link className={cx("link")} to="/review">
            {" "}
            Trang Chủ
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
          <div className={cx("link")} >
            
            <Link className={cx("link")} to={"/more-summer/"+nn[1]}>
              Tour Trong Nước
            </Link>
            <span>
              <FontAwesomeIcon className={cx("link-icon")} icon={faCaretRight} />
              
            </span>
          </div>

          <div className={cx("link")} >
            <Link className={cx("link")} to={"/more-summer/"+nn[2]}>
              Tour Nước Ngoài
            </Link>
            <span>
              <FontAwesomeIcon className={cx("link-icon")}  icon={faCaretRight} />
              
            </span>
          </div>
        </div>
      </div>
      <div className={cx("warpper-link-icon")}>
      { set ? (<div className={cx("warpper-link-icon-login")}>
                <div>
        
                    <h5>{localStorage.getItem("account")}</h5>
                
                </div>
                <div>
                   {localStorage.getItem('image') ? (<label  for="checkavatar"><img  className={cx("warpper-link-icon-avatar")} src={localStorage.getItem('image')}></img></label>) : (<label  for="checkavatar"><img  className={cx("warpper-link-icon-avatar")} src={img}></img></label>) }
                   <input className={cx("warpper-link-icon-check")} type="checkbox" id="checkavatar"></input>
                  
                 <div className={cx("warpper-link-icon-avatar-tamgiac")}></div>
                  <div className={cx("warpper-link-icon-avatar-select")}>
                    <ul>
                        <li><span>Thông Tin Tài Khoản</span></li>
                        <li><span>Tour Yêu Thích</span></li>
                         <li onClick={handlelogout}><span>Đăng Xuất</span></li>
                    </ul>
                  </div>
                </div>
       </div>
       ) : (<div style={{display:'flex'}}>
          <div>
          <Button login onClick={() => navigate("/login-user")}>
            Đăng Nhập
          </Button>
        </div>
        <div>
          <Button logout onClick={() => navigate("/register-user")}>
            Đăng Ký
          </Button>
        </div>
       </div>) }
       
       
        
      </div>
    </div>
  );
}

export default Header;
