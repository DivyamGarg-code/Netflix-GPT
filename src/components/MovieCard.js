import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <div className='w-[300px] h-[300px] border-2 border-red-600'>
        <img  className="w-full h-full bg-cover" src={IMG_CDN_URL+posterPath} alt="error" />
    </div>
  )
}

export default MovieCard