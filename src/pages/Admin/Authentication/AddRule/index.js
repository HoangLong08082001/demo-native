import React, { useEffect, useState } from "react";
import style from "./AddRule.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "../../../../setup-axios/axios";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function AddRule() {
  const [listRule, setListRules] = useState([]);
  const [url, setUrl] = useState("");
  const [des, setDescription] = useState("");
  const fetchRule = () => {
    axios.get("/rule/get-rules").then((res) => {
      if (res.message === "success") {
        setListRules(res.data);
      }
    });
  };
  const checkValidate = () => {
    if (url === "" || des === "") {
      toast.warning("Vui lòng nhập đầy đủ");
      return false;
    }
    if (!/[a-zA-Z]/.test(des)) {
      //Regax: A-Za-z
      toast.warning("Vui lòng không nhập số");
      return false;
    } else if (!/\S/.test(url)) {
      //Regax: A-Za-z
      toast.warning("Vui lòng không nhập số");
      return false;
    } else if (!/\/+\S/.test(url)) {
      //Regax :/+A-Za-z
      toast.warning("Sai định dạng url");
      return false;
    }
    toast.success("Thêm thành công");
    return true;
  };
  const handleSubmit = () => {
    let validate = checkValidate();
    if (validate) {
      axios.post("/rule/add-rule", { url, des }).then((res) => {
        setUrl("");
        setDescription("");
      });
    }
  };
  useEffect(() => {
    fetchRule();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>THÊM QUYỀN</p>
      <div className={cx("input")}>
        <div className={cx("form-add")}>
          <div className={cx("form")}>
            <label htmlFor="">URL: </label>
            <input
              style={{ marginLeft: "25px", textTransform: "lowercase" }}
              type="text"
              name=""
              id=""
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder=" /add-employee"
            />
          </div>
          <div className={cx("form")}>
            <label htmlFor="">MÔ TẢ: </label>
            <input
              style={{ textTransform: "uppercase" }}
              type="text"
              name=""
              id=""
              value={des}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="(vd:THÊM NHÂN VIÊN)"
            />
          </div>
        </div>
        <div className={cx("btn")}>
          <Link to="/phan-quyen">
            <button className={cx("cancel")}>
              HUỶ <FontAwesomeIcon icon={faCancel} />
            </button>
          </Link>
          <button className={cx("add")} onClick={() => handleSubmit()}>
            THÊM <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className={cx("list-rule")}>
        <table border={1} cellSpacing={0}>
          <tr className={cx("tr-title")}>
            <th>URL</th>
            <th>MÔ TẢ</th>
          </tr>
          {listRule.map((item, index) => {
            return (
              <tr>
                <td>{item.url_quyen}</td>
                <td>{item.desccription}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
