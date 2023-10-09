import classname from "classnames/bind";
import Calendar from "react-calendar";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import axios from "../../../setup-axios/axios";
import { toast } from "react-toastify";
import Searchresult from "../SearchResult";
const cx = classname.bind(styles);
function Search(props) {
  const [diadiem, setdiadiem] = useState("");
  const [ngaydi, setngaydi] = useState();
  const [ngayve, setngayve] = useState();
  

  var value2 = [];
  const value = {
    DiaDiemDen: diadiem,
    NgayDi: ngaydi,
    NgayVe: ngayve,
  };

  const handleSearch = () => {
    
    if (ngaydi > ngayve) {
      toast.warning("Kiem Tra Lai Thong Tin Ngay");
      return;
    } else if (
      value.DiaDiemDen != null &&
      value.NgayDi != null &&
      value.NgayVe != null
    ) {
      axios.post("/tour/search", value).then((response) => {
        value2 = response.data;
        props.parentCallback(value2,true);
      });
    } else {
      toast.warning("Vui Long Dien Day Du Thong Tin Tim Kiem");
      return;
    }
  };  

  return (
    <div className={cx("wrapper")}>
      <div className={cx("location")}>
        <label htmlFor="location">Địa Điểm </label>
        <input
          type="text"
          name=""
          id="location"
          placeholder="Bạn muốn khám phá nơi nào ..."
          onChange={(e) => setdiadiem(e.target.value)}
        />
      </div>
      <div className={cx("day-go")}>
        <label htmlFor="daygo">Từ Ngày</label>
        <input
          type="date"
          name=""
          id="daygo"
          onChange={(e) => setngaydi(e.target.value)}
        />
      </div>
      <div className={cx("day-out")}>
        <label htmlFor="dayout">Đến Ngày</label>
        <input
          type="date"
          name=""
          id="dayout"
          onChange={(e) => setngayve(e.target.value)}
        />
      </div>
      <div onClick={handleSearch} className={cx("btn-search")}>
        <FontAwesomeIcon
          className={cx("icon-search")}
          icon={faSearch}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Search;
