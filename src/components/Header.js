import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut,onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { supported_languages  } from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

function Header() {
  const userInfo = useSelector((store) => store.user);
  const showGptsearch=useSelector((store)=>store.gpt.showGptSearch);
  // console.log("UserInfo", userInfo);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      
    });
  }
 
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
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
    <div className='absolute z-10 px-12 py-2 bg-gray-900 bg-gradient-to-r from-black w-screen flex flex-col justify-center items-center shadow-md md:flex-row md:justify-between '>
      <img className="w-[142px]" src={LOGO} alt="logo" />
      {userInfo !== null ?
        <div className='flex justify-center items-center gap-2'>
          {showGptsearch && <select className='p-2 rounded-md' onChange={handleLanguageChange}>
            {supported_languages.map((lang)=>{
              return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> 
            })}
          </select>}
          <button className='p-2 h-fit bg-gray-400 rounded-md bg-gradient-to-r from-gray-300' onClick={()=>{dispatch(toggleGptSearchView())}}>{!showGptsearch?"GPT Search":"Homepage"}</button>
          <img src={userInfo.photoURL} className="w-9" alt="error" />
          <button className='p-2 h-fit bg-gray-400 rounded-md bg-gradient-to-r from-gray-300' onClick={handleSignOut}>Sign Out</button>
        </div> : ""}
    </div>
  )
}

export default Header