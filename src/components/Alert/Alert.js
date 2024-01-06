import classname from "classnames/bind";
import styles from "./Alert.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleCheck, faClose, faSadCry, faSmile } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { icon } from "@fortawesome/fontawesome-svg-core";
const cx = classname.bind(styles);
function Alert(props) {
    
    const handleclose=()=>{
        props.callBackParent(false); 
    }
    return ( <div className={cx("container")}>
        <div className={cx("container-box")}>
            <div className={cx("container-box-main")} >
                <h5>{props.dataprops}</h5>
                {props.good === 1?(<FontAwesomeIcon onClick={handleclose} icon={faClose}/>):('')}
            </div>
            {
                props.good===1?(
                    <div className={cx("container-box-1")}>
                {props.icon === 0  ?(<FontAwesomeIcon icon={faSmile}/>) :(props.icon === 2 ?(<FontAwesomeIcon icon={faSmile}/>):(<FontAwesomeIcon icon={faSadCry}/>))}
            </div>
                ):(<div className={cx("container-box-1")}>
                    <FontAwesomeIcon style={{color:"green"}} icon={faCircleCheck}/>
            </div>)
            }
            {props.good===1?(<div className={cx("container-box-2")} >
                {props.icon ===0?(<h5>Danh Sách Yêu Thích</h5>) : (props.icon===2)?( (props.datatt.map((value)=>{
                    return(<h5 style={{color:"green",fontWeight:600}}>{value}</h5>)
                }))):( (props.datatt.map((value)=>{
                    return(<h5 style={{color:"red",fontWeight:600}}>{value}</h5>)
                })))}
                {props.icon === 0 ?(<Button addlike to={"/user"}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                    <FontAwesomeIcon icon={faChevronRight}/>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </Button>) : ("")}
                </div>)
                :
                (<div >
                    <h5>Vui lòng nhấn nút bên dưới để xem chi tiết phiếu đặt tour</h5>
                    <div  className={cx("container-box-a")}>   <Button watchdetai   to={props.url}>Chi Tiết</Button></div>
                </div>)}
        </div>
    </div> );
}

export default Alert;