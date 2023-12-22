import React, { useContext, useEffect, useState } from "react";
import style from "./AddPosition.module.scss";
import classNames from "classnames/bind";
import axios from "../../../../setup-axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../../context/UserContext";

const cx = classNames.bind(style);
export default function AddPosition() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState("");
  const validate = () => {
    if (!/[a-zA-Z]/.test(name)) {
      toast.warning("Vui lòng không nhập số!");
      return false;
    }
    toast.success("Thêm thành công");
    return true;
  };
  const handleSubmit = () => {
    let check = validate();
    if (check) {
      axios.post("/position/add-position", { name }).then((res) => {
        setName("");
      });
    }
  };
  useEffect(() => {}, []);
  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <p className={cx("title")}>THÊM VỊ TRÍ</p>
        <div className={cx("form")}>
          <label htmlFor="">TÊN VỊ TRÍ: </label>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên vị trí(VD: nhân sự)"
          />
        </div>

        <div className={cx("btn")}>
          <Link to="/phan-quyen">
            <button className={cx("cancel")}>
              HUỶ <FontAwesomeIcon icon={faCancel} />
            </button>
          </Link>
          <button className={cx("add")} onClick={() => handleSubmit()}>
            THÊM <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
