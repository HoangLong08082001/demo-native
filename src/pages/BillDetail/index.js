import img1 from '../../assets/images/logo.png';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPrint } from "@fortawesome/free-solid-svg-icons";
import styles from "./BillDetail.module.scss";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from "react-toastify";
import QRCode from 'qrcode-generator';
import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import axios from '../../setup-axios/axios';
import io from 'socket.io-client';
import dateFormat from "dayjs";
import emailjs from 'emailjs-com';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
const cx = classNames.bind(styles);
function BillDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    var statusemail = params.get('email');
    var phieu = params.get('MaPhieu');
    const { matour } = useParams();
    const count = useRef(0); 
    var socket = io('http://dattourtravel.com:9000');
    var componentRef = useRef(null);
 
    const [value,setvalue]=useState({})
    useEffect(()=>{
        axios.post("/Bill/getbill",{
            MaTour:matour,
            MaPhieu:phieu,
            MaKH:localStorage.getItem('Ma'),
              }).then((response) => {
               
                 setvalue(response.data[0]);
              });
              
             
    },[matour])
    
   
    useEffect(()=>{
        if(statusemail != null && statusemail != undefined )
    {
        socket.emit('newOrder',{status: 'success'});
       if(count.current === 0)
       {
        toast.success("Đặt Tour Thành Công");
       }
       count.current=1;
        localStorage.removeItem('data')
        // const qr = QRCode(0,'H');
        // qr.addData(`http://dattourtravel.com:3000/user/billdetail/${matour}`);
        // qr.make();
        // const qrImage = qr.createDataURL(3); 
        // console.log(qrImage);
       
    //   const pdfFile = new File([pdfOutput], 'ten_file.pdf', { type: 'application/pdf' });

       
        const templateParams = {
          
            to_email:'tuyendang.9887@gmail.com',
            from_name: value.TenKH,
            cid_here: `http://dattourtravel.com:3000/user/billdetail/${matour}`
          };



        // emailjs.send('service_2vmrzil', 'template_yi9mpyl',templateParams, '_Qyy3ogwzYSV4UNek')
        // .then((result) => {
        //       console.log(result.text);
        // }, (error) => {
        //       console.log(error.text);
        // });
    }
    },[])

    console.log(value);

    
    const handlepdf=()=>{
        
        if(statusemail !=null ||statusemail ==null)
        {
             const input = componentRef.current;
                html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('PhieuDatTour.pdf');
              });

            
            
        }
    }
    const hanldepre=()=>{
        navigate('/')
    }
    const datedi = dateFormat(value.NgayDi).format("DD/MM/YYYY");
    const dateve = dateFormat(value.NgayVe).format("DD/MM/YYYY");
    const datetao = dateFormat(value.NgayTao).format("DD/MM/YYYY");
    const price = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value.Tongtien);
    ////
    return ( <div  >
                <Button login onClick={hanldepre} >Trang Chủ</Button>
                <div ref={componentRef} className={cx("box-container")}>
                    <div className={cx("box")}>
                        
                        <div className={cx("box-head")}>
                            <div>
                                <img src={img1}></img>
                            </div>
                            <div>
                                <h1>Công Ty Cổ Phần TOT Du Lịch Và Lữ Hành </h1>
                                <h5>Địa Chỉ : Cao Lỗ, Quận 8, Thành Phố Hồ Chí Minh <span style={{marginLeft:"20px"}}>SĐT : 342352523523 Fax : 32627262</span>  </h5>
                            </div>
                        </div>
                        <div className={cx("box-head-detail")} >
                            <h4>Lời cảm ơn:</h4>
                            <div><p>Cảm ơn quý khách hàng đã sử dụng dịch vụ của công ty chúng tôi. Mong quý khách sẽ có một chuyến đi hạnh phúc và vui vẻ bên gia đình và bạn bè. 
                                Nếu quý khách hàng có ý kiến hoặc phản hồi trong suốt quá trình của chuyến đi xin hãy liên hệ số hotline tổng đài để được tư vấn. </p></div>
                        </div>
                        <div className={cx("box-accept")}>
                            <div>
                                <h2>Phiếu xác nhận booking</h2>
                                <div className={cx("cancel")}></div>
                                <div className={cx("box-input")} >
                                    <p>Mã Tour</p>
                                    <p>{value.LoaiTour+value.MaTour}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Tên Tour</p>
                                    <p>{value.TenTour}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Ngày Đi</p>
                                    <p>{datedi}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Ngày Về</p>
                                    <p>{dateve}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Nơi Khởi Hành</p>
                                    <p>{value.DiaDiemDi}</p>
                                </div>
                            </div>
                            <div>
                                <h2>Thông Tin Liên Lạc</h2>
                                <div className={cx("cancel")}></div>
                                <div className={cx("box-input")} >
                                    <p>Họ Tên</p>
                                    <p>{value.TenKH}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Địa Chỉ : </p>
                                    <p>{value.DiaChi}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Email</p>
                                    <p>{value.username}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Số Điện Thoại</p>
                                    <p>{value.Sdt}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Số Khách</p>
                                    <p>{parseInt(value.NguoiLon+value.TreEm+value.EmBe)}(Người lớn:{value.NguoiLon} Trẻ em: {value.TreEm} Em bé: {value.EmBe} )</p>
                                </div>
                               
                            </div>
                        </div>
                        
                        <div className={cx("box-accept-2")}>
                                <div>
                                    <h2>Thông tin chi tiết booking</h2>
                                    <div className={cx("cancel")}></div>
                                    <div className={cx("box-input")} >
                                    <p>Mã Booking</p>
                                    <p>{value.LoaiTour+value.MaPhieu}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Tổng Chi Phí</p>
                                    <p>{price}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Ngày Đăng Ký</p>
                                    <p>{datetao}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Tình Trạng Tour</p>
                                    <p>{value.TrangThai===0?"Chưa Duyệt":"Đã Duyệt"}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Phương Thức Thanh Toán</p>
                                    <p>{value.HinhThucThanhToan}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Thời Hạn Thanh Toán</p>
                                    <p>{value.TrangThaiThanhToan===1?"":datedi-1}</p>
                                </div>
                                <div className={cx("box-input")} >
                                    <p>Tình Trạng Thanh Toán</p>
                                    <p>{value.TrangThaiThanhToan===0?"Chưa Thanh Toán" :"Đã Thanh Toán"}</p>
                                </div>
                                </div>
                               
                        </div>
                        <div className={cx("box-head-detail")}>
                            <h4>Cam Kết : </h4>
                            <div><p>Mọi thông tin cá nhân của khách hàng sẽ được bảo mật an toàn.  </p></div>
                        </div>
                        
                    </div>
                    <button onClick={handlepdf} className={cx("wrapper-title-btn")}>
                        <FontAwesomeIcon icon={faPrint} />
                        Tải Phiếu
                    </button>    
                </div>
             
               
              
    </div> );
}

export default BillDetail;