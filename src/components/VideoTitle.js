import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='absolute w-screen h-screen pt-[15%] pl-24 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white text-black font-bold px-4 py-2 rounded-md hover:bg-opacity-7'>Play</button>
            <button className='bg-gray-600 text-white font-bold px-4 py-2 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle

