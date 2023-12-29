import React, { useContext, useEffect, useState } from "react";
import style from "./Custommer.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import axios from "../../../setup-axios/axios";
import {
  faCircleInfo,
  faPen,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../../context/UserContext";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function Custommer() {
  const { user } = useContext(UserContext);
  const [search, setSearch] = useState("");
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
  const handleRemove = async (list) => {
    await axios
      .delete("/custommer/delete-custommer", { data: { id: list.MaKH } })
      .then((res) => {
        if (res.message === "success") {
          toast.success("Xoa thanh cong");
          fetchAllCustommer();
        }
      });
  };
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <Link to="/them-khach-hang">
          <button className={cx("btn-add")}>
            THÊM KHÁCH HÀNG{" "}
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          </button>
        </Link>
        <div className={cx("search")}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="search employee"
          />
        </div>

        <div className={cx("form-table")}>
          <table border={1} cellSpacing={0}>
            <tr>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Email</th>
              <th>Sdt</th>
              <th>Action</th>
            </tr>
            {listCustommer
              .filter((item) => {
                return search === "" ? item : item.Sdt.includes(search);
              })
              .map((list, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{list.TenKH}</td>
                    <td>{list.username}</td>
                    <td>{list.Sdt}</td>
                    <td>
                      <button onClick={() => handleRemove(list)}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={cx("icon-trash")}
                        >
                          DELETE
                        </FontAwesomeIcon>
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
