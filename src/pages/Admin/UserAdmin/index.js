import React, { useContext, useState } from "react";
import style from "./UserAdmin.module.scss";
import classNames from "classnames/bind";
import { UserContext } from "../../../context/UserContext";
const cx = classNames.bind(style);
export default function UserAdmin() {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  console.log(user);
  return <div className={cx("wrapper")}></div>;
}
