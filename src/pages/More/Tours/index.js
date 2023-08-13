import React from "react";
import styles from "./Tours.module.scss";
import classNames from "classnames/bind";
import ProductBox from "../../../components/Product";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);
export default function Tours() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-tour")}>
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
        <ProductBox container margintop />
      </div>
      <div className={cx("paging")}>
        <Button pagingpageactive>1</Button>
        <Button pagingpage>2</Button>
        <Button pagingpage>3</Button>
      </div>
    </div>
  );
}
