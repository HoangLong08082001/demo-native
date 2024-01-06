import classname from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "../../../components/Alert/Alert"
import styles from "./TTUser.module.scss";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import axios from"../../../setup-axios/axios";
const cx = classname.bind(styles);
function TTUser() {
    const [value,setvalue] =useState({})
    const [value1,setvalue1] =useState()
 
    const [value3,setvalue3] =useState()
    const [value4,setvalue4] =useState()
    const [value5,setvalue5] =useState()
    const [error,seterror]=useState(false);
    useEffect(()=>{
        axios.post("/custommer/getDK",{
            MaKH:localStorage.getItem("Ma"),
            }).then((response) => {
              
                if(response.data==="success"){
                    setvalue(response.list[0]);
                }
            });
    },[])

    const handlesavett=()=>{
        axios.post("/custommer/addttuser",{
            TenKH:value1,
            DiaChi:value3,
            CMND:value4,
            Sdt:value5,
            MaKH:localStorage.getItem("Ma"),
            }).then((response) => {
                if(response.data === "Success"){
                    seterror(true)
                    console.log(response.data)
                }
            });
    }
    const handleclose=()=>{
        seterror(false);
    }
    return ( <div  className={cx("container")}>
        <div className={cx("container-admin")}><FontAwesomeIcon icon={faUser}/></div>
        <div >
          {error ?(  <Alert callBackParent={handleclose}
          datatt={['Lưu Thông Tin Thành Công']}
          dataprops={'Thông Báo'}
          icon={2}
          good={1}/>):('')}
            <div className={cx("container-ttmain")}>
                <label>Họ Tên</label><br></br>
                <input type="text" value={value.TenKH} onChange={(e)=>{setvalue1(e.target.value)}}></input>
            </div>
            <div className={cx("container-ttmain")}>
                <label>Email</label><br></br>
                <input type="email" value={value.username} readOnly></input>
            </div>
            <div className={cx("container-ttmain")}>
                <label>Địa Chỉ</label><br></br>
                <input type="text" value={value.DiaChi} onChange={(e)=>{setvalue3(e.target.value)}}></input>
            </div>
            <div className={cx("container-ttmain")}>
                <label>CMND</label><br></br>
                <input type="text" value={value.CMND} onChange={(e)=>{setvalue4(e.target.value)}}></input>
            </div>
            <div className={cx("container-ttmain")}>
                <label>Số Điện Thoại</label><br></br>
                <input type="text" value={value.Sdt} onChange={(e)=>{setvalue5(e.target.value)}}></input>
            </div>
            <Button onClick={handlesavett} book>Lưu Lại</Button>
       
        </div>
    </div> );
}

export default TTUser;