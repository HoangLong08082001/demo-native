import React, { useContext, useState } from "react";
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
  faUserCheck,
  faTag,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../../context/UserContext";

const cx = classNames.bind(style);
export default function Sidebar() {
  const { user } = useContext(UserContext);
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  const menus = [
    { icon: faHome, title: "Trang chủ", to: "/admin-home" },
    { icon: faUser, title: "Nhân viên", to: "/nhan-vien" },
    { icon: faUserGroup, title: "Khách hàng", to: "/khach-hang" },
    { icon: faTag, title: "Giảm giá", to: "/giam-gia" },
    { icon: faPlane, title: "Tours", to: "/tour" },
    { icon: faNewspaper, title: "Phiếu đặt tour", to: "/phieu-dat-tour" },
    { icon: faTicket, title: "Hoá đơn", to: "/hoa-don" },
    { icon: faUserCheck, title: "Phân quyền", to: "/phan-quyen" },
    { icon: faChartSimple, title: "Thống kê", to: "/thong-ke" },
  ];
  const [click, setClick] = useState("Trang chủ");

  console.log(user.accout.position);
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("title-admin")}>
          <p>DASHBOARD</p>
        </div>
        <div className={cx("list-menu")}>
          <ul>
            {menus.map((menu, index) => {
              if (user.accout.position === "DEV") {
                if (index >= 0 && index <= 8) {
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
                }
              } else if (user.accout.position === "DUYET PHIEU TOUR") {
                if (index === 0 || index === 2 || index === 4 || index === 5) {
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
                }
              }else if (user.accout.position === "KẾ TOÁN") {
                if (index >= 0 && index <= 6 || index === 8) {
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
                }
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
