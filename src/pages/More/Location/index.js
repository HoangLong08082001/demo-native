
import styles from "./Location.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);
export default function Location(props) {
  const [value,setvalue]=useState([])
  const {nn}=useParams();
  console.log(nn);
  const tn=["Tour Trong Nước","Miền Bắc","Miền Nam","Miền Trung"]
  const ncn=["Tour Nước Ngoài","Châu Á","Châu Âu","Châu Phi"]
  useEffect(()=>{
    if(nn==="TourTrongNuoc")
    {
      setvalue(tn);
    }
    else if(nn==="TourNuocNgoai")
      setvalue(ncn);
  },[nn])
  if(nn==="TourTrongNuoc")
  {
    var handleBac=()=>{
      props.parentcallback("Miền Bắc")
    }
    var handleNam=()=>{
      props.parentcallback("Miền Nam")
    }
    var handleTrung=()=>{
      props.parentcallback("Miền Trung")
    }
  }else
  {
    var handleBac=()=>{
      props.parentcallback("Châu Á")
    }
    var handleNam=()=>{
      props.parentcallback("Châu Âu")
    }
    var handleTrung=()=>{
      props.parentcallback("Châu Phi")
    }
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("line")}><h2 className={cx("arrow")} >{ value[0]   }</h2></div>
      <div className={cx("line-one")}>

        <Button check   buttonlocation marginleft onClick={handleBac}>
           {value[1]}
        </Button>
        
        <Button  buttonlocation marginleft onClick={handleNam}>
           {value[2]}
        </Button>
        <Button buttonlocation marginleft onClick={handleTrung}>
          {value[3]}
        </Button>
      
      </div>
      
      
    </div>
  );
}
