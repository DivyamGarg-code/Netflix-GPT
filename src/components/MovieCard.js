import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMainMovie } from '../utils/moviesSlice';

function MovieCard({ movie }) {
  const {poster_path } = movie;
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(addMainMovie(movie));
  }
  return (poster_path &&
    <div className='w-[200px] h-[300px] cursor-pointer' onClick={handleOnClick}>
      <img className="w-full h-full bg-cover" src={IMG_CDN_URL + poster_path} alt="error" />
    </div>
  )
}

export default MovieCard