import classname from "classnames/bind";
import styles from "./Button.module.scss";
import { NavLink } from "react-router-dom";
const cx = classname.bind(styles);
function Button({
  to,
  href,
  children,
  onClick,
  watchadd,
  watchadd2,
  login,
  logout,
  search,
  buttonproduct,
  buttonlocation,
  marginleft,
  pagingpage,
  pagingpageactive,
  purchase,
  LinkMore,
  underline,
}) {
  let Comp = "button";
  const props = {
    onClick,
  };

<<<<<<< HEAD
import classname from 'classnames/bind';
import styles from'./Button.module.scss'
import { Link } from 'react-router-dom'; 



const cx= classname.bind(styles)
function Button({to,href,children,loginweb,onClick,watchadd,watchadd2,login,logout,search,buttonproduct,callBack}) {
    
    let Comp = 'button';
    const props={
        onClick,
    }
    if(to){
        props.to = to
        Comp=Link
    }
    else if(href)
    {
        props.href=href
        Comp='a'
    }
    
   
    const classes=cx({watchadd,loginweb,watchadd2,login,logout,search,buttonproduct});
    return ( 
        <Comp className={classes} {...props} >
            <span>{children}</span>
        </Comp>
     );
=======
  if (to) {
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx({
    watchadd,
    watchadd2,
    login,
    logout,
    search,
    buttonproduct,
    buttonlocation,
    marginleft,
    pagingpage,
    pagingpageactive,
    purchase,
    LinkMore,
    underline,
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
>>>>>>> 92bb01457bb29b07aac2453aff568fa3d8136673
}

export default Button;
