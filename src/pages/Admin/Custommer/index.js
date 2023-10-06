import React, { useContext, useEffect, useState } from "react";
import style from "./Custommer.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import axios from "../../../setup-axios/axios";
import {
  faCircleInfo,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Custommer() {
  const { user } = useContext(UserContext);

  const [listCustommer, setListCustommer] = useState([]);
  const fetchAllCustommer = async () => {
    let response = await axios.get("/custommer/list-customer");
    if (response && response.data === "ok") {
      setListCustommer(response.list);
    }
  };
  useEffect(() => {
    fetchAllCustommer();
  }, []);
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        {user && user.accout.role ? (
          <div className={cx("search")}>
            <input type="text" name="" id="" placeholder="search custommer" />
            <Button btnSearch>SEARCH</Button>
          </div>
        ) : (
          <></>
        )}
        <div className={cx("form-table")}>
          <table border={1} cellSpacing={0}>
            <tr>
              <th>STT</th>
              <th>Ten Khach Hang</th>
              <th>Sdt</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            {listCustommer.map((list, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{list.TenKH}</td>
                  <td>{list.username}</td>
                  <td>{list.Sdt}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={cx("icon-trash")}
                    >
                      DELETE
                    </FontAwesomeIcon>
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
