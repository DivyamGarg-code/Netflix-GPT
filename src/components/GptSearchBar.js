import React from 'react'
import lang from '../utils/languageConstants'
import {useSelector} from 'react-redux'

const GptSearchBar = () => {
    const identifier=useSelector((store)=>store.config.lang); // language key
    return (
        <div>
            <form className='flex gap-2'>
                <input type="text" className='w-full max-w-[400px] p-2 rounded-md' placeholder={lang[identifier].gptSearchPlaceholder} />
                <button className='bg-red-700 p-3 text-white rounded-md'>{lang[identifier].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
