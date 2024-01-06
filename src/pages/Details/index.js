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
import Loading from "../../components/Loadingall";
export default function Details() {
  const [value, setData] = useState([]);
  const { id } = useParams();
  const [arrayimg, setarrayimg] = useState([]);
  const [ham,setham]=useState(true);
  const [array,setarray]=useState([]);
  useEffect(() => {
    axios.get(`tour/alltour/${id}`).then((response) => {
      setData(response.data[0]);
      setarrayimg(response.data);
      setarray([response.data[0].LichTrinh1,response.data[0].LichTrinh2,response.data[0].LichTrinh3,response.data[0].LichTrinh4,response.data[0].LichTrinh5,response.data[0].LichTrinh6,response.data[0].LichTrinh7]);
    });
  }, [id]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
     setham(false)
    }, 1500);
  }, [ham]);
console.log(array)
  return (
    <div>
        {ham === true ?(<Loading/>):('')}
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
        <Price
          MaTour={value.MaTour}
          NgayDi={value.NgayDi}
          
          noiDen={value.DiaDiemDen}
          noiDi={value.DiaDiemDi}
        />
        {arrayimg.map((value) => {
          return (
            <ImageDetail
              key={value.MaTour}
              img1={value.HinhAnh.data}
              img2={value.HinhAnh2.data}
              img3={value.HinhAnh3.data}
              img4={value.HinhAnh4.data}
              img5={value.HinhAnh5.data}
            />
          );
        })}
        <Trip
          trip={array}
       
        />
        <Comment MaTour={id} />
        <AnotherTour />
      </div>
    </div>
  );
}
