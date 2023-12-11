import Button from "../../components/Button";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPrint } from "@fortawesome/free-solid-svg-icons";
import styles from "./Confirm.module.scss";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import dateFormat from 'dayjs'
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import axios from "../../setup-axios/axios";
import BillDetail from "../BillDetail";
const cx = classNames.bind(styles);
function Confirm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [success,setsucees] = useState(false);
    const params = new URLSearchParams(location.search);
    var name = params.get('name');
    var email = params.get('email');
    var sdt = params.get('sdt');
    var diachi = params.get('diachi');
    var payment = parseInt(params.get('payment'));
    var matour = params.get('loaitour')+params.get('matour');
    var nametour = params.get('tentour');
    var summoney = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(params.get('summoney'));;
    var person = parseInt(params.get('person'));
    var personmin = parseInt(params.get('personmin'));
    var personbe = parseInt(params.get('personbe'));
    var datenew = dateFormat(params.get('ngaykhoihanh')).format("DD/MM/YYYY");
    var sumperson=(person + personmin + personbe);

  
    useEffect(() => {
      
      const url = window.location.href;
     
      const urlParams = new URLSearchParams(url);
      
      const paymentStatus = urlParams.get('vnp_TransactionStatus');
 
    //   console.log('Payment Status:', paymentStatus);
      
    }, []);
   
  
    const handlepre=()=>{
        navigate(-1);
    }
    const handlemoney=()=>{
        
        if(payment === 0)
        {
            axios.post("/Bill/addbill",{
                MaTour:params.get('matour'),
                MaKH:localStorage.getItem('Ma'),
                NguoiLon:person,
                TreEm:personmin,
                EmBe:personbe,
                TrangThai:0,
                HinhThucThanhToan:payment=== 0?"Tiền Mặt":"Online",
                TrangThaiThanhToan:0,
                NgayTao:dateFormat(new Date).format("YYYY/MM/DD"),
                TongTien:params.get('summoney'),
                  }).then((response) => {
                      if(response.data === "success"){
            
                          window.location.href=`http://dattourtravel.com:3000/user/billdetail/${params.get('matour')}?email='on'`;
                      }
                    
                  });
        }
        else
        {
            //online
        }

        


        
    }
    const handlemoneyonline=()=>{
        // const date= new Date();
        // const datenew=dateFormat(date).format("YYYYMMDDHHmmss");
        // const orderId=dateFormat(date).format("HHmmss")
        //   try {
        //       const response = axios.post('/payment/create_payment_url', {
        //         amount: '100000',
        //         date:datenew,
        //         orderid:orderId,
        //       });
        
        //       response.then((response)=>{
          
        //        window.location.href=response.data;
               
        //       })
           
            
        //     } catch (error) {
        //       console.error('Error:', error.message);
        //     }
    }
    return (<div >
        <div className={cx("wrapper")} >
        <div className={cx("wrapper-head")}><h2>Xác Nhận Và Thanh Toán</h2></div>
        <div >
               <div className={cx("wrapper-box")}>
                        <div className={cx("wrapper-box-kh")}>
                            <h3>Thông Tin Khách Hàng</h3>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Họ Tên</p>
                                <p>{name}</p>
                            </div>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Email</p>
                                <p>{email}</p>
                            </div>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>SĐT</p>
                                <p>{sdt}</p>
                            </div>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Địa Chỉ</p>
                                <p>{diachi}</p>
                            </div>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Số Khách</p>
                                <p>{`${sumperson}(Người Lớn : ${person} Trẻ Em : ${personmin} Em Bé : ${personbe})`}</p>
                            </div>
                        </div>
                        <div className={cx("wrapper-box-kh")}>
                            <h3>Thông Tin Tour Du Lịch</h3>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Mã Tour</p>
                                <p>{matour}</p>
                            </div>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Tên Tour</p>
                                <p>{nametour}</p>
                            </div>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Ngày Khởi Hành</p>
                                <p>{datenew}</p>
                            </div>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Tổng Thanh Toán</p>
                                <p>{summoney}</p>
                            </div>
                            <div className={cx("wrapper-box-kh-tt")}>
                                <p>Hình Thức Thanh Toán</p>
                                <p>{payment ===0?"Tiền Mặt":"Chuyển Khoản"}</p>
                            </div>
                        </div>
                     </div>
               <div className={cx("wrapper-box2")}>
                    <Button onClick={handlepre} login>Trở Lại</Button>
                    {
                        payment ===0?(<Button onClick={handlemoney} login>Hoàn Tất</Button>):(<Button onClick={handlemoneyonline} login>Thanh Toán </Button>)
                    }
               </div>
                
        </div>
        </div>
      
    </div>  );
}

export default Confirm;