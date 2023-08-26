import React from "react";
import style from "./Error.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Error() {
  return (
    <div className={cx("wrapper")}>
      <Button btnBack to="/">
        {" "}
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> BACK TO WEB{" "}
      </Button>
      <div className={cx("error-form")}>
        <p>
          404 ERROR <FontAwesomeIcon icon={faTriangleExclamation} />
        </p>
      </div>
    </div>
  );
}
