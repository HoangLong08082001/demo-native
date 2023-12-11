import { useEffect, useState } from "react";
import axios from "../../setup-axios/axios";
import { Redirect, useParams } from "react-router-dom";
import dateFormat from 'dayjs'
function Review() {
    
    const {vnpay_return}=useParams();
    useEffect(() => {
      // Lấy URL trả về từ thanh toán
      const url = window.location.href;
      // Phân tích URL để lấy các thông tin cần thiết
      const urlParams = new URLSearchParams(url);
      // Lấy giá trị từ các tham số trong URL trả về
      const paymentStatus = urlParams.get('vnp_TransactionStatus');
      // Xử lý các giá trị thu được
      console.log('Payment Status:', paymentStatus);
      // Thực hiện các hành động khác tùy thuộc vào giá trị trả về từ thanh toán
    }, []);
    const handleclick=()=>{
      const date= new Date();
      const datenew=dateFormat(date).format("YYYYMMDDHHmmss");
      const orderId=dateFormat(date).format("HHmmss")
        try {
            const response = axios.post('/payment/create_payment_url', {
              amount: '100000',
              date:datenew,
              orderid:orderId,
            });
      
            response.then((response)=>{
        
             window.location.href=response.data;
             console.log(vnpay_return)
            })
         
          
          } catch (error) {
            console.error('Error:', error.message);
          }
    }
    console.log(vnpay_return)
    return ( 
        <div>
            <button onClick={handleclick}></button>
            
        </div>
     );
}

export default Review;