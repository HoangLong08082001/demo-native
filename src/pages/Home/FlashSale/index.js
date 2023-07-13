import Button from "../../../components/Button";
import Slider from "./Slider"
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.css";
function FlashSale() {
    return ( <div>
        <div><h2 style={{color:'#2f81bd ',marginLeft:20}}>FLASH SALES</h2></div>
        <Slider/>
       
    </div> );
}

export default FlashSale;