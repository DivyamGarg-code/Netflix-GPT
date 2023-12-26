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
    <div className='-mt-10 flex flex-col gap-10 relative z-10'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer
