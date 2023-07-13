import classname from 'classnames/bind';
import img1 from '../../../../assets/images/logo.png'
import img2 from '../../../../assets/images/map.png'
import styles from'./Footer.module.scss';


const cx=classname.bind(styles);
function Footer() {
    return ( <div className={cx('container-box')}>
            <div className={cx('container-box-1')}>
                <div className={cx('container-img')} style={{backgroundImage:`url(${img1})`}} ></div>
                <div>
                    <div><h2>Chính Sách Và Quy Định</h2></div>
                    <div><p>Dieu khoan va dieu kien
Qui dinh ve thanh toan<br></br>
Chinh sach bao mat
Quy che hoat dong</p></div>
                </div>
                <div className={cx('container-l')}>
                    <div><h2>Chi Nhánh</h2></div>
                    <div className={cx('container-img-2')} style={{backgroundImage:`url(${img2})`}}></div>
                </div>
            </div>
            <div className={cx('container-b')}>
                <h2>Đồ Án Du Lịch 2023-CoppyRight</h2>
            </div>
        
    </div> );
}

export default Footer;