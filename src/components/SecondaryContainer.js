import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
// {
//   MovieList - Popular
//     MovieCard*n
//   MovieList - Trending
//   MovieList - Now Playing
//  }

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='z-[2]'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer
