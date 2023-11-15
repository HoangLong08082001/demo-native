import {  useEffect, useRef, useState } from "react";
import axios from "../../setup-axios/axios"
import {  useNavigate } from "react-router-dom";
import Slider from'./Slider'
import Panner from "./Panner";
import FlashSale from "./FlashSale";
import Location from "./Location";
import Search from "./Search";
import Connect from "./Connect-partner";
import Famos from "./Famos";
import HotLocation from "./Hot";
import Star from "./Star";
import Loading from "../../components/Loading";
import Searchresult from "./SearchResult";
function Home() {
    const [value2,setvalue2]=useState([])
    const [value1,setvalue1]=useState(false)
    const [ham,setham]=useState(false)
    const [ketqua,setketqua]=useState("Hãy Điền Thông Tin Phía Trên Để Tìm Kiếm Tour")
    const callbackFunction = (childData,hamkq) => {
      setvalue2(childData);
      setham(hamkq);
      if(childData.length > 0)
      {
        setvalue1(true)
        setketqua(" ")
      }
      else if(childData.length <= 0)
      {
        setketqua("Không Thể Tìm Thấy Tour Bạn Mong Muốn. Vui Lòng Liên Hệ Hotline 035235235")
        setvalue1(false)
      }
    }
    useEffect(() => {
      setTimeout(() => {
        setham(false);
      }, 1300);
    }, [ham]);
    return ( 
             <div> 
              <Slider/>
             <Search parentCallback={callbackFunction} />
              { ham ? (<Loading/>) : ( <Searchresult data={value2} Ketqua={ketqua} moment={value1} />) }
             
             <Panner/>
             <FlashSale/>
             <Location/>
             <Connect/>
             <Star/>
             <Famos/>
            
             <HotLocation/></div>

   );
}

export default Home;