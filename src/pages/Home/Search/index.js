import classname from 'classnames/bind';
import Calendar from 'react-calendar';
import styles from'./Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from "../../../components/Button";
const cx=classname.bind(styles);
function Search() {
    return ( 
        <div className={cx('wrapper')}>
            <form className={cx('wrapper-f')}>
                <div  className={cx('wrapper-f-w')}>
                    <div>Địa Điểm</div>
                    <input className={cx('wrapper-f-w-input')} placeholder='Địa điểm muốn đến'></input>
                </div>
                <div className={cx('wrapper-f-w')}>
                    <div>Ngày đi</div>
                    <input className={cx('wrapper-f-w-input')} type='date' placeholder='DD/MM/YY'></input>

                </div>
                <div className={cx('wrapper-f-w')}>
                    <div>Ngày về</div>
                    <input className={cx('wrapper-f-w-input')} type='date' placeholder='DD/MM/YY'></input>
                </div>
                <div className={cx('wrapper-f-s')}>
                   <Button search><FontAwesomeIcon icon={faSearch}/></Button>
                </div>
            </form>
        </div>
     );
}

export default Search;