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
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function User() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [arrayvalue,setarrayvalue]=useState([])
  const [arrayvaluebook,setarrayvaluebook]=useState([])
  const naviagete =useNavigate();
  useEffect(() =>{
     
          if(localStorage.getItem("Ma")===null)
          {
            naviagete("*")
          } 
          else
          {
            axios.post("/tour/gettourlove",{
              MaKH:localStorage.getItem("Ma"),
              }).then((response) => {
                  setarrayvalue(response.data);
              });
              axios.post("/tour/tourbook",{
                MaKH:localStorage.getItem("Ma")
                }).then((response) => {
                  setarrayvaluebook(response.data)
                });  
          } 
  },[])

  const hanldleclose=()=>{
    axios.post("/tour/gettourlove",{
      MaKH:localStorage.getItem("Ma"),
      }).then((response) => {
          setarrayvalue(response.data);
      });
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("condition")}>
        <h4>Trang Chủ<FontAwesomeIcon icon={faChevronRight}/> Tài Khoản</h4>
        <h2>Tài Khoản</h2>
      </div>
        <Box sx={{ width: "100%", typography: "body1",padding:0 }}>
          <TabContext value={value}  >
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", fontWeight: 600 }}
            >
              <TabList
                onChange={handleChange}
                sx={{ width: "100%", typography: "body1",padding:0  } }
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
              >
                <Tab  sx={{  fontSize:"13px",fontWeight: 600 }} label="Thông Tin Tài Khoản" value="1" />
                <Tab  sx={{  fontSize:"13px",fontWeight: 600 }} label="Lịch Sử Tour" value="2" />
                <Tab  sx={{  fontSize:"13px",fontWeight: 600 }} label="Tour Yêu Thích" value="3" />
                
              </TabList>
            </Box>

            <TabPanel sx={{padding:0 }} value="1" ><TTUser/>  </TabPanel>
            <TabPanel sx={{padding:0 }} value="2" ><div style={{marginBottom:"100px"}}>
            {arrayvaluebook.map((value,index)=>{

              return (<Touradd key={index} status="3" TrangThai={value.TrangThai} name={value.TenTour} img={value.HinhAnh.data} MaTour={value.MaTour} MaPhieu={value.MaPhieu} />)
              })}
              </div></TabPanel>
            <TabPanel sx={{padding:0 }} value="3" ><div style={{marginBottom:"100px"}}>
                {arrayvalue.map((value,index)=>{
                 
                  return (<Touradd key={index} status="1" name={value.TenTour} img={value.HinhAnh.data} MaTour={value.MaTour} TrangThai={value.TrangThai}  click={hanldleclose} />)
                })}
               
              </div></TabPanel>
           
          </TabContext>
        </Box>
    </div>
  );
}
