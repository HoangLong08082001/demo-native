import classname from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.png'
import styles from'./Login.module.scss';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
const cx=classname.bind(styles);
function Login() {
    return ( <div className={cx('box')}>
        <div className={cx('box-container')}>
            <div  className={cx('title-login')}><span>LOGIN YOUR ACCOUNT</span></div>
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
                    <div className={cx('button-name')} ><Button loginweb>Login</Button></div>
                    <div className={cx('passwork-name')}><Link >Forgot Password?</Link></div>
                    <div className={cx('passwork-name')}><span>Don't have an account?</span><Link>Register here</Link></div>
                    <div className={cx('icon-name')}>
                        <FontAwesomeIcon icon={faGoogle}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faApple}/>
                    </div>
                </form>
            </div>
        </div>
        <div>
            
        </div>
    </div> );
}

export default Login;