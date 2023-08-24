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
      <div className={cx("location")}>
        <label htmlFor="location">Di diem</label>
        <input
          type="text"
          name=""
          id="location"
          placeholder="Ban muon di dau..."
        />
      </div>
      <div className={cx("day-go")}>
        <label htmlFor="daygo">Ngay di</label>
        <input type="date" name="" id="daygo" />
      </div>
      <div className={cx("day-out")}>
        <label htmlFor="dayout">Ngay ve</label>
        <input type="date" name="" id="dayout" />
      </div>
      <div className={cx("btn-search")}>
        <FontAwesomeIcon
          className={cx("icon-search")}
          icon={faSearch}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Search;
