import classname from "classnames/bind";
import Calendar from "react-calendar";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
const cx = classname.bind(styles);
function Search() {
  return (
    <div className={cx("wrapper")}>
      <form className={cx("wrapper-f")}>
        <div className={cx("form-destination")}>
          <span>Dia diem</span>
          <input type="text" placeholder="Ban sap di dau?" />
        </div>
        <div className={cx("departure-day")}>
          <span>Ngay di</span>
          <input type="date" />
        </div>
        <div className={cx("return-day")}>
          <span>Ngay ve</span>
          <input type="date" />
        </div>
        <div className={cx("btn-search")}>
          <Button search>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Search;
