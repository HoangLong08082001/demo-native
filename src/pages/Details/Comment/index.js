import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import Rating from "./Rating";
import { toast } from "react-toastify";
import imgperson from '../../../assets/images/slider/th.jpeg'

import axios from "../../../setup-axios/axios";
const cx = classNames.bind(styles);
function Comment({MaTour}) {
    const [DanhGia,setstar] =useState(5);
    const [binhluan,settext] =useState("")
    const [arraycomment,setarraycomment] =useState([]);
    useEffect(()=>{
        axios.post("/tour/getcomment",{
            MaTour,
            }).then((response) => {
                setarraycomment(response.data);
                if(response.data==="success"){
                    
                }
            });
    },[MaTour])
  
    const callbackFunction=(value)=>{
        
        setstar(value);
    }
    const handletext=(e)=>
    {
        
        settext(e);
    }
    const hanldecomment=()=>{
        if(localStorage.getItem("account")===null)
        {
            toast.warning("Bạn chưa đăng nhập tài khoản")
            console.log(MaTour)
        }
        else{  
                
            axios.post("/tour/addcomment",{
                binhluan,
                DanhGia,
                MaKH:localStorage.getItem("Ma"),
                MaTour,
                })
                .then((response) => {
                    if(response.data==="success"){
                        toast.success("Cảm Ơn Đánh Giá Của Bạn")
                    }
                });
                
                document.getElementById('text').value ="";  

        }
        setTimeout(() => {
            axios.post("/tour/getcomment",{
                MaTour,
                }).then((response) => {
                    setarraycomment(response.data);
                    if(response.data==="success"){
                        
                    }
                });
          }, 1000);
    }
   
    return ( <div>
        <div className={cx("box")}>
            <div className={cx("box-push-comment")}>
                <div className={cx("box-push-comment-left")} >
                    <img src={imgperson}></img>
                </div>
                <div className={cx("box-push-comment-right")}>
                    <h5>Hãy cho chúng tôi biết đánh giá của bạn</h5>
                    <div className={cx("box-push-comment-rating")}><Rating parentcallBack={callbackFunction}/></div>
                    <div className={cx("box-push-comment-text")}>
                        <textarea id="text"   onChange={e=>{handletext(e.target.value)}} placeholder="What is your view"></textarea>
                    </div>
                    <div className={cx("box-push-comment-button")}>
                        <button onClick={hanldecomment}>SEND </button>
                        
                    </div>
                </div>
                
              
            </div>
            <div className={cx("box-show-comment")}>
                
                    <h5>Lượt đánh giá bình luận<span>({arraycomment.length})</span></h5>
                    
                
               {arraycomment.map(comment=>{
                return ( <div className={cx("box-show-comment-reponse")}>
                <p>{comment.binhluan}</p>
                <div><img src={imgperson}></img><span>{comment.TenKH}</span></div>
            </div>)
               })}
                
            </div>
        </div>
    </div>);
}

export default Comment;