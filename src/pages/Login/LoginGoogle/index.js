import GoogleLogin from'react-google-login'
import { gapi } from 'gapi-script'
import { useEffect } from 'react';
import axios from '../../../setup-axios/axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function LoginGoogle() {
  const navigate = useNavigate();
    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId:'889003360004-qg0fuj4fmvi191uml1p3i7p9c6d1k47f.apps.googleusercontent.com',
            scope: 'email',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);
    const responseGoogle=(response)=>{
      localStorage.setItem("account",response.profileObj.email);
      localStorage.setItem("image",response.profileObj.imageUrl);
      
      console.log(response)
      axios
      .post("custommer/register-custommer/finduser", {
        username:response.profileObj.email,
      })
      .then((res) => {
        if (res.data === "failure") {
          localStorage.setItem("Ma",res.MaKH.MaKH);
          navigate("/");
        } else {
          axios
          .post("custommer/register-custommer-google", {
            username:response.profileObj.email,
          })
          .then((res) => {
            if (res.message === "success") {
              localStorage.setItem("Ma",res.data.MaKH);
              navigate(-1);
              toast.success("Login success");
              
            } else {
              toast.error("Wrong password or username");
            }
          });
        }
      });

    }
    const responseGoogleFailure=(response)=>{

    };
    return ( <div>
        <GoogleLogin clientId="889003360004-qg0fuj4fmvi191uml1p3i7p9c6d1k47f.apps.googleusercontent.com" 
        buttonText='Login' 
        onSuccess={responseGoogle} 
        onFailure={responseGoogleFailure}
        cookiePolicy='single_host_origin'
        />
            
        
    </div> );
}

export default LoginGoogle;