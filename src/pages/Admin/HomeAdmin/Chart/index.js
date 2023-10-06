import React from "react";
import * as V from "victory";
import style from "./Chart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
export default function ChartOne() {
  return (
    <div className={cx("wrapper")}>
      <V.VictoryChart>
        <V.VictoryLine
          groupComponent={
            <V.VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
          }
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              stroke: "#c43a31",
              strokeWidth: 5,
              strokeLinecap: "round",
            },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
          ]}
        ></V.VictoryLine>
      </V.VictoryChart>
    </div>
  );
}
