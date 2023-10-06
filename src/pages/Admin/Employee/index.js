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
          THEM
        </Button>
        <div className={cx("search")}>
          <input type="text" name="" id="" placeholder="search employee" />
          <Button btnSearch>SEARCH</Button>
        </div>

        <div className={cx("form-table")}>
          <table border={1} cellSpacing={0}>
            <tr>
              <th>STT</th>
              <th>Ma Nhan Vien</th>
              <th>Ten Nhan Vien</th>
              <th>Sdt</th>
              <th>Email</th>
              <th>Vi tri</th>
              <th>Action</th>
            </tr>
            {listEmployee.map((list, index) => {
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
                    <Button
                      editbtn
                      onClick={() => {
                        navigate("/detailEmployee", { state: list });
                      }}
                    >
                      <FontAwesomeIcon
                        className={cx("icon-info")}
                        icon={faCircleInfo}
                      ></FontAwesomeIcon>
                    </Button>
                    <Button
                      editbtn
                      onClick={() =>
                        navigate("/updateEmployee", { state: list })
                      }
                    >
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
    return <Navigate to="/admin-login"></Navigate>;
  }
}
