import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useSelector, useDispatch } from 'react-redux'
import { gptapi } from '../utils/gptapi'
import { addGptMovieResults,setSearchLoader } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const identifier = useSelector((store) => store.config.lang); // language key
    const searchLoader = useSelector((store) => store.gpt.searchLoader); // language key
    const searchText = useRef(null);
    const handleGptSearchClick = async () => {
        const searchVal = searchText.current.value;
        dispatch(setSearchLoader(true));
        const { movieNames, movieResults } = await gptapi(searchVal);
        dispatch(setSearchLoader(true));
        dispatch(addGptMovieResults({ movieNames: movieNames, movieResults: movieResults }))
    }
    return (
        <div className='flex flex-col gap-5'>
            <span className='text-white text-3xl font-bold'>GPT Search Bar</span>
            <form className='flex gap-2' onSubmit={(e) => { e.preventDefault() }}>
                <input ref={searchText} type="text" className='w-full max-w-[400px] p-2 rounded-md' placeholder={lang[identifier].gptSearchPlaceholder} />
                {searchLoader?<div className='bg-red-700 p-3 text-white rounded-md cursor-not-allowed'>Loading...</div>:
            <button className='bg-red-700 p-3 text-white rounded-md' onClick={handleGptSearchClick}>{lang[identifier].search}</button>}
            </form>
            {/* {searchedMovies && <MovieList title={`Search Results : ${searchText.current.value}`} movies={searchedMovies} />} */}
        </div>
    )
}

export default GptSearchBar

//