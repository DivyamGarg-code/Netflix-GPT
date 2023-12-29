import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Shimmer from './Shimmer';
import { useDispatch } from 'react-redux'
import { setUserApiKey } from '../utils/gptSlice';
import PopUp from './PopUp';

function GptMovieSuggestions() {
  const { movieNames, movieResults, errorMessage, searchLoader } = useSelector((store) => store.gpt);
  const dispatch = useDispatch();
  function capitalizeWords(inputString) {
    return inputString.replace(/\b\w/g, match => match.toUpperCase());
  }
  const [apiKey, setApiKey] = useState(false);
  const userApiKey = useRef(null);
  const handleApiKeyClick = () => {
    if (apiKey === false) {
      dispatch(setUserApiKey(userApiKey.current.value));
      console.log(userApiKey.current.value);
    }
    setApiKey(!apiKey);
  }
  if (!movieNames) return;

  if (searchLoader) {
    return <Shimmer />
  }
  return (
    movieNames && movieNames.length !== 0 ?
      <div className='flex flex-col gap-10 py-10'>
        {movieNames.map((movie, index) => {
          return <MovieList key={`${movie}${index}`} title={capitalizeWords(movie)} movies={movieResults[index]} />
        })}
      </div> :
      <div className='text-[18px] text-white flex flex-col gap-2 pb-3'>
        {errorMessage ?
          <>
            <form className='flex gap-2 text-[16px]' onSubmit={(e) => { e.preventDefault() }}>
              <input type="text" ref={userApiKey} disabled={apiKey} className='w-full max-w-[400px] p-2 rounded-md text-black' placeholder="Enter Your API Key" />
              <button className={`${apiKey ? 'bg-green-700' : 'bg-red-700'} p-3 text-white rounded-md`} onClick={handleApiKeyClick}>{apiKey ? 'Locked' : 'Enter'}</button>
            </form>
            <div>{errorMessage}</div>
            <PopUp />
          </> :
          <div>No Results</div>
        }

      </div>
  )
}

export default GptMovieSuggestions

/*
Kuch Search Kiya but result nhi aaya 2 karan ha 


error -> null means ya 18+ content keliye mang ki ha ya vo content available nhi ha 
error ->  api key galt dali ha  [You are not subscribed tothe key]
 */