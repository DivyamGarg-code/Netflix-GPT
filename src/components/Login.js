import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../utils/userSlice';

function Login() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [loginState, SetloginState] = useState("Login");
  const [passwordState, setPasswordState] = useState("Hide");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const userData=useSelector((store)=>console.log(store.user));
  const toggleLoginState = () => {
    if (loginState === "Login") {
      SetloginState("Sign Up");
    } else {
      SetloginState("Login");
    }
  }
  const handleUserInfo = () => {
    // console.log(email.current.value, password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
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
      // Sign Up logic
      if (loginState === "Sign Up") {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // Update the user profile
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/77746511?v=4"
            }).then(() => {
              // Update the redux store
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
              navigate("/browse");
              // Profile updated!
            }).catch((error) => {
              setErrorMessage(error.message);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setErrorMessage(errorCode + '-' + errorMessage);
            console.log(errorMessage);
          });

      } else { // Sign In logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + '-' + errorMessage);
            console.log(errorMessage);
          });
      }
    }
  }
  return (
    <div className='relative w-full'>
      <Header />
      <img className="w-screen min-h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
      <form className='w-3/12 bg-black bg-opacity-80 h-fit absolute z-10 top-1/4 left-2/4 translate-x-[-50%] flex flex-col p-5 rounded-sm gap-6'>
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

        <button
          className='p-2 bg-red-600 rounded-sm hover:bg-red-700 font-bold text-xl w-full'
          onClick={handleSubmit}>
          {loginState === "Login" ? "Login" : "Sign Up"}
        </button>

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