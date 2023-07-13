import {  useEffect, useRef, useState } from "react";
import axios from "axios"
import {  useNavigate } from "react-router-dom";
import Slider from'./Slider'
import Panner from "./Panner";
import FlashSale from "./FlashSale";
import Location from "./Location";
import Search from "./Search";
import Connect from "./Connect-partner";
import Famos from "./Famos";
import HotLocation from "./Hot";
function Home() {
    
    return ( 
      <div>
        <Slider/>
        <Search/>
        <FlashSale/>
        <Panner/>
        <Location/>
        <Connect/>
        <Famos/>
        <HotLocation/>
      </div>
   );
}

export default Home;