import classname from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import img1 from '../../assets/images/slider/img1.png'
import styles from'./Product.module.scss';
const cx=classname.bind(styles);

function ProductBox({margin,container}) {
    const styles=cx({margin,container})
    
    return ( 
        <div className={styles}>
            <div className={cx('container-img')}  style={{backgroundImage:`url(${img1})`}}></div>
            <div className={cx('container-date')}>3N/2D</div>
            <div className={cx('container-content')}>Tour Phu Quoc: Khám phá vùng đảo cuối đất nước</div>
            <div className={cx('container-star')}>
            <FontAwesomeIcon style={{color:'#e5cf08'}} icon={faStar} />
            <FontAwesomeIcon style={{color:'#e5cf08'}} icon={faStar} />
            <FontAwesomeIcon style={{color:'#e5cf08'}} icon={faStar} />
            <FontAwesomeIcon style={{color:'black'}} icon={faStar} />
            <FontAwesomeIcon style={{color:'black'}} icon={faStar} />
            </div>
            <div className={cx('container-discount')} >
                <span>Việt Nam</span>
                <span><strike>5.200.000</strike></span>
            </div>
            <div className={cx('container-price')}>4.200.000</div>
            
        </div>
    );
}

export default ProductBox;