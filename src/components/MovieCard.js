import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <div className='w-[250px] h-[300px]'>
        <img  className="w-full h-full bg-cover" src={IMG_CDN_URL+posterPath} alt="error" />
    </div>
  )
}

export default MovieCard