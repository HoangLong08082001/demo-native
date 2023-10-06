import React, { useEffect, useState } from "react";
import style from "./UpdateEmployee.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button";
import axios from "../../../../setup-axios/axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function UpdateEmployee() {
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [TenNV, setTenvNV] = useState("");
  const [cmnd, setCMND] = useState("");
  const [Sdt, setSdt] = useState("");
  const [Position, setPosition] = useState("");
  const [listPosition, setListPosition] = useState([]);
  const fetchPostion = () => {
    axios.get("/position/list-postion").then((res) => {
      setListPosition(res.data);
    });
  };
  // const fetchById = (user) => {
  //   let response = axios.get("/employees/GetById-employee/", { id });
  //   if (response) {
  //     console.log(response.data);
  //   }
  // };
  const handleUpdate = async () => {
    let response = await axios.put(`/employees/update-employee`, {
      id,
      TenNV,
      cmnd,
      Sdt,
      Position,
    });
    if (response && response.message === "success") {
      toast.success("Update succcess");
      navigate("/employee");
    }
  };
  const setItemUpdate = () => {
    setId(location.state.MaNV);
    setTenvNV(location.state.TenNV);
    setCMND(location.state.CMND);
    setSdt(location.state.Sdt);
    setPosition(location.state.id_vitri);
  };
  useEffect(() => {
    console.log(location);
    setItemUpdate();
    fetchPostion();
    // fetchById();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <Button btnAdd to="/employee">
        TRO LAI
      </Button>
      <p>Sua thong tin nhan vien</p>
      <div className={cx("form")}>
        <div className={cx("form-left")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Ten nhan vien:</label>
            <input
              type="text"
              name=""
              id=""
              value={TenNV}
              onChange={(e) => setTenvNV(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">CMND:</label>
            <input
              type="number"
              name=""
              id=""
              value={cmnd}
              onChange={(e) => setCMND(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">So dien thoai:</label>
            <input
              type="number"
              name=""
              id=""
              value={Sdt}
              onChange={(e) => setSdt(e.target.value)}
            />
          </div>
        </div>
        <div className={cx("form-right")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Vi tri:</label>
            <select
              name={Position}
              disabled
              id=""
              onChange={(e) => setPosition(e.target.value)}
            >
              {listPosition.length > 0 &&
                listPosition.map((postion, index) => {
                  return (
                    <option value={postion.id_vitri} key={index}>
                      {postion.TenViTri}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </div>
      <div className={cx("btn-submit")}>
        <Button type="submit" btnSubmit onClick={handleUpdate}>
          Update
        </Button>
      </div>
    </div>
  );
}
