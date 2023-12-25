import classname from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button"
import styles from "./Touradd.module.scss";
import slugify from "react-slugify";
import {
  
    
   
    faBus,
    faPlane,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";
  import {
  
    faCircleXmark,
   
    
  } from "@fortawesome/free-regular-svg-icons";
import img1 from "../../assets/images/PhuQuoc/pq4.png"
import { useEffect, useState } from "react";
import axios from"../../setup-axios/axios";
import { Link } from "react-router-dom";
const cx = classname.bind(styles);
function Touradd({status,name,img,MaTour}) {

    const [arraycomment,setarraycomment] =useState([]);

   
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
    const base64String = btoa(
        new Uint8Array(img).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
    
       
    
    return ( <div  className={cx("container")}>
        <div  className={cx("container-box")}>
            <Button underline txt to={`/details/${slugify(name)}/${MaTour}`} >
            <div style={{display:"flex", width:"188%"}}>
                <div className={cx("container-box-left")} style={{backgroundImage: `url(data:image/png;base64,${base64String})`}}>

                </div>
                <div className={cx("container-box-right")}>
                {status === "1" ? (
                                    <h6>Lựa Chọn Yêu Thích Của Bạn</h6>
                                    ) : status === "0" ? (
                                      <h6>Thịnh Hành và Được Yêu Thích</h6>
                                    ) : (
                                      <h6>Tour Đã Đặt</h6>
                                    )}
                    <h5>{name}</h5>
                    <div className={cx("container-box-right-star")}>
                    { arraystar.length>0?(
                        arraystar.map((value,Index)=>{
                            return(<FontAwesomeIcon key={Index} icon={faStar} />)
                        })
                    ):( ""
                    )}
                    </div>
                    <div className={cx("container-box-right-span")}>
                        <span className={cx("container-box-right-span")}>Phương Tiện <FontAwesomeIcon style={{color:"#00b6f3 "}} icon={faPlane}/> <FontAwesomeIcon style={{color:"#14a44d"}} icon={faBus}/></span>
                    </div>
                    
                    <div className={cx("container-box-right-span")}><span className={cx("container-box-right-span")}>Lượt đánh giá ({arraycomment.length})</span></div>
                    <Button underline  book to={`/details/${slugify(name)}/${MaTour}`} >Đặt Ngay</Button>
                </div>
            </div>
            </Button>
          
            <div className={cx("container-box-close")}>
               {status === '0'?(''):( <FontAwesomeIcon icon={faCircleXmark}/>)}
            </div>
        </div>
    </div> );
}

export default Touradd;