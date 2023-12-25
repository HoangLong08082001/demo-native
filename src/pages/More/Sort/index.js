import React, { useState } from "react";
import styles from "./Sort.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSort } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function Sort(props) {
  const [price,setprice]=useState("");
  const [date,setdate]=useState("");
  const [status,setstatus]=useState(false);
 
  const handleprice=(e)=>{
    props.parentcallback(e.target.value);
    if(e.target.value===1)
    {
      setprice("Từ cao đến thấp")
    }
    else
     setprice("Từ thấp đến cao")
    
  }
  const hanldedate=(e)=>{
    if(e.target.value === 0)
    {
      setdate('Theo')
      props.parentcallbackdate(e.target.value);
      setstatus(true);
    }
    else
    {
      setdate(e.target.value)
      props.parentcallbackdate(e.target.value);
      setstatus(true);
    }
 
  }
  return (
  <div className={cx("wrapper")}>
   <input className={cx("cscheck1")} type="radio" name="check" id="check1" ></input>
    <label for="check1" className={cx("wrapper-full")}>
      <div className={cx("sort-form")}>
        <p>Sắp Xếp Theo</p>

      </div>
      <div className={cx("sort-tour")}>
          <input className={cx("cscheck2")} type="radio" name="check" id="check2" ></input>
          <label for="check2" >{`Giá ${price}`} </label>
          <FontAwesomeIcon icon={faCaretDown}/>
          
          <div className={cx("sort-tour-down-price")}>
              <ul>
                <li value={1} onClick={handleprice}>Từ cao đến thấp</li>
                <li value={2} onClick={handleprice}>Từ thấp đến cao</li>
                
              </ul>
          </div>
      </div>
      <div className={cx("sort-tour")}>
          <input  className={cx("cscheck3")} type="radio" name="check" id="check3" ></input>
          <label for="check3"  >{status ? (`Tour ${date} Ngày`) : ("Tour Theo Ngày")}</label>
          <label for ><FontAwesomeIcon icon={faCaretDown}/></label>
          
          <div className={cx("sort-tour-down-date")}>
              <ul>
                <li value={2} onClick={hanldedate}>Tour 2 Ngày</li>
                <li value={3} onClick={hanldedate}>Tour 3 Ngày</li>
                <li value={4} onClick={hanldedate}>Tour 4 Ngày</li>
                
              </ul>
              <ul>
                <li value={5} onClick={hanldedate}>Tour 5 Ngày</li>
                <li value={6} onClick={hanldedate}>Tour 6 Ngày</li>
                <li value={7} onClick={hanldedate}>Tour 7 Ngày</li>
                <li value={null} onClick={hanldedate}>Tất Cả </li>
              </ul>
          </div>
      </div>
    </label>
      
  </div>
  );
}
