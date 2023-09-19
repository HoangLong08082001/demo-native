import React, { useEffect, useState } from "react";
import style from "./UpdateEmployee.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button";
import axios from "../../../../setup-axios/axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
export default function UpdateEmployee() {
  const navigate = useNavigate();
  const [TenNV, setTenvNV] = useState("");
  const [cmnd, setCMND] = useState("");
  const [Sdt, setSdt] = useState("");
  const [Position, setPosition] = useState("");
  const { id } = useParams();
  const [listPosition, setListPosition] = useState([]);
  const fetchPostion = () => {
    axios.get("/position/list-postion").then((res) => {
      console.log(res.data);
      setListPosition(res.data);
    });
  };
  const fetchById = () => {
    axios.get(`/employees/GetById/${id}`).then((response) => {
      if (response) {
        setTenvNV(response.data[0].TenNV);
        setCMND(response.data[0].CMND);
        setSdt(response.data[0].Sdt);
      }
    });
  };
  const handleUpdate = async () => {
    await axios
      .put(`/employees/update/${id}`, {
        TenNV,
        cmnd,
        Sdt,
        Position,
      })
      .then((res) => {
        if (res) {
          toast.success(`Cap nhat thanh cong ${TenNV}`);
        } else {
          toast.success(`Cap nhat that bai`);
        }
      });
  };
  useEffect(() => {
    fetchPostion();
    fetchById();
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
              id=""
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Chon vi tri</option>
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
