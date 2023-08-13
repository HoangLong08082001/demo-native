import React from "react";
import styles from "./Location.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);
export default function Location() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("line-one")}>
        <Button watchadd2>Phu quoc</Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
      </div>
      <div className={cx("line-second")}>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
      </div>
      <div className={cx("line-third")}>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Phu quoc
        </Button>
        <Button buttonlocation marginleft>
          Khac...
        </Button>
      </div>
    </div>
  );
}
