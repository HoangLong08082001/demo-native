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
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "../../../setup-axios/axios";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
const cx = classNames.bind(style);
export default function Employee() {
  const [id, setId] = useState("");

  const { user } = useContext(UserContext);
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
        <Button btnAdd to="/AddEmployee">
          THEM <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        </Button>
        <Button btnExcel>
          XUAT EXCEL <FontAwesomeIcon icon={faFileExport}></FontAwesomeIcon>
        </Button>
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
              <th>Ma Nhan Vien</th>
              <th>Ten Nhan Vien</th>
              <th>Sdt</th>
              <th>Email</th>
              <th>Vi tri</th>
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
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {list.TenViTri}
                      {list.MaNV}
                    </td>
                    <td>{list.TenNV}</td>
                    <td>{list.Sdt}</td>
                    <td>{list.Email}</td>
                    <td>{list.TenViTri}</td>

                    <td>
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
