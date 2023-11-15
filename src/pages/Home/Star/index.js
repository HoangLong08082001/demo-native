import Touradd from "../../../components/Touradd/Touradd";
import classname from "classnames/bind";

import styles from "../Hot/Hot.module.scss";

import img1 from "../../../assets/images/PhuQuoc/pq3.png"
const cx = classname.bind(styles);
function Star() {
    return ( 
        <div className={cx("wrapper")}>
             <h2>Đánh Giá Tốt </h2>
            <Touradd img={img1}/>
            <Touradd img={img1}/>
            <Touradd img={ img1}/>
            <Touradd img={ img1}/>
        </div>
     );
}

export default Star;