import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { User_Avatar, Bg_URL } from '../utils/constants';

function Login() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [loader, setLoader] = useState(false);
  const [loginState, SetloginState] = useState("Login");
  const [passwordState, setPasswordState] = useState("Hide");
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleLoginState = () => {
    if (loginState === "Login") {
      SetloginState("Sign Up");
    } else {
      SetloginState("Login");
    }
  }
  const togglePassword = () => {
    setPasswordState(passwordState === "Hide" ? "Show" : "Hide");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // If the error message is null then proceed further
    if (message === null) {
      setLoader(true);
      // Sign Up logic
      if (loginState === "Sign Up") {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // Update the user profile
            updateProfile(user, {
              displayName: name.current.value, photoURL: User_Avatar
            }).then(() => {
              // Update the redux store
              setLoader(false);
              // Profile updated!
            }).catch((error) => {
              setErrorMessage(error.message);
              setLoader(false);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + '-' + errorMessage);
            console.log(errorMessage);
            setLoader(false);
          });

      } else { // Sign In logic

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: User_Avatar
            }).then(() => {
              // Update the redux store
              setLoader(false);
              // Profile updated!
            }).catch((error) => {
              setErrorMessage(error.message);
              setLoader(false);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + '-' + errorMessage);
            console.log(errorMessage);
            setLoader(false);
          });
      }
    }
  }
  return (
    <div className='relative w-full'>
      <Header />
      <img className="w-screen min-h-screen object-cover" src={Bg_URL} alt="bg" />
      <form className='w-full max-w-[400px] bg-black bg-opacity-80 h-fit absolute z-10 top-1/4 left-2/4 translate-x-[-50%] flex flex-col p-5 rounded-sm gap-6'>
        <h1 className='p-2 font-bold text-2xl text-white'>{loginState === "Login" ? "Login" : "Sign Up"}</h1>
        {loginState === "Sign Up" ?
          <input
            ref={name}
            type="text"
            placeholder='Full Name'
            // onChange={handleUserInfo}
            autoComplete='true'
            className='p-2 rounded-sm w-full bg-gray-800 outline-none text-white'
            required /> : ""}

        <input
          ref={email}
          type="email"
          // onChange={handleUserInfo}
          placeholder='Email Adress'
          className='p-2 rounded-sm w-full bg-gray-800 outline-none text-white'
          required />

        <div className='relative'>
          <input
            ref={password}
            type={passwordState === "Hide" ? "password" : "text"}
            // onChange={handleUserInfo}
            placeholder='Password'
            className='p-2 pr-[60px] rounded-sm w-full bg-gray-800 outline-none text-white'
            required />

          <span
            className='text-white cursor-pointer w-fit absolute top-1/2 translate-y-[-50%] right-2'
            onClick={togglePassword}>
            {passwordState === "Hide" ? "Show" : "Hide"}
          </span>
        </div>

        {errorMessage !== null ? <p className='text-red-600'>{errorMessage}</p> : ""}

        {loader ? <div className='flex justify-center items-center p-2 bg-red-600 rounded-sm hover:bg-red-700 font-bold text-xl w-full'>Loading...</div> :
          <button
            className='p-2 bg-red-600 rounded-sm hover:bg-red-700 font-bold text-xl w-full'
            onClick={handleSubmit}>
            {loginState === "Login" ? "Login" : "Sign Up"}
          </button>}

        <span
          className='text-white p-2 cursor-pointer'
          onClick={toggleLoginState}>
          {loginState === "Login" ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </span>

      </form>
    </div>
  )
}

export default Login