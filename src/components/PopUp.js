import React from 'react';

const PopUp = () => {
  return (
    <div className='bg-white text-black p-8 rounded-lg h-fit w-fit relative'>
      {/* <img className="absolute top-3 right-3 w-6" src="https://ik.imagekit.io/teamTaskTracker/images/close.svg?updatedAt=1703828822780" alt="error" /> */}
      <div className='mb-2 font-bold text-[16px] md:text-[18px]'>Steps To Follow</div>
      <ul className='list-disc pl-8 text-[16px] md:text-[18px]'>
        <li className='mb-1'>Go to <a href="https://rapidapi.com/" target="_blank" className='underline'><b>rapidapi.com</b></a> and create your account</li>
        <li className='mb-1'>After sign in, search for this API <b>'OPEN AI - ChatGPT'</b> </li>
        <li className='mb-1'>Copy your <b>'X-RapidAPI-Key'</b> from the header parameters</li>
        <li className='mb-1'>Also you need to <b>subscribe</b> to the API before using it</li>
        <li className='mb-1'>Paste the corresponding key here and press Enter to Lock</li>
        <li className='mb-1'>Now you are ready to search for your movies</li>
      </ul>
    </div>
  );
};

export default PopUp;
