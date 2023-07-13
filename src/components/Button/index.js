
import classname from 'classnames/bind';
import styles from'./Button.module.scss'


const cx= classname.bind(styles)
function Button({to,href,children,onclick,watchadd,watchadd2,login,logout,search,buttonproduct}) {
    let Comp = 'button';
    const classes=cx({watchadd,watchadd2,login,logout,search,buttonproduct});
    return ( 
        <Comp className={classes} >
            <span>{children}</span>
        </Comp>
     );
}

export default Button;