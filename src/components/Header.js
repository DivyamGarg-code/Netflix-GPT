import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut,onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
function Header() {
  const userInfo = useSelector((store) => store.user);
  // console.log("UserInfo", userInfo);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {

    });
  }

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      // console.log("onAuthStateChanged function called");
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    //  Unsubscribe when the component unmounts
    return ()=>unsubscribe();
  },[]);

  return (
    <div className='absolute z-[10] px-12 py-2 bg-gradient-to-b from-black w-screen z-[1] flex justify-between items-center'>
      <img className="w-[142px]" src={LOGO} alt="logo" />
      {userInfo !== null ?
        <div className='flex justify-center items-center gap-2'>
          <img src={userInfo.photoURL} className="w-11" alt="error" />
          <button className='p-2 h-fit  bg-gray-400 rounded-md' onClick={handleSignOut}>Sign Out</button>
        </div> : ""}
    </div>
  )
}

export default Header