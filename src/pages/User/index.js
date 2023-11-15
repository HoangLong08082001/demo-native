import React, { useEffect, useState } from "react";
import style from "./User.module.scss";
import classNames from "classnames/bind";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import TabPanel from "@mui/lab/TabPanel";
import Touradd from "../../components/Touradd/Touradd";
import { faArrowRight, faCaretRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TTUser from "./TTUser";
import axios from "../../setup-axios/axios";
const cx = classNames.bind(style);
export default function User() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [arrayvalue,setarrayvalue]=useState([])
  useEffect(() =>{
     
          axios.post("/tour/gettourlove",{
              MaKH:localStorage.getItem("Ma"),
              }).then((response) => {
                  setarrayvalue(response.data);
              });
      
  },[])
  console.log(arrayvalue)
  return (
    <div className={cx("wrapper")}>
      <div className={cx("condition")}>
        <h4>Trang Chủ<FontAwesomeIcon icon={faChevronRight}/> Tài Khoản</h4>
        <h2>Tài Khoản</h2>
      </div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value} >
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", fontWeight: 600 }}
            >
              <TabList
                onChange={handleChange}
                
              >
                <Tab  sx={{  fontSize:"13px",fontWeight: 600 }} label="Thông Tin Tài Khoản" value="1" />
                <Tab  sx={{  fontSize:"13px",fontWeight: 600 }} label="Lịch Sử Tour" value="2" />
                <Tab  sx={{  fontSize:"13px",fontWeight: 600 }} label="Tour Yêu Thích" value="3" />
                
              </TabList>
            </Box>

            <TabPanel value="1" ><TTUser/>  </TabPanel>
            <TabPanel value="2" ><div style={{marginBottom:"100px"}}>
               
              </div></TabPanel>
            <TabPanel value="3" ><div style={{marginBottom:"100px"}}>
                {arrayvalue.map((value,index)=>{

                  return (<Touradd key={index} status="1" name={value.TenTour} img={value.HinhAnh.data} MaTour={value.MaTour} />)
                })}
               
              </div></TabPanel>
           
          </TabContext>
        </Box>
    </div>
  );
}
