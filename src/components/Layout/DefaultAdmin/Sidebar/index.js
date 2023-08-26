import React, { useState } from "react";
import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faMoneyBill,
  faPlane,
  faTicket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
export default function Sidebar() {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-admin")}>
        <p>DASHBOARD</p>
      </div>
      <div className={cx("list-menu")}>
        <ul>
          <li onClick={handleActive}>
            <FontAwesomeIcon className={cx("icon")} icon={faHome}>
              {" "}
            </FontAwesomeIcon>
            <p>
              <Button itemmenu to="/admin-home">
                Trang chu
              </Button>
            </p>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faUser}
            ></FontAwesomeIcon>
            <p>
              <Button itemmenu to="/employee">
                Nhan vien
              </Button>
            </p>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faTicket}
            ></FontAwesomeIcon>
            <p>
              <Button itemmenu to="/">
                Hoa don{" "}
              </Button>
            </p>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faPlane}
            ></FontAwesomeIcon>
            <p>
              <Button itemmenu to="/">
                Tours
              </Button>
            </p>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faMoneyBill}
            ></FontAwesomeIcon>
            <p>
              <Button itemmenu to="/">
                Phieu dat tour
              </Button>
            </p>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faList}
            ></FontAwesomeIcon>
            <p>
              <Button itemmenu to="/">
                Vi tri quyen
              </Button>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
