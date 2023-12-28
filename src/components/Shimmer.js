import React from 'react'
import "./shimmer.css";

const Shimmer = () => {
    return (
        <div className='flex flex-col gap-5 opacity-20'>
            <div className='flex flex-col gap-10 justify-start items-start '>
                <div className='w-[150px] h-[30px] rounded-md shimming-effect'></div>
                <div className='flex flex-row gap-5 flex-wrap'>
                    <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                    <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                    <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                    <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                    <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                    <div className='w-[200px] h-[300px] rounded-md shimming-effect'></div>
                </div>
            </div>
        </div>
    )
}

export default Shimmer
