import React from "react";
import style from "./ChartTwo.module.scss";
import classNames from "classnames/bind";

import * as V from "victory";
const cx = classNames.bind(style);
export default function ChartTwo() {
  return (
    <div className={cx("wrapper")}>
      <p>PIE CHART</p>
      <V.VictoryPie
        colorScale={["red", "orange", "gold", "blue", "navy"]}
        data={[
          { x: "Vung Tau", y: 35 },
          { x: "Chau Doc", y: 40 },
          { x: "Phu Quoc", y: 55 },
          { x: "Ha Noi", y: 15 },
          { x: "Nha Trang", y: 25 },
        ]}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        height={300}
        width={400}
      />
    </div>
  );
}
