import classname from "classnames/bind";
import styles from "./Searchresult.module.scss";
import ProductBox from "../../../components/Product";
import { useState } from "react";

const cx = classname.bind(styles);
function Searchresult({data,Ketqua,moment}) {
 
    return (  
    <div className={cx("wrapper")}>
         {moment ?(<div>
            <h2 >Kết Quả Tìm Kiếm</h2>
            <div className={cx("List-tour")}>
              {
                
                data.map(value=>{
                  return (<ProductBox key={value.MaTour}id={value.MaTour}
                    MaTour={value.MaTour}
                    Name={value.TenTour}
                    DiaDiemDen={value.DiaDiemDen}
                    img={value.HinhAnh.data}
                    price={value.GiaTour}
                    percent={value.mucgiamgia}   container />)
                })
              }
              
            </div>
         </div>):(<p className={cx("wrapper-ketqua")}>{Ketqua}</p>)}
  </div> );
}

export default Searchresult;