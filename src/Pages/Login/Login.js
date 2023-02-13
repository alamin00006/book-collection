import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init'
import {useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import useUser from '../../Hooks/useUser';
import axios from 'axios';

const Login = () => {
        
const [user] = useUser()
// console.log(user)

      const [userInfo, setUserInfo] = useState({
        email: "",
        password : ''
    })
  
    const [error, setError] = useState({
        emailError : "",
        passWordError: ""
    })
      
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/";
      // useEffect(() =>{
      //   if(user){
      //     navigate(from, { replace: true })
      // }
      // },[user])
      // useEffect(() =>{

      //     if(token){
      //     navigate(from, { replace: true });
      //   }
      // }, [token, from, navigate])
  
          const emailCheck = (e) =>{
          const emailRegex = /\S+@\S+\.\S+/;
         const validEmail = emailRegex.test(e.target.value);
         if(validEmail){
          setUserInfo({...userInfo, email:e.target.value})
          setError({...error, emailError: ''})
         }else{
          setError({...error, emailError: 'Invalid Email'})
          setUserInfo({...userInfo, email:''})
         }
          }
   
      const passwordCheck = (e) =>{
          const passwordRegex = /.{6,}/;
          const validPassWord = passwordRegex.test(e.target.value);
          if(validPassWord){
              setUserInfo({...userInfo, password:e.target.value})
              setError({...error, passWordError: ''})
             }else{
              setError({...error, passWordError: 'Invalid Password'})
              setUserInfo({...userInfo, password:''})
             }
       }
        

 const handleSubmit =(e)=>{
   e.preventDefault();

   axios
      .post("http://localhost:5000/api/v1/user/login", {email:userInfo?.email, password:userInfo?.password })
      .then((data) => {
        // console.log(data.data?.data?.token);
        localStorage.setItem('token', data.data?.data?.token)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // navigate("/register");
      });

 }


//  if(Userloading||loading){
//    return <Loading></Loading> ;  
//  }


    return (
       
      //       <div>
            
      //       <div>
      //       <h1 className='form-title text-center'>Please Login</h1>
      //       <form onSubmit={handleSubmit} className='d-flex justify-content-center login-form'>
      //       <div>
            
      //       <label htmlFor="email">Email</label>
      //       <input onChange={emailCheck} className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />
      //      {error?.emailError && <p className='text-danger'>{error.emailError}</p>}
           
      //       <label htmlFor="password">Password</label>
      //       <input onChange={passwordCheck} className='d-block mt-2' type="password" placeholder='Enter Your Password' name="password" id="password" />
      //       {error?.passWordError&& <p className='text-danger'>{error.passWordError}</p>}
      //            <p></p>
      //      <input className='bg-warning border-0 py-2 mt-2 fs-5' type="submit" value="Login" />
      //      <p>No Account<Link to = "/singUp">Please Register
      //      </Link></p>
           
      //      <ToastContainer/>
      //       </div>
          
      //   </form>
        
      //       </div>
      //       <div>
      //     <button className='btn btn-danger reset-button'>
      //       Forget Password
      //     </button>
      // <ToastContainer/>
      //       </div>
      //   </div>
        
      <div className='bg-white'>
            <div className='container'>
            
            <div className='row'>
                 <div className='col-lg-6 col-md-6 col-sm-12 singup-image'>
                          <img src='https://boiferry.com/assets/images/register-1.webp' alt=''/>  
                 </div>
                 <div className='col-lg-6 col-md-6 col-sm-12 signup-part'>
                 <form onSubmit={handleSubmit} className='login-form'>
                    <div>
                    <h3 className='mb-4'><b className='text-danger'>নাফিউনে </b> সাইনইন করুন</h3>
                       
                          <label className='mt-2' htmlFor="email">ইমেইল ঠিকানা</label>
                          <input onChange={emailCheck} className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />
                          {error?.emailError && <p className='text-danger'>{error.emailError}</p>}
                          
                          <label className='mt-2' htmlFor="password">পাসওয়ার্ড</label>
                          <input onChange={passwordCheck} className='d-block mt-2' type="password" placeholder='Enter Your Password' name="password" id="password" />
                          {error?.passWordError&& <p className='text-danger'>{error.passWordError}</p>}
                          <div className='d-flex justify-content-end'>
                          <Link to="" className='text-danger forgot-password py-1'>
                          পাসওয়ার্ড ভুলে গেছেন?
                          </Link>
                          </div>
                        <input className='bg-danger text-white border-0 py-2 mt-2 fs-5' type="submit" value="সাইন ইন" />
                        <p className='mt-3'>আমাদের সাথে একাউন্ট নেই?<Link className='text-danger' to = "/singUp"> একাউন্ট করুন
                        </Link></p>
                        
                        <ToastContainer/>
                    </div>
            </form>
                 </div>
            </div>
            
        </div>
        </div>
    );
};

export default Login;

