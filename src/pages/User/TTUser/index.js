import classname from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./TTUser.module.scss";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import axios from"../../../setup-axios/axios";
const cx = classname.bind(styles);
function TTUser() {
    const [value,setvalue] =useState({})
    useEffect(()=>{
        axios.post("/custommer/getDK",{
            MaKH:localStorage.getItem("Ma"),
            }).then((response) => {
              
                if(response.data==="success"){
                    setvalue(response.list[0]);
                }
            });
    },[])
 
    return ( <div  className={cx("container")}>
        <div className={cx("container-admin")}><FontAwesomeIcon icon={faUser}/></div>
        <div >
            <div className={cx("container-ttmain")}>
                <label>Họ Tên</label><br></br>
                <input type="text" value={value.TenKH}></input>
            </div>
            <div className={cx("container-ttmain")}>
                <label>Email</label><br></br>
                <input type="email" value={value.username}></input>
            </div>
            <div className={cx("container-ttmain")}>
                <label>Địa Chỉ</label><br></br>
                <input type="text" value={value.DiaChi}></input>
            </div>
            <div className={cx("container-ttmain")}>
                <label>CMND</label><br></br>
                <input type="text" value={value.CMND}></input>
            </div>
            <div className={cx("container-ttmain")}>
                <label>Số Điện Thoại</label><br></br>
                <input type="text" value={value.Sdt}></input>
            </div>
            <Button book>Lưu Lại</Button>
            <Button addlike>Vô Hiệu Hóa Tài Khoản</Button>
        </div>
    </div> );
}

export default TTUser;