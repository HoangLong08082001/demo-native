import classname from "classnames/bind";
import styles from "./Alert.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClose, faSmile } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
const cx = classname.bind(styles);
function Alert(props) {
    
    const handleclose=()=>{
        props.callBackParent(false); 
    }
    return ( <div className={cx("container")}>
        <div className={cx("container-box")}>
            <div className={cx("container-box-main")} >
                <h5>{props.dataprops}</h5>
                <FontAwesomeIcon onClick={handleclose} icon={faClose}/>
            </div>
            <div className={cx("container-box-1")}>
                <FontAwesomeIcon icon={faSmile}/>
            </div>
            <div className={cx("container-box-2")} >
                <h5>Danh Sách Yêu Thích</h5>
                <Button addlike to={"/user"}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                    <FontAwesomeIcon icon={faChevronRight}/>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </Button>
            </div>
        </div>
    </div> );
}

export default Alert;