import React from "react";
import style from "./Dropdown.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../Button";
const cx = classNames.bind(style);
export default function Dropdown() {
  return (
    <div className={cx("wrapper")}>
      <p>Name</p>
      <p>
        <Button btnDetailAdmin to="/">
          DETAIL
        </Button>
      </p>
      <p>
        <Button btnLogoutAdmin to="/admin-login">
          Logout
        </Button>
      </p>
    </div>
  );
}
