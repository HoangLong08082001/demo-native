import React, { useContext, useState } from "react";
import style from "./Profile.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button";
import Tippy from "@tippyjs/react/headless"; // different import path!
import "tippy.js/dist/tippy.css"; // optional
import Dropdown from "./Dropdown";
import userimage from "../../../../../../travel-ui/src/assets/images/user.png";
import { UserContext } from "../../../../context/UserContext";

const cx = classNames.bind(style);
export default function Profile(props) {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={cx("wrapper")}>
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
  );
}
