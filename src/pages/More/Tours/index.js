import React, { useEffect, useRef, useState } from "react";
import styles from "./Tours.module.scss";
import classNames from "classnames/bind";
import ProductBox from "../../../components/Product";
import Button from "../../../components/Button";
import ReactPaginate from "react-paginate";
import axios from "../../../setup-axios/axios";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);
export default function Tours({ valueprice, valueday, valuelocation }) {
  const [data, setdata] = useState([]);
  const arraydata = useRef([]);
  let [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const { nn } = useParams();
  useEffect(() => {
    const ss = "";
    if (nn === "TourTrongNuoc") {
      axios.post("/tour/alltour2", { data: "TN" }).then((response) => {
        setdata(response.data);
      });
    } else if (nn === "TourNuocNgoai") {
      axios.post("/tour/alltour2", { data: "NN" }).then((response) => {
        setdata(response.data);
      });
    } else {
      axios.post("/tour/alltour2", { data: null }).then((response) => {
        setdata(response.data);
      });
    }
  }, [nn]);

  arraydata.current = data;

  const key = { price: valueprice, date: valueday, location: valuelocation };

  useEffect(() => {
    if (key.location !== null) {
      arraydata.current = arraydata.current.filter((value) => {
        return value.vungMien === valuelocation;
      });
    } else {
    }
  });
  console.log(key.date);
  useEffect(() => {
    if (key.date > 0) {
      arraydata.current = arraydata.current.filter((value) => {
        const dateVe = new Date(value.NgayVe);
        const dateDi = new Date(value.NgayDi);
        return dateVe.getUTCDate() + 1 - (dateDi.getUTCDate() + 1) === valueday;
      });
    } else {
    }
  });


 

    if (key.price === 1) {
      arraydata.current.sort((a, b) => b.GiaTour - a.GiaTour);
   
    } else {
      arraydata.current.sort((a, b) => a.GiaTour - b.GiaTour);
    
    }
   
    



  useEffect(() => {
    
  
  
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(arraydata.current.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(arraydata.current.length / itemsPerPage));
   
  }, [itemOffset, itemsPerPage, arraydata.current, key.date, key.location,key.price]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % arraydata.current.length;

    setItemOffset(newOffset);
  };

  console.log(currentItems);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-tour")}>
        {currentItems.length > 0 ? (
          currentItems.map((value) => {
            return (
              <ProductBox
                key={value.MaTour}
                id={value.MaTour}
                Name={value.TenTour}
                DiaDiemDen={value.DiaDiemDen}
                price={value.GiaTour}
                img={value.HinhAnh.data}
                percent={value.mucgiamgiathem}
                container
              />
            );
          })
        ) : (
          <h5>Không Tìm Thấy</h5>
        )}
      </div>
      <div className={cx("paging")}>
        <ReactPaginate
          nextLabel=">"
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          // pageClassName="page-item"
          containerClassName={cx("pagination")}
          pageLinkClassName={cx("page-num")}
          // previousClassName="page-item"
          previousLinkClassName={cx("page-num")}
          // nextClassName="page-item"
          nextLinkClassName={cx("page-num")}
          // breakClassName="page-item"
          // breakLinkClassName="page-link"
          
          activeLinkClassName={cx("active")}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
