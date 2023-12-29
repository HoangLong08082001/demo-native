import classname from "classnames/bind";
import Button from "../../../components/Button";
import styles from "./Location.module.scss";
import ProductBox from "../../../components/Product";
import axios from "../../../setup-axios/axios";

import { useState, useEffect } from "react";
const cx = classname.bind(styles);
function Location() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("/tour/alltour").then((response) => {
      setdata(response.data);
    });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <h2>Hè 2023</h2>

      {/* <div className={cx("location-tour")}>
        <Button buttonproduct>Trong Nước</Button>
        <Button buttonproduct>Châu Âu</Button>
        <Button buttonproduct>Đông Nam Á</Button>
        <Button buttonproduct>Châu Mỹ</Button>
        <Button buttonproduct>Châu Phi</Button>
      </div> */}
      <div className={cx("List-tour")}>
        {data.map((value) => {
          return (
            <ProductBox
              key={value.MaTour}
              id={value.MaTour}
              MaTour={value.MaTour}
              Name={value.TenTour}
              DiaDiemDen={value.DiaDiemDen}
              img={value.HinhAnh.data}
              price={value.GiaTour}
              container
            />
          );
        })}
      </div>
      <div className={cx("Watch-add")}>
        <Button to="/more-summer" LinkMore>
          Xem Thêm
        </Button>
      </div>
    </div>
  );
}

export default Location;
