import React, { useState } from "react";
import style from "./Discount.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AutoTable from "./AutoTable";
import UnAutoTable from "./UnAutoTable";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function Discount() {
  const [pannel, setPannel] = useState(1);
  const pannels = [
    {
      name: "Giảm giá tự động",
      components: "",
    },
    {
      name: "Giảm giá thêm",
      components: "",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("btn")}>
        <Link to="/them-giam-gia">
          <button className={cx("btn-add")}>
            THÊM ĐỢT GIẢM GIÁ <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </Link>
        <button className={cx("btn-excel")}>
          XUẤT EXCEL <FontAwesomeIcon icon={faFileExcel} />
        </button>
      </div>
      <div className={cx("tab-panel")}>
        <button
          onClick={() => setPannel(1)}
          className={pannel === 1 ? cx("tab-active") : cx("tab")}
        >
          Giảm giá tự động
        </button>
        <button
          onClick={() => setPannel(2)}
          className={pannel === 2 ? cx("tab-active") : cx("tab")}
        >
          Giảm giá thêm
        </button>
      </div>
      <div className={cx("form-table")}>
        {pannel === 1 && <AutoTable />}
        {pannel === 2 && <UnAutoTable />}
      </div>
    </div>
  );
}
