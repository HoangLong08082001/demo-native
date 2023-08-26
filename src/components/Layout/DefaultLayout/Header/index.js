import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classname from "classnames/bind";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button";
import { faCaretDown, faEarth } from "@fortawesome/free-solid-svg-icons";
import { faBell, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import logo from '../../../../../src/assets/images/logo.png';
import {  useEffect, useRef, useState } from 'react';
const cx= classname.bind(styles)
function Header() {
    const navigate = useNavigate();
    const [set,setvalue]=useState(false);
    const [set1,setvalue1]=useState(false);
    const menuref=useRef()
    const red=useRef();
    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            if(e.target === menuref.current)
            {
                setvalue(false);
                setvalue1(false);
            }
        })
        window.removeEventListener('click',menuref.current)
       
    })
    const handleclick =()=>{
        if(set===false)
        {
            setvalue(true);
            
        }
        else
        {
            setvalue(false);
        }
        
    }
    const handleclick1 =()=>{
        if(set1===false)
        {
            setvalue1(true);
        }
        else
        {
            setvalue1(false);
        }
    }
    
    return ( 
    <div className={cx('wrapper')}>
        <div>
            <img src={logo}alt='Logo' width={400} height={150}></img>
        </div>

        <div className={cx('warpper-link')}>
            <div className={cx('warpper-link-h')}>
                <Link className={cx('link')} to='/review'> Trang Chu</Link>
                <Link  className={cx('link')} to='/'>Ưu Đãi</Link>
                <Link  className={cx('link')} to='/'>Chúng Tôi</Link>
                <Link  className={cx('link')} to='/'>Hợp Tác</Link>
            </div>
            <div className={cx('warpper-link-h')}  ref={menuref} >
                <div className={cx('link')}onClick={handleclick} > Tour Trong Nước <span ><FontAwesomeIcon   icon={faCaretDown}   />
                    {set&&
                        <div className={cx('menu-show')} >
                            <ul>
                                <li> Miền Bắc </li>
                                <li> Miền Nam</li>
                                <li> Miền Trung </li>
                            </ul>
                        </div>
                    }
                </span> 
                </div>
                <div className={cx('link')} onClick={handleclick1}>Tour Nước Ngoài <span><FontAwesomeIcon onClick={handleclick1} icon={faCaretDown} />
                   {set1&&
                     <div  className={cx('menu-show')}>
                     <ul>
                         <li> Châu Âu </li>
                         <li> Châu Mĩ</li>
                         <li> Châu Á </li>
                     </ul>
                 </div>
                   }
                </span></div>
               
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
    
  );
}

export default Header;
