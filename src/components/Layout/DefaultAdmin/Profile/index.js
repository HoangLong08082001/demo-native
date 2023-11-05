import React, { useContext, useState } from "react";
import style from "./Profile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button";
import Tippy from "@tippyjs/react/headless"; // different import path!
import "tippy.js/dist/tippy.css"; // optional
import Dropdown from "./Dropdown";
import userimage from "../../../../../../travel-ui/src/assets/images/user.png";
import { UserContext } from "../../../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
export default function Profile(props) {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const menus = [
    { title: "Trang chu", to: "/admin-home" },
    { title: "Nhan vien", to: "/employee" },
    { title: "Khach hang", to: "/custommer" },
    { title: "Tours", to: "/tour" },
    { title: "Phieu dat tour", to: "/" },
    { title: "Hoa don", to: "/" },
  ];
  const [click, setClick] = useState("Trang chu");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={cx("menu")}>
        <FontAwesomeIcon
          onClick={handleShow}
          className={cx("icon")}
          icon={faBars}
        ></FontAwesomeIcon>
        {show ? (
          <ul className={cx("drop-down")}>
            {user && user.isAuthenticated === true && (
              <li>{user.accout.email}</li>
            )}
            {menus.map((m, i) => {
              return (
                <Link
                  className={click === m.title ? cx("active") : null}
                  onClick={() => setClick(m.title)}
                  key={i}
                  to={m.to}
                >
                  <li>{m.title}</li>
                </Link>
              );
            })}
          </ul>
        ) : (
          <></>
        )}
      </div>
      <div className={cx("wrapper")}>
        {/* resposive with width decrease down 10245 */}

        {/* resposive with width decrease down 10245 */}

        <div className={cx("back-website")}>
          {user && user.isAuthenticated === true && <p>{user.accout.email}</p>}
        </div>
        <Tippy
          placement="bottom"
          interactive
          render={(attrs) => <Dropdown tabIndex="-1" {...attrs} />}
        >
          <div className={cx("profile")}>
            <div className={cx("circle")} onClick={handleOpen}>
              <img src={userimage} alt="loi" />
            </div>
          </div>
        </Tippy>
      </div>
    </>
  );
}
