import React, { useEffect, useState, useContext } from "react";
import style from "./Employee.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faEyeSlash,
  faCircleInfo,
  faPlusCircle,
  faFileExport,
  faX,
  faXmark,
  faInfo,
  faSort,
  faFileExcel,
  faUserCheck,
  faUserMinus,
  faEllipsisVertical,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "../../../setup-axios/axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
const cx = classNames.bind(style);
export default function Employee() {
  const [toggle, setToggle] = useState(1);
  const { user, logoutContext } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();
  const [listEmployee, setListEmployee] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // let session = sessionStorage.getItem("account");
    // if (!session) {
    //   navigate("/admin-login");
    // }
    fetchAllEmployee();
  }, []);
  const fetchAllEmployee = async () => {
    let response = await axios.get("/employees/list");
    if (response && response.data) {
      setListEmployee(response.data);
      console.log(response.data);
    }
  };
  const handleRemove = async (emp) => {
    await axios
      .delete(`/employees/delete-employee`, { data: { id: emp.MaNV } })
      .then((response) => {
        if (response.message === "success") {
          toast.success("Xoa thanh cong");
          fetchAllEmployee();
        }
      });
  };
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <Link to="/them-nhan-vien">
          <button className={cx("btn-add")}>
            THÊM NHÂN VIÊN{" "}
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          </button>
        </Link>
        <button className={cx("btnExcel")}>
          XUAT EXCEL <FontAwesomeIcon icon={faFileExcel}></FontAwesomeIcon>
        </button>
        <div className={cx("tab-pannel")}>
          <button
            onClick={() => setToggle(1)}
            className={toggle === 1 ? cx("checked-active") : cx("checked")}
          >
            Nhân viên đang làm <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </button>
          <button
            onClick={() => setToggle(2)}
            className={toggle === 2 ? cx("checked-active") : cx("checked")}
            style={{ marginLeft: "20px" }}
          >
            Nhân viên đã nghỉ{" "}
            <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
          </button>
        </div>
        {toggle === 1 ? (
          <>
            <div className={cx("search")}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name=""
                id=""
                placeholder="search employee"
              />
            </div>
            <div className={cx("form-table")}>
              <table border={1} cellSpacing={0}>
                <tr>
                  <th>STT </th>
                  <th>Mã nhân viên</th>
                  <th>Tên nhân viên</th>
                  <th>Email</th>
                  <th>Vị trí</th>
                  <th>Action</th>
                </tr>
                {listEmployee
                  .filter((item) => {
                    return search.toLowerCase() === "" ||
                      search.toUpperCase() === "" ||
                      search === ""
                      ? item
                      : item.Sdt.includes(search) ||
                          item.Email.toLowerCase().includes(search) ||
                          item.Email.toUpperCase().includes(search) ||
                          item.Email.includes(search) ||
                          item.TenViTri.toLowerCase().includes(search) ||
                          item.TenViTri.toUpperCase().includes(search) ||
                          item.TenViTri.includes(search) ||
                          item.TenNV.toLowerCase().includes(search) ||
                          item.TenNV.toUpperCase().includes(search) ||
                          item.TenNV.includes(search);
                  })
                  .map((list, index) => {
                    if (list.TrangThai === 1) {
                      return (
                        <tr key={index} className={cx("tr-on")}>
                          <td>{index + 1}</td>
                          <td>{list.MaNV}</td>
                          <td>{list.TenNV}</td>
                          <td>{list.Email}</td>
                          <td>{list.TenViTri}</td>

                          <td>
                            <button
                              className={cx("btnInfo")}
                              onClick={() => {
                                navigate(
                                  `/chi-tiet-nhan-vien/${list.TenNV}/${list.MaNV}`,
                                  { state: list }
                                );
                              }}
                            >
                              <FontAwesomeIcon
                                className={cx("icon-info")}
                                icon={faInfo}
                              ></FontAwesomeIcon>
                            </button>
                            <button
                              className={cx("btnUpdate")}
                              onClick={() =>
                                navigate("/sua-nhan-vien", { state: list })
                              }
                            >
                              <FontAwesomeIcon
                                className={cx("icon-pen")}
                                icon={faPen}
                              ></FontAwesomeIcon>
                            </button>
                            {/* <button className={cx("btnTrash")}>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className={cx("icon-trash")}
                                onClick={() => handleRemove(list)}
                              >
                                DELETE
                              </FontAwesomeIcon>
                            </button> */}
                          </td>
                        </tr>
                      );
                    }
                  })}
              </table>
            </div>
          </>
        ) : (
          <></>
        )}
        {toggle === 2 ? (
          <>
            <div className={cx("form-table")}>
              <table border={1} cellSpacing={0}>
                <tr>
                  <th>STT </th>
                  <th>Mã nhân viên</th>
                  <th>Tên nhân viên</th>
                  <th>Email</th>
                  <th>Vị trí</th>
                </tr>
                {listEmployee.map((list, index) => {
                  if (list.TrangThai === 0) {
                    return (
                      <tr key={index} className={cx("tr-off")}>
                        <td>{index + 1}</td>
                        <td>{list.MaNV}</td>
                        <td>{list.TenNV}</td>
                        <td>{list.Email}</td>
                        <td>{list.TenViTri}</td>

                        {/* <td>
                          <button
                            className={cx("btnInfo")}
                            onClick={() => {
                              navigate(
                                `/detailEmployee/${list.TenNV}/${list.MaNV}`,
                                { state: list }
                              );
                            }}
                          >
                            <FontAwesomeIcon
                              className={cx("icon-info")}
                              icon={faInfo}
                            ></FontAwesomeIcon>
                          </button>
                          <button
                            className={cx("btnUpdate")}
                            onClick={() =>
                              navigate("/updateEmployee", { state: list })
                            }
                          >
                            <FontAwesomeIcon
                              className={cx("icon-pen")}
                              icon={faPen}
                            ></FontAwesomeIcon>
                          </button>
                          <button className={cx("btnTrash")}>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className={cx("icon-trash")}
                                onClick={() => handleRemove(list)}
                              >
                                DELETE
                              </FontAwesomeIcon>
                            </button>
                        </td> */}
                      </tr>
                    );
                  }
                })}
              </table>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    <Navigate to="/admin-login"></Navigate>;
  }
}
