import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import img1 from "../../../assets/images/PhuQuoc/af035f3bb11c6d9eca3de54d5123e07a.jpg";
import imgLOGO from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEarth,
  faPerson,
  faPlane,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import axios from "../../../setup-axios/axios";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../components/Button";
import Alert from "../../../components/Alert/Alert";
const cx = classNames.bind(styles);
export default function About({
  MaTour,
  tentour,
  diadiemdi,
  diadiemden,
  loaitour,
  quymo,
  phuongtien,
  
}) {
  const [arraycomment,setarraycomment] =useState([]);
  const [addlike,setaddlike] =useState(false);
  const [status,setstatus] =useState("");
    useEffect(()=>{
        axios.post("/tour/getcomment",{
          MaTour,
            }).then((response) => {
                setarraycomment(response.data);
                if(response.data==="success"){
                    
                }
            });
    },[])

    const sum = arraycomment.reduce(
      (accumulator, currentValue) => accumulator + currentValue.DanhGia,
      0,
    );
    const star=Math.round(sum/arraycomment.length);
    var arraystar=[];
    if(star > 0)
    {
      for(let i=0; i<star; i++)
        {
            arraystar.push(i);
        }
    }
  const handleadd=()=>{
        axios.post("/tour/addtourlove",{
          MaKH:localStorage.getItem("Ma"),
          MaTour
            }).then((response) => {
                if(response.data === "success"){
                  setstatus("Lưu Tour Thành Công")
                     setaddlike(true);
                     
                }
                else
                {
                  setstatus("Tour Đã Có Trong Danh Sách Của Bạn")
                    setaddlike(true);
                }
            });
  }  
  const handleclose=()=>{
      setaddlike(false)
}  
  

  return (
    <div className={cx("wrapper")}>
      {addlike ?(<Alert callBackParent={handleclose} dataprops={status} />):("")}
      <hr></hr>
      <div className={cx("wrapper-dow")}>
        <div className={cx("wrapper-dow-1")}>
          <p>{tentour}</p> 
          
            <div onClick={handleadd} className={cx("add-like")}>
              <span><FontAwesomeIcon icon={faBookmark}/></span>
              <span>Lưu Tour</span>
            </div>
          
        </div>
        <div className={cx("wrapper-dow-2")}>
          <div>
            <img src={imgLOGO}></img>
          </div>
          <div>
            <span>Đánh Giá</span>
             { arraystar.length>0?(
              arraystar.map((value,Index)=>{
                return(<FontAwesomeIcon key={Index} icon={faStar} />)
              })
              ):( ""
              )}
              
          </div>
          <div>
            <span>TOT TOUR</span>
            <br></br>
            <span>Nhà cung cấp</span>
          </div>
        </div>
        <div className={cx("wrapper-menu")}>
          <div>
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <span>Thời Lượng</span>
              <br></br>
              <span>5 Ngày</span>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faEarth} />
            </div>
            <div>
              <span>Địa Điểm Đi</span>
              <br></br>
              <span>{diadiemdi}</span>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faEarth} />
            </div>
            <div>
              <span>Địa Điểm Đến</span>
              <br></br>
              <span>{diadiemden}</span>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faChrome} />
            </div>
            <div>
              <span>Loại Tour</span>
              <br></br>
              <span>{loaitour}</span>
            </div>
          </div>
        </div>
        <div className={cx("wrapper-menu")}>
          <div>
            <div>
              <FontAwesomeIcon icon={faPerson} />
            </div>
            <div>
              <span>Quy Mô</span>
              <br></br>
              <span>{quymo} Người</span>
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faPlane} />
            </div>
            <div>
              <span>Phương Tiện Chính</span>
              <br></br>
              <span>{phuongtien}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
