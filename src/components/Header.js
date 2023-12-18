import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom'

function Header() {
  const userInfo = useSelector((store) => store.user);
  console.log("UserInfo", userInfo);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute px-12 py-2 bg-gradient-to-b from-black w-full z-[1] flex justify-between items-center'>
      <img className="w-[142px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      {userInfo !== null ?
        <div className='flex justify-center items-center gap-2'>
          <img src={userInfo.photoURL} className="w-11" alt="error" />
          <button className='p-2 h-fit  bg-gray-400 rounded-md' onClick={handleSignOut}>Sign Out</button>
        </div> : ""}
    </div>
  )
}

export default Header