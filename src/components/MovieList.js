import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        movies &&
        <div className='text-white flex flex-col gap-4'>
            <h1 className='font-bold text-lg'>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar'>
                <div className='flex gap-2'>
                    {movies.map((movie, index) => <MovieCard key={index} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>

    )
}

export default MovieList
