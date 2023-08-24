import React from "react";
import styles from "./Trip.module.scss";
import classNames from "classnames/bind";
import pq1 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq1.jpeg";
import HelpForm from "./HelpForm";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);
export default function Trip() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY >= 1100 && window.scrollY <= 2950) {
        setShow(!show);
      } else {
        setShow(show);
      }
    };
    window.addEventListener("scroll", handlScroll);
    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("trips")}>
        <p className={cx("des-title")}>Hanh trinh tour</p>
        <div className={cx("description")}>
          <p className={cx("first-desc")}>
            <b>NGÀY 01: TP. HỒ CHÍ MINH - PHÚ QUỐC (Ăn trưa)</b>Buổi sáng, quý
            khách tập trung tại ga đi trong nước, sân bay Tân Sơn Nhất. Hướng
            dẫn viên lữ hành Saigontourist đón quý khách và hỗ trợ làm thủ tục.
            Khởi hành đi Phú Quốc chuyến bay VN1835 lúc 8h25 hoặc chuyến bay
            VN1823 lúc 6h20. Quý khách tự túc ăn sáng. Đến Phú Quốc, đoàn khởi
            hành tham quan suối Tranh - quý khách có thể đi dạo trong rừng, thư
            giãn, tắm suối (suối đặc biệt nhiều nước trong mùa hè). Nhận phòng
            nghỉ ngơi. Buổi tối, tự do dạo chợ đêm Phú Quốc, ăn chiều tự túc.
            Nghỉ đêm tại Phú Quốc. Lựa chọn (tự túc chi phí tham quan & di
            chuyển): - Tham quan VinWonder Phú Quốc: có diện tích gần 50ha, là
            công viên theo chủ đề đầu tiên tại Việt Nam. Khu vực công viên được
            chia làm 6 phân khu, tượng trưng cho 6 vùng lãnh địa với 12 chủ đề,
            lấy cảm hứng từ các nền văn minh nổi tiếng, các câu chuyện cổ tích,
            giai thoại thế giới, sẽ đưa du khách đi từ ngạc nhiên này đến bất
            ngờ khác, tạo nên những trải nghiệm mới lạ, đầy cuốn hút, mang tính
            giải trí, giáo dục và nghệ thuật cao. - Khám phá Khu Vinpearl
            Safari: khám phá Vườn Thú hoang dã đầu tiên tại Việt Nam với quy mô
            180ha, cùng hơn 130 loài động vật quý hiếm và các chương trình Biểu
            diễn động vật, Chụp ảnh với động vật, Khám phá và trải nghiệm Vườn
            thú mở trong rừng tự nhiên, gần gũi và thân thiện với con người. -
            Tham quan Grand World: với các công trình tre, công viên nghệ thuật
            đương đại thuộc Open Park, bảo tàng Gấu Teddy…; tản bộ bên dòng
            “kênh đào Venice” và nhìn ngắm những chiếc thuyền Gondola, khu phố
            shophouse lộng lẫy sắc màu, cổng lâu đài tráng lệ, ba cây cầu vòm
            bán nguyệt...
          </p>
          <div className={cx("first-img")}>
            <img src={pq1} alt="" />
          </div>
          <p className={cx("second-desc")}>
            <b>
              NGÀY 02: PHÚ QUỐC - CÁP TREO HÒN THƠM - TẶNG BUFFET (Ăn sáng,
              trưa, chiều)
            </b>{" "}
            Sau bữa sáng, đoàn tham quan Trung tâm nuôi cấy ngọc trai. Quý khách
            đến trải nghiệm “Cáp treo 3 dây vượt biển dài nhất thế giới tại Hòn
            Thơm” với tổng chiều dài 7.899,9m, thời gian di chuyển 15 phút. Cáp
            treo sẽ đưa du khách đến với một hành trình du ngoạn kỳ thú trên
            cao, để thu vào tầm mắt 360 độ vẻ đẹp tựa thiên đường của biển, đảo,
            rừng xanh và những bãi tắm trong cụm đảo An Thới, nam Phú Quốc. Tham
            gia các trò chơi tại khu công viên chủ đề và Aquatopia Water Park,
            công viên nước đầu tiên ở Việt Nam mang phong cách đảo hoang và thổ
            dân, không gian công viên được thiết kế theo hai chủ đề chính là
            “Đảo hoang huyền bí” và “Thổ dân hoang dã”, đưa du khách vào hành
            trình khám phá phấn khích, khi lần lượt trải nghiệm từng khu vực chủ
            đề gồm sinh vật biển, động vật hoang dã, thủy quái, thổ dân, cướp
            biển. Các trò chơi được phân chia thành khu vực các trò chơi dành
            riêng cho trẻ em và khu vui chơi mạo hiểm cho người lớn. Ngắm hoàng
            hôn tại Sunset Town với những căn nhà ven biển đầy sắc màu - được
            mệnh danh là nơi ngắm hoàng hôn đẹp nhất Phú Quốc, chiêm ngưỡng cầu
            Cầu Hôn, biểu tượng của tình yêu... Nghỉ đêm tại Phú Quốc.
          </p>
          <div className={cx("second-img")}>
            <img src={pq1} alt="" />
          </div>
          <p className={cx("third-desc")}>
            <b>NGÀY 03: PHÚ QUỐC - TP. HỒ CHÍ MINH (Ăn sáng)</b> Quý khách tự do
            tắm biển và nghỉ ngơi tại khách sạn đến giờ trả phòng. Xe đưa quý
            khách ra sân bay trên đường đi quý khách dừng chân viếng Thiền Viện
            Trúc Lâm Hộ Quốc - ngôi chùa đẹp và lớn nhất đảo ngọc. Đoàn ghé tham
            quan Vườn tiêu, Nhà thùng làm nước mắm, Lò rượu Sim… Đến sân bay Phú
            Quốc, đoàn bay về TP.Hồ Chí Minh chuyến bay VN1836 lúc 18h55 hoặc
            chuyến bay VN1828 lúc 13h50. Kết thúc chương trình (quý khách tự túc
            phương tiện từ sân bay về lại nhà)./.*Lưu ý : Chuyến bay VN1836 lúc
            18h55 thì quý khách sẽ được bố trí 01 bữa ăn trưa
          </p>
          <div className={cx("third-img")}>
            <img src={pq1} alt="" />
          </div>
        </div>
      </div>
      <div className={cx("help")}>{show && <HelpForm />}</div>
    </div>
  );
}
