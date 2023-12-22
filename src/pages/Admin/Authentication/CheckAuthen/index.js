import React, { useContext, useEffect, useState } from "react";
import style from "./CheckAuthen.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import axios from "../../../../setup-axios/axios";
import _ from "lodash";
import { toast } from "react-toastify";
import { UserContext } from "../../../../context/UserContext";
const cx = classNames.bind(style);
export default function CheckAuthen() {
  const { user } = useContext(UserContext);
  const [listPostion, setListPosition] = useState([]);
  const [postion, setPostion] = useState("");
  const [listRule, setListRule] = useState([]);
  const [listChecked, setListChecked] = useState([]);
  const [newArrayTrue, setNewArrayTrue] = useState([]);
  const [newArrayFalse, setNewArrayFalse] = useState([]);
  const fetchPosition = () => {
    axios.get("/position/list-position").then((res) => {
      setListPosition(res.data);
    });
  };
  const fetchRule = () => {
    axios.get("/rule/get-rules").then((res) => {
      setListRule(res.data);
    });
  };
  const handleChange = (e) => {
    setPostion(e);
    if (e) {
      axios.get(`/position/getpositionbyid/${e}`).then((res) => {
        console.log(res.data);
        console.log(listRule);
        let result = createNewList(res.data, listRule);
        console.log(result);
        setListChecked(result);
      });
    }
  };
  const createNewList = (ruleByPostion, allRule) => {
    let result = [];
    if (allRule && allRule.length > 0) {
      allRule.map((role) => {
        let object = {};
        object.url_quyen = role.url_quyen;
        object.id_quyen = role.id_quyen;
        object.desccription = role.desccription;
        object.isChecked = false;
        if (ruleByPostion && ruleByPostion.length > 0) {
          object.isChecked = ruleByPostion.some(
            (item) => item.url_quyen === object.url_quyen
          );
        }
        result.push(object);
      });
    }
    return result;
  };
  //GIAI THICH HAM handleChecked
  //-lodash giup clone 1 mang tuong tu nhu mang listchecked nhung su anh huong khong thay doi len mang chinh
  //-Tao bien index la id_quyen cua mang copy, su dung findIndex de tim xem tung phan tu trong mang copy
  //co id_quyen = e(value cua checkbox)
  //-Neu index > -1 (Tuc la co gia tri)
  //-Bien isChecked se thay doi sang false neu la true va nguoc lai.
  const handleChecked = (e) => {
    const copyListChecked = _.cloneDeep(listChecked);
    let foundIndex = copyListChecked.findIndex((item) => +item.id_quyen === +e);
    if (foundIndex > -1) {
      copyListChecked[foundIndex].isChecked =
        !copyListChecked[foundIndex].isChecked;
    }
    setListChecked(copyListChecked);
  };
  const createNewData = () => {
    let result = {};
    const copyListChecked = _.cloneDeep(listChecked);
    result.id_vitri = postion;
    let positionRuleFilter = copyListChecked.filter(
      (item) => item.isChecked === true
    );
    let Array = positionRuleFilter.map((item) => {
      let data = [+postion, +item.id_quyen];
      return data;
    });
    result.Rule = Array;
    return result;
  };
  const handleSubmit = () => {
    let data = createNewData();
    console.log(listChecked);
    console.log(data);
    axios.post("/rule/assign", { data }).then((res) => {
      if (res.message === "success") {
        toast.success("Gán quyền thành công!");
      }
      if (res.message === "fails") {
        toast.error("Không thể gán quyền!");
      }
    });
  };
  useEffect(() => {
    fetchPosition();
    fetchRule();
  }, []);

  if (user && user.isAuthenticated === true) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("btn")}>
          <Link to="/phan-quyen">
            <button className={cx("btn-cancel")}>
              TRO LAI <FontAwesomeIcon icon={faArrowRotateLeft} />
            </button>
          </Link>
        </div>
        <div className={cx("form")}>
          <div className={cx("btn-form")}>
            <select
              name=""
              id=""
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="">--Vui lòng chọn vị trí--</option>
              {listPostion.map((item, index) => {
                return (
                  <option key={index} value={item.id_vitri}>
                    {item.TenViTri}
                  </option>
                );
              })}
            </select>
          </div>
          {postion && (
            <>
              <div className={cx("list-position")}>
                {listChecked.map((item, index) => {
                  if (item.desccription !== null) {
                    return (
                      <div key={index} className={cx("position")}>
                        <input
                          type="checkbox"
                          value={item.id_quyen}
                          checked={item.isChecked}
                          name=""
                          id={index}
                          onChange={(e) => handleChecked(e.target.value)}
                        />
                        <label htmlFor={index}>{item.desccription}</label>
                      </div>
                    );
                  }
                })}
              </div>

              <button className={cx("update")} onClick={() => handleSubmit()}>
                CẬP NHẬT
              </button>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/admin-login"></Navigate>;
  }
}
