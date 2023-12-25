import Touradd from "../../../components/Touradd/Touradd";
import classname from "classnames/bind";

import styles from "../Hot/Hot.module.scss";
import axios  from "../../../setup-axios/axios";
import img1 from "../../../assets/images/PhuQuoc/pq3.png"
import { useEffect, useState } from "react";
const cx = classname.bind(styles);
function Star() {
    const [data,setdata] = useState([]);
    useEffect(()=>{
        axios.get("/tour/get5star").then((response) => {
            setdata(response.data);
            
          });
    },[])
    console.log(data)
    return ( 
        <div className={cx("wrapper")}>
             <h2>Đánh Giá Tốt </h2>
           {data.map((data)=>{
                return <Touradd status={'0'} name={data.TenTour} img={data.HinhAnh.data} MaTour={data.MaTour}/>
           })}
            
        </div>
     );
}

export default Star;