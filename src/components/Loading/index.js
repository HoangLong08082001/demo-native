
import classname from "classnames/bind";
import styles from "./Loading.module.scss";
const cx = classname.bind(styles);
function loading() {
    return (  <div className={cx("loader-container")}>
            <div className={cx("spinner")}>
            <p>Loading...</p>
    </div>
    
</div> );
}

export default loading;