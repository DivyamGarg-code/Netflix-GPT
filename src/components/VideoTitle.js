import React,{useState} from 'react'

function VideoTitle({ title, overview }) {
  const [showDesc, setShowDesc] = useState(true);
  const toggleDescription = () => {
    if(window.innerWidth < 768){
      setShowDesc(!showDesc);
    }
  }
  return (
    <div className='static flex flex-col justify-start gap-4 w-screen pl-10 pr-10 text-white md:pt-[84px] z-[1] md:absolute md:pl-24 lg:pt-[165px]'>
      <h1 className='text-xl font-600 md:text-5xl md:mb-0 font-700'>{title}</h1>
      <p className={`${showDesc ? 'hidden md:inline-block' : 'md:inline-block w-full md:w-2/4'}  text-lg line-clamp-6 lg:w-[35%]`}
      >{overview}</p>
      <div className='flex gap-2'>
        <button className='bg-white text-black font-bold px-4 py-2 rounded-md hover:bg-opacity-7'>Play</button>
        <button className='bg-gray-600 text-white font-bold px-4 py-2 rounded-md' onClick={toggleDescription}>{window.innerWidth < 768 ? (showDesc ? 'More Info' : 'Less Info') : 'More Info'}</button>
      </div>
    </div>
  )
}

export default VideoTitle

