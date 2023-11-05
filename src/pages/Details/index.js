import React, { useEffect, useLayoutEffect, useState } from "react";
import About from "./About";
import ImageDetail from "./ImageDetail";
import Price from "./Price";
import Trip from "./Trip";
import AnotherTour from "./AnotherTour";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import axios from "../../setup-axios/axios";
export default function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const fetchTourById = () => {
    axios.get(`tour/alltour/${id}`).then((res) => {
      console.log(res.data[0]);
      setData(res.data[0]);
    });
  };
  useEffect(() => {
    fetchTourById();
  }, []);
  const base64String = btoa(
    new Uint8Array(data.HinhAnh).reduce(
      (arr, byte) => arr + String.fromCharCode(byte),
      ""
    )
  );
  const base64String1 = btoa(
    new Uint8Array(data.HinhAnh1).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String2 = btoa(
    new Uint8Array(data.HinhAnh2).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String3 = btoa(
    new Uint8Array(data.HinhAnh3).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String4 = btoa(
    new Uint8Array(data.HinhAnh4).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const base64String5 = btoa(
    new Uint8Array(data.HinhAnh5).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return (
    <div>
      <About
        tentour={data.TenTour}
        diadiemden={data.DiaDiemDen}
        diadiemdi={data.DiaDiemDi}
        loaitour={data.LoaiTour === "TN" ? "Trong Nuoc" : "Nguoi Nuoc"}
        quymo={data.QuyMo}
        phuongtien={data.PhuongTien}
      />
      <Price matour={id} />
      <ImageDetail
        img1={`data:image/jpeg;base64,${base64String}`}
        img2={`data:image/jpeg;base64,${base64String1}`}
      />
      <Trip
        trip1={data.LichTrinh1}
        trip2={data.LichTrinh2}
        trip3={data.LichTrinh3}
      />
      <Comment />
      <AnotherTour />
    </div>
  );
}
