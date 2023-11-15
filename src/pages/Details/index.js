import React, { useEffect, useLayoutEffect, useState } from "react";
import About from "./About";
import ImageDetail from "./ImageDetail";
import Price from "./Price";
import Trip from "./Trip";
import AnotherTour from "./AnotherTour";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import axios from "../../setup-axios/axios";
import Alert from "../../components/Alert/Alert";
export default function Details() {
  const [value, setData] = useState([]);
  const { id } = useParams();
  const [arrayimg,setarrayimg] = useState([]);

 
  useEffect(() => {
    axios.get(`tour/alltour/${id}`).then((response) => {
      
      setData(response.data[0]);
      setarrayimg(response.data);
    });
    
  },[id]);
  useLayoutEffect(() => {
       
       
    window.scrollTo(0,0)});
  
  return (
    <div  >
     
      <div>
        <About
          MaTour={id}
          tentour={value.TenTour}
          diadiemden={value.DiaDiemDen}
          diadiemdi={value.DiaDiemDi}
          loaitour={value.LoaiTour === "TN" ? "Trong Nuoc" : "Nguoi Nuoc"}
          quymo={value.QuyMo}
          phuongtien={value.PhuongTien}
     
        />
        <Price MaTour={id} />
        {
          arrayimg.map((value)=>{
            return(   <ImageDetail key={value.MaTour}
              img1={value.HinhAnh.data}
              img2={value.HinhAnh2.data}
              img3={value.HinhAnh3.data}
              img4={value.HinhAnh4.data}
              img5={value.HinhAnh5.data}
        />)
          })
        }
        <Trip
          trip1={value.LichTrinh1}
          trip2={value.LichTrinh2}
          trip3={value.LichTrinh3}
        />
        <Comment MaTour={id} />
        <AnotherTour />
      </div>

      
     
      
    </div>
  );
}
