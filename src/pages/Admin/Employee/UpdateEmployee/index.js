import React, { useEffect, useState } from "react";
import style from "./UpdateEmployee.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../components/Button";
import axios from "../../../../setup-axios/axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCancel,
  faRightToBracket,
  faRotateRight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../../components/Modal";
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
  const [modal, setModal] = useState(false);
  const fetchPostion = () => {
    axios.get("/position/list-position").then((res) => {
      if (res && res.message === "success") {
        setListPosition(res.data);
      }
    });
  };
  // const fetchById = (user) => {
  //   let response = axios.get("/employees/GetById-employee/", { id });
  //   if (response) {
  //     console.log(response.data);
  //   }
  // };
  const checkValidate = () => {
    if (TenNV === "") {
      toast.warning("Vui lòng nhập đầy đủ họ tên nhân viên");
      return false;
    }
    if (cmnd === "" || cmnd.length !== 12) {
      toast.warning("Vui lòng nhập căn cước công dân nhân viên");
      return false;
    }
    if (Sdt === "") {
      toast.warning("Vui lòng nhập số điện thoại");
      return false;
    }
    return true;
  };
  const handleUpdate = async () => {
    let check = checkValidate();
    if (check === true) {
      await axios
        .put(`/employees/update-employee`, {
          id,
          TenNV,
          cmnd,
          Sdt,
          Position,
        })
        .then((response) => {
          if (response.message === "success") {
            toast.success("Cập nhật thành công!");
            navigate("/nhan-vien");
          }
        });
    }
  };
  const handleOut = () => {
    axios.put("/employees/employee-out", { id }).then((res) => {
      if (res && res.message === "success") {
        toast.success("Cap nhat thanh cong");
        navigate("/nhan-vien");
      }
    });
  };
  console.log(id);
  const setItemUpdate = () => {
    setId(location.state.MaNV);
    setTenvNV(location.state.TenNV);
    setCMND(location.state.CMND);
    setSdt(location.state.Sdt);
    setPosition(location.state.TenViTri);
  };
  useEffect(() => {
    console.log(location);
    setItemUpdate();
    fetchPostion();
    // fetchById();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <p>Sửa thông tin nhân viên</p>
      <div className={cx("form")}>
        <div className={cx("form-left")}>
          <div className={cx("form-input")}>
            <label htmlFor="">Tên nhân viên:</label>
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
              style={{ marginLeft: "85px" }}
              type="number"
              name=""
              id=""
              value={cmnd}
              onChange={(e) => setCMND(e.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">Số điện thoại:</label>
            <input
              style={{ marginLeft: "20px" }}
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
            <label htmlFor="">Vị trí:</label>
            <select
              name={Position}
              disabled
              id=""
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">{Position}</option>
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
        <button className={cx("btn-submit")} onClick={handleUpdate}>
          CẬP NHẬT <FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon>
        </button>
        <Link to="/nhan-vien" className={cx("text")}>
          <button className={cx("btn-cancel")}>
            TRỞ LẠI <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
          </button>
        </Link>
        <button className={cx("btn-off")} onClick={() => setModal(true)}>
          NGHỈ VIỆC <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
        </button>
      </div>
      {modal === true && (
        <Modal
          title="BẠN CÓ MUỐN CHO NHÂN VIÊN NÀY NGHỈ VIỆC"
          clickNo={() => setModal(false)}
          clickYes={() => handleOut()}
        />
      )}
    </div>
  );
}
