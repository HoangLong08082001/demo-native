import React from "react";
import style from "./Chart.module.scss";
import classNames from "classnames/bind";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Bar,
  BarChart,
  ResponsiveContainer,
  PieChart,
  Pie,
  ComposedChart,
  Area,
} from "recharts";
const cx = classNames.bind(style);
export default function Chart() {
  const data = [
    { position: "Vung Tau", total: 100000, color: "#FF3600" },
    { position: "Phan Thiet", total: 500000, color: "#FFE400" },
    { position: "Ha Noi", total: 600000, color: "#4DFF00" },
    { position: "Binh Dinh", total: 300000, color: "#00FFD8" },
    { position: "Ca Mau", total: 200000, color: "#0083FF" },
    { position: "Nha Trang", total: 900000, color: "#D800FF" },
    { position: "Da Lat", total: 1000000, color: "#FF0000" },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <div className={cx("up")}>
          <div className={cx("left-chart")}>
            <LineChart
              width={600}
              height={350}
              margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="position" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#0059FF"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>
        <div className={cx("down")}>
          <div className={cx("left-chart")}>
            <BarChart
              width={600}
              height={350}
              data={data}
              margin={{
                top: 50,
                right: 30,
                left: 50,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="position" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#FFAA00" />
            </BarChart>
          </div>
        </div>
      </div>
      <div className={cx("right")}>
        <div className={cx("up")}>
          <div className={cx("left-chart")}>
            <PieChart width={800} height={400}>
              <Pie
                dataKey="total"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#FF0000"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
        <div className={cx("down")}>
          <div className={cx("left-map")}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 80,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis
                  dataKey="position"
                  label={{
                    value: "Pages",
                    position: "insideBottomRight",
                    offset: 0,
                  }}
                  scale="band"
                />
                <YAxis
                  label={{ value: "Index", angle: -90, position: "insideLeft" }}
                />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="total"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
