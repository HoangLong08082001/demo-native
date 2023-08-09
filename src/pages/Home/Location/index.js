import classname from "classnames/bind";
import Button from "../../../components/Button";
import styles from "./Location.module.scss";
import ProductBox from "../../../components/Product";

const cx = classname.bind(styles);
function Location() {
  return (
    <div>
      <div style={{ color: "#2f81bd ", marginLeft: 20 }}>
        <h2>Hè 2023</h2>
      </div>
      <div className={cx("location-tour")}>
        <Button buttonproduct>Trong Nước</Button>
        <Button buttonproduct>Châu Âu</Button>
        <Button buttonproduct>Đông Nam Á</Button>
        <Button buttonproduct>Châu Mỹ</Button>
        <Button buttonproduct>Châu Phi</Button>
      </div>
      <div className={cx("List-tour")}>
        <ProductBox container />
        <ProductBox container />
        <ProductBox container />
        <ProductBox container />
        <ProductBox container />
        <ProductBox container />
        <ProductBox container />
        <ProductBox container />
      </div>
      <div className={cx("Watch-add")}>
        <Button to="/more-summer" LinkMore>
          Xem Thêm
        </Button>
      </div>
    </div>
  );
}

export default Location;
