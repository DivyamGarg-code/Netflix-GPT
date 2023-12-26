import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearchContainer = () => {
  return (
    <>
      <div className='pt-40 pl-10 flex flex-col justify-start align-start gap-4'>
        <span className='text-white text-3xl font-bold'>GPT Search Bar</span>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </>
  )
}

export default GptSearchContainer
