import React, { useState } from 'react'
import Header from './Header'

function Login() {
  const [userInfo, setUserInfo] = useState({
    "email": "",
    "password": ""
  });
  const [loginState, SetloginState] = useState("Login");
  const [passwordState, setPasswordState] = useState("Hide");
  const toggleLoginState = () => {
    if (loginState === "Login") {
      SetloginState("Sign Up");
    } else {
      SetloginState("Login");
    }
  }
  const handleUserInfo = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }))
  }
  const togglePassword = () => {
    setPasswordState(passwordState === "Hide" ? "Show" : "Hide");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  }
  return (
    <div className='relative w-full'>
      <Header />
      <img className="w-screen min-h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
      <form className='w-3/12 bg-black bg-opacity-80 h-fit absolute z-10 top-1/4 left-2/4 translate-x-[-50%] flex flex-col p-5 rounded-sm gap-6'>
        <h1 className='p-2 font-bold text-2xl text-white'>{loginState === "Login" ? "Login" : "Sign Up"}</h1>
        {loginState === "Sign Up" ? <input type="text" placeholder='Full Name' className='p-2 rounded-sm w-full bg-gray-800 outline-none text-white' required /> : ""}
        <input type="email" value={userInfo.email} name="email" onChange={handleUserInfo} placeholder='Email Adress' className='p-2 rounded-sm w-full bg-gray-800 outline-none text-white' required />
        <div className='relative'>
          <input type={passwordState === "Hide" ? "password" : "text"} value={userInfo.password} name="password" onChange={handleUserInfo} placeholder='Password' className='p-2 pr-[60px] rounded-sm w-full bg-gray-800 outline-none text-white' required />
          <span className='text-white cursor-pointer w-fit absolute top-1/2 translate-y-[-50%] right-2' onClick={togglePassword}>{passwordState === "Hide" ? "Show" : "Hide"}</span>
        </div>
        <button className='p-2 bg-red-600 rounded-sm hover:bg-red-700 font-bold text-xl w-full' onClick={handleSubmit}>{loginState === "Login" ? "Login" : "Sign Up"}</button>
        {loginState === "Login" ? <span className='text-gray-400 p-2'>New to Netflix? <span className='text-white cursor-pointer' onClick={toggleLoginState}>Sign Up Now</span></span> :
          <span className='text-gray-400 p-2'>Already Registered? <span className='text-white cursor-pointer' onClick={toggleLoginState}>Sign In Now</span></span>
        }
      </form>
    </div>
  )
}

export default Login