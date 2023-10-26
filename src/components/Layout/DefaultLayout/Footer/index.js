import classname from "classnames/bind";
import img1 from "../../../../assets/images/logo.png";
import styles from "./Footer.module.scss";

const cx = classname.bind(styles);
function Footer() {
  return (
    <div className={cx("container-box")}>
      <div className={cx("container-box-1")}>
        <div
          className={cx("container-img")}
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div className={cx("container-box-2")}>
          <div className={cx("container-box-2-1")}>
            <h2>Chính Sách Và Quy Định</h2>
          </div>
          <div className={cx("container-box-2-2")}>
            <p>Điều khoản và điều kiện</p>
            <p>Qui định về thanh toán</p>
            <p>Chính sách bảo mật </p>
            <p>Quy chế hoạt động</p>
          </div>
        </div>
        <div className={cx("container-l")}>
          <div>
            <h2>Chi Nhánh</h2>
          </div>
          <div className={cx("container-img-2")}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.817641153899!2d106.6778321!3d10.7379972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1692848015822!5m2!1svi!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={cx("container-b")}>
        <h2>Đồ Án Du Lịch 2023-CoppyRight</h2>
      </div>
    </div>
  );
}

export default Footer;
