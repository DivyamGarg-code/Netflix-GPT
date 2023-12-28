import React from 'react'

function VideoTitle({ title, overview }) {
  return (
    <div className='z-[1] absolute w-screen h-screen pt-[160px] pl-10 pr-10 text-white md:pt-[84px] md:pl-24 lg:pt-[165px]'>
      <h1 className='text-xl mb-8 font-600 md:text-5xl md:mb-0 font-700'>{title}</h1>
      <p className='hidden md:inline-block w-2/4 py-6 text-lg line-clamp-[8] lg:w-1/4'>{overview}</p>
      <div className='flex gap-2'>
        <button className='bg-white text-black font-bold px-4 py-2 rounded-md hover:bg-opacity-7'>Play</button>
        <button className='bg-gray-600 text-white font-bold px-4 py-2 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

