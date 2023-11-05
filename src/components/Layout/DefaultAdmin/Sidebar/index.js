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
  faUserGroup,
  faNewspaper,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
export default function Sidebar() {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  const menus = [
    { icon: faHome, title: "Trang chu", to: "/admin-home" },
    { icon: faUser, title: "Nhan vien", to: "/employee" },
    { icon: faUserGroup, title: "Khach hang", to: "/custommer" },
    { icon: faPlane, title: "Tours", to: "/tour" },
    { icon: faNewspaper, title: "Phieu dat tour", to: "/PhieuDatTour" },
    { icon: faTicket, title: "Hoa don", to: "/" },
  ];
  const [click, setClick] = useState("Trang chu");
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("title-admin")}>
          <p>DASHBOARD</p>
        </div>
        <div className={cx("list-menu")}>
          <ul>
            {menus.map((menu, index) => {
              return (
                <li
                  className={click === menu.title ? cx("active") : null}
                  key={index}
                  onClick={() => setClick(menu.title)}
                >
                  <FontAwesomeIcon
                    className={cx("icon")}
                    icon={menu.icon}
                  ></FontAwesomeIcon>
                  <p>
                    <Button itemmenu to={menu.to}>
                      {menu.title}
                    </Button>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
