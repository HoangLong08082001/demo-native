import React, { useContext, useEffect, useState } from "react";
import style from "./Authentication.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckSquare,
  faCircle,
  faFileExcel,
} from "@fortawesome/free-regular-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "../../../setup-axios/axios";
import { UserContext } from "../../../context/UserContext";
const cx = classNames.bind(style);
export default function Authentication() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [ListPosition, setListPosition] = useState([]);
  const fetchPosition = () => {
    axios.get("/position/list-position").then((res) => {
      setListPosition(res.data);
    });
  };
  useEffect(() => {
    fetchPosition();
  }, []);
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("btn")}>
          <Link to="/them-vi-tri">
            <button className={cx("btn-add")}>
              THÊM VỊ TRÍ <FontAwesomeIcon icon={faPlusCircle} />
            </button>
          </Link>
          <Link to="/them-quyen">
            <button className={cx("btn-add")} style={{ marginLeft: "10px" }}>
              THÊM QUYỀN <FontAwesomeIcon icon={faPlusCircle} />
            </button>
          </Link>
          <Link to="/kiem-tra-quyen">
            <button className={cx("btn-check")} style={{ marginLeft: "10px" }}>
              PHÂN QUYỀN <FontAwesomeIcon icon={faUserCheck} />
            </button>
          </Link>
        </div>
        <div className={cx("form-table")}>
          <table border={1} cellSpacing={0} className={cx("table-show")}>
            <tr className={cx("tr-th")}>
              <th>TÊN VỊ TRÍ</th>
              <th>ACTION</th>
            </tr>
            {ListPosition.map((item, index) => {
              return (
                <tr className={cx("tr-td")}>
                  <td>{item.TenViTri}</td>

                  <td width={"20%"}>
                    <button
                      onClick={() =>
                        navigate(`/kiem-tra-quyen`, {
                          state: item,
                        })
                      }
                    >
                      Chi tiết <FontAwesomeIcon icon={faCheckSquare} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
