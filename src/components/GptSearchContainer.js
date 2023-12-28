import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchContainer = () => {
  return (
    <>
      <div className='pt-40 px-12 flex flex-col gap-5'>
        <GptSearchBar />
        <GptMovieSuggestions/>
      </div>
    </>
  )
}

export default GptSearchContainer
