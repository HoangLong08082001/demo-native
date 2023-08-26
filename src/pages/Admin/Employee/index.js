import React from "react";
import style from "./Employee.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
export default function Employee() {
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
            <th>Ma Nhan Vien</th>
            <th>Ten Nhan Vien</th>
            <th>CMND</th>
            <th>Ngay Sinh</th>
            <th>Sdt</th>
            <th>Email</th>
            <th>Vi tri</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>7</td>
            <td>9</td>
            <td>1</td>
            <td>
              <FontAwesomeIcon
                className={cx("icon-pen")}
                icon={faPen}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className={cx("icon-trash")}
                icon={faTrash}
              ></FontAwesomeIcon>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
