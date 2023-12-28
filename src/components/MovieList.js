import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        movies && movies.length!==0 &&
        <div className='text-white flex flex-col gap-4 px-4'>
            <h1 className='font-bold text-lg'>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar'>
                <div className='flex gap-3'>
                    {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>

    )
}

export default MovieList
