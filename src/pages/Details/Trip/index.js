import * as React from "react";
import styles from "./Trip.module.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useReactToPrint } from "react-to-print";
import TabPanel from "@mui/lab/TabPanel";
import HTMLReactParser from "html-react-parser";
import classNames from "classnames/bind";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPrint } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
export default function Trip({ trip }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY >= 1100 && window.scrollY <= 3550) {
        setShow(!show);
      } else {
        setShow(show);
      }
    };
    window.addEventListener("scroll", handlScroll);
    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);
  const [value, setValue] = useState("9");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("wrapper-title")}>Lịch Trình Tour</h2>
      <button onClick={handlePrint} className={cx("wrapper-title-btn")}>
        <FontAwesomeIcon icon={faPrint} />
        Print Tour
      </button>{" "}
      (Vui Lòng Chọn Tất Cả Lịch Trình Tour Để In)
      <div className={cx("img-box")}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", fontWeight: 600 }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
              >
                {trip.map((values,index)=>{
                 if(values === "" || values ==="<p>null</p>" ||values === null )
                 {}
                 else
                 {
                  return( <Tab label={`Ngày ${index + 1}`} value={index +1 } />)
                 }
                })}
                <Tab label="Tất Cả" value="9" />
              </TabList>
            </Box>

            {
              trip.map((values,index)=>{
                return(<TabPanel  value={index + 1 }> {HTMLReactParser(`${values}`)}</TabPanel>)
              })
            }
          
            <TabPanel ref={componentRef} value="9">
             {trip.map((values)=>{
              return( HTMLReactParser(`${values}`)
           )
             })}
              </TabPanel>
          </TabContext>
        </Box>
      </div>
      {/* <div className={cx("help")}>{show && <HelpForm />}</div> */}
    </div>
  );
}
