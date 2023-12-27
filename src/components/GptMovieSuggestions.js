import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Shimmer from './Shimmer';

function GptMovieSuggestions() {
  const { movieNames, movieResults, searchLoader } = useSelector((store) => store.gpt);
  function capitalizeWords(inputString) {
    return inputString.replace(/\b\w/g, match => match.toUpperCase());
  }
  if (searchLoader) {
    return <Shimmer />
  }
  return (
    movieNames ? <div className='flex flex-col gap-10 py-10'>
      {movieNames.map((movie, index) => {
        return <MovieList key={`${movie}${index}`} title={capitalizeWords(movie)} movies={movieResults[index]} />
      })}
    </div> : <div className='text-xl text-white font-bold'>No Results</div>
  )
}

export default GptMovieSuggestions