import React, { useEffect, useLayoutEffect, useState } from "react";
import FlashSale from "./FlashSale";
import Location from "./Location";
import Sort from "./Sort";
import Tours from "./Tours";
import Endow from "./Endow";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loadingall";
export default function More() {
  const {nn}=useParams();
  const [status,setState] = useState(false)
  const [datalocation,setdatalocation] =useState(null) ;
  const [dataPrice,setdataprice] = useState(0);
  const [dataDate,setdatadate] = useState("");
  const [ham,setham]=useState(true);

  useEffect(()=>{
      setdatalocation(null);
  },[nn])
  useLayoutEffect(() => {
    if(nn===undefined)
    {
      setState(true);
      window.scrollTo(0,0);
    }
    else
      setState(false);
    
  });
  const handleLocation =(valuelocation) => {
      setdatalocation(valuelocation);
  }
  const handlePrice =(valueprice) => {
    setdataprice(valueprice);

  }
  const handlecallbackdate=(valueDate)=>{
    
    setdatadate(valueDate);

  }
 
  useEffect(() => {
    setTimeout(() => {
     setham(false)
    }, 1500);
  }, [ham]);
  return (
    <div>
      {ham === true ?(<Loading/>):('')}
      {status ?(null) :(<Location parentcallback={handleLocation} />)}
      <Sort parentcallback={handlePrice} parentcallbackdate={handlecallbackdate}  />
      <Tours valueprice={dataPrice} valueday={dataDate} valuelocation={datalocation}  />
      <Endow />
    </div>
  );
}
