import React from 'react'

function VideoTitle({title,overview}) {
  const getMovieVideos=async ()=>{
    const data=await fetch("");
    const json=await data.json();
    console.log(json);
  }

  return (
    <div className='w-screen aspect-video pt-[20%] pl-24 absolute text-white bg-gradient-to-r from-black'>
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

