import classname from 'classnames/bind';

import logo from '../../assets/images/logo.png'
import styles from'./Register.module.scss';

import Button from '../../components/Button';
import { Link } from 'react-router-dom';
const cx=classname.bind(styles);
function Register() {
    return ( 
        <div className={cx('box')}>
        <div className={cx('box-container')}>
            <div  className={cx('title-login')}><span>CREATE YOUR ACCOUNT</span></div>
            <div className={cx('box-login')}>
                <form>
                    <div style={{textAlign:'center'}}><img src={logo} height={110}></img></div>
                    <div className={cx('address-name')}>
                        <p >EMAIL ADDRESS</p>
                        <input placeholder="ENTER YOUR EMAIL..."></input>
                    </div>
                    <div className={cx('address-name')}>
                        <p>PASSWORD</p>
                        <input placeholder="ENTER YOUR PASSWORD..."></input>
                    </div>
                    <div className={cx('address-name')}>
                        <p>REPASSWORD</p>
                        <input placeholder="ENTER YOUR PASSWORD..."></input>
                    </div>
                    <div className={cx('button-name')} ><Button loginweb>CREATE</Button></div>
                
                    <div className={cx('passwork-name')}><span>Already have an account</span><Link to='/login'>Login</Link></div>
                   
                </form>
            </div>
        </div>
        <div>
            
        </div>
    </div>
     );
}

export default Register;