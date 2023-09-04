import React from "react";
import styles from "./Price.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
const cx = classNames.bind(styles);
export default function Price() {
  return (
    <div className={cx("wrapper")}>
      <table className={cx("table")}>
        <tr className={cx("title")}>
          <th className={cx("head")}>Khoi hanh</th>
          <th className={cx("head")}>Ma tour</th>
          <th className={cx("head")}>Gia tour</th>
          <th className={cx("head")}>Gia tre em</th>
          <th className={cx("head")}>Gia em be</th>
        </tr>
        <div className={cx("line")}></div>
        <tr>
          <td>
            <p className={cx("time-tour")}>27/7/2023</p>
          </td>
          <td>
            <p className={cx("id-tour")}>P1-0001-2023-1232</p>
          </td>
          <td>
            <p className={cx("adult-price")}>4.250.000</p>
          </td>
          <td>
            <p className={cx("baby-price")}>4.250.000</p>
          </td>
          <td>
            <p className={cx("baby-price")}>0</p>
          </td>
          <td>
            <Button to="/bill" purchase>
              Mua tour
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <p className={cx("time-tour")}>27/7/2023</p>
          </td>
          <td>
            <p className={cx("id-tour")}>P1-0001-2023-1232</p>
          </td>
          <td>
            <p className={cx("adult-price")}>4.250.000</p>
          </td>
          <td>
            <p className={cx("baby-price")}>4.250.000</p>
          </td>
          <td>
            <p className={cx("baby-price")}>0</p>
          </td>
          <td>
            <Button to="/bill" purchase>
              Mua tour
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <p className={cx("time-tour")}>27/7/2023</p>
          </td>
          <td>
            <p className={cx("id-tour")}>P1-0001-2023-1232</p>
          </td>
          <td>
            <p className={cx("adult-price")}>4.250.000</p>
          </td>
          <td>
            <p className={cx("baby-price")}>4.250.000</p>
          </td>
          <td>
            <p className={cx("baby-price")}>0</p>
          </td>
          <td>
            <Button to="/bill" purchase>
              Mua tour
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
