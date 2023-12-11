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
  const [valuee,setvalue] =useState("");
  const [data2,setdata2] = useState([]);
  const data=["Hà Nội","Hồ Chí Minh","Nha Trang ","Đà Nẵng","Phú Quốc","SaPa","Ninh Bình","Quảng Ninh","Cần Thơ","Vũng Tàu","Đà Lạt"]
  var value2 = [];
  const value = {
    DiaDiemDen: diadiem,
    NgayDi: ngaydi,
    NgayVe: ngayve,
  };
  console.log(ngaydi)
  const handlesuget=(e)=>{
    setdiadiem(e);
    setvalue(e);

    if(e != ""){
      setdata2(data.filter((item)=>{
        return item.toLowerCase().includes(e.toLowerCase());
      }))
    }
    else
    {
      setdiadiem(null);
      setdata2([])
    }
  }
  const handleSugesttion=(e)=>{
      setvalue(e.target.id);
      setdata2([])
      setdiadiem(e.target.id);
  }
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
  console.log(valuee)
  return (
    <div className={cx("wrapper")}>
      <div className={cx("location")}>
        <label htmlFor="location">Địa Điểm </label>
        <input
          type="text"
          name=""
          id="location"
          placeholder="Bạn muốn khám phá nơi nào ..."
          value={valuee}
          onChange={e=>{handlesuget(e.target.value)}}
        />
        <div className={cx("location-suggestion")}>
          <ul>
            {
              data2.map((item,index) =>{
                
                return (<li key={index}  id={item} onClick={handleSugesttion}> {item}</li>)
              })
            }
          </ul>
        </div>
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
