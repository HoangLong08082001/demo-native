import React from "react";
import style from "./HomeAdmin.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import Chart from "./Chart";
import Statistical from "./Statistical";
import { useState } from "react";
const cx = classNames.bind(style);
export default function HomeAdmin() {
  const [active, setActive] = useState(false);
  const handle = () => {
    setActive(!active);
  };
  return (
    <div className={cx("wrapper")}>
      <div className="btn-service">
        {active === true ? (
          <Button onClick={handle} servicebtn>
            CHART
          </Button>
        ) : (
          <Button onClick={handle} activeitem>
            CHART
          </Button>
        )}
        {active === true ? (
          <Button onClick={handle} activeitem>
            STATISTICAL
          </Button>
        ) : (
          <Button onClick={handle} servicebtn>
            STATISTICAL
          </Button>
        )}
      </div>
      <div className={cx("content")}>
        {active === true ? <Statistical /> : <Chart />}
      </div>
    </div>
  );
}
