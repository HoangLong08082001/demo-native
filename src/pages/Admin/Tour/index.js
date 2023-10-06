import React, { useContext, useEffect, useState } from "react";
import style from "./Tour.module.scss";
import classNames from "classnames/bind";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
import Button from "../../../components/Button";
import axios from "../../../setup-axios/axios";
import {
  faCircleInfo,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(style);
export default function Tour() {
  const [toggle, setToggle] = useState(null);
  const handleToggle = (index) => {
    return setToggle(index);
  };
  const [listTour, setListTour] = useState([]);
  const fetchListTour = async () => {
    let response = await axios.get("/tour/alltour");
    if (response) {
      setListTour(response.data);
    }
  };
  useEffect(() => {
    fetchListTour();
  }, []);
  const handleRemove = () => {};
  const { user } = useContext(UserContext);
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        {user && user.accout.roles ? (
          <Button btnAdd to="/AddTour">
            THEM
          </Button>
        ) : (
          <></>
        )}
        {user && user.accout.roles ? (
          <div className={cx("search")}>
            <input type="text" name="" id="" placeholder="search employee" />
            <Button btnSearch>SEARCH</Button>
          </div>
        ) : (
          <></>
        )}
        <div className={cx("form-table")}>
          <table border={1} cellSpacing={0}>
            <tr>
              {/* <th>Status</th> */}
              <th>STT</th>
              <th>Ma Tour</th>
              <th>Dia diem di</th>
              <th>Dia diem den</th>
              <th>Ngay di</th>
              <th>Ngay ve</th>
              <th>Gia tour</th>
              <th>Loai Tour</th>
              <th>Action</th>
            </tr>
            {listTour.map((list, index) => {
              let ngaydi = new Date(list.NgayDi).toLocaleDateString("en-US");

              let ngayve = new Date(list.NgayVe).toLocaleDateString("en-US");
              return (
                <tr key={index}>
                  {/* <td onClick={() => handleToggle(index)}>
                    <div
                      className={
                        toggle === index ? cx("toggle-active") : cx("toggle")
                      }
                    >
                      <div
                        className={
                          toggle === index
                            ? cx("button-toggle-active")
                            : cx("button-toggle")
                        }
                      ></div>
                    </div>
                  </td> */}
                  <td>{index + 1}</td>
                  <td>
                    {list.LoaiTour}
                    {list.MaTour}
                  </td>
                  <td>{list.DiaDiemDi}</td>
                  <td>{list.DiaDiemDen}</td>
                  <td>{ngaydi}</td>
                  <td>{ngayve}</td>
                  <td>{list.GiaTour}</td>
                  <td>{list.LoaiTour}</td>
                  <td>
                    <Button to={`/detailEmployee/${list.MaNV}`}>
                      <FontAwesomeIcon
                        className={cx("icon-info")}
                        icon={faCircleInfo}
                      ></FontAwesomeIcon>
                    </Button>
                    <Button to={`/updateEmployee/${list.MaNV}`}>
                      <FontAwesomeIcon
                        className={cx("icon-pen")}
                        icon={faPen}
                      ></FontAwesomeIcon>
                    </Button>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={cx("icon-trash")}
                      onClick={() => handleRemove(list)}
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
    return <Navigate to="/login"></Navigate>;
  }
}
