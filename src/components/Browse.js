import React, { useState } from 'react'
import Header from './Header';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import MainVideoContainer from './MainVideoContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearchContainer from './GptSearchContainer';
import {useSelector} from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptsearch=useSelector((store)=>store.gpt.showGptSearch);
  return (
    <div className=' w-screen min-h-screen bg-black'>
      <Header />
      {
        showGptsearch ? <GptSearchContainer /> :
          <>
            <MainVideoContainer />
            <SecondaryContainer />
          </>
      }


      {/*
        Main Video Container
        - video in background
        - video title
        Secondary Container
        - Movielists * n
          - Cards*n
       */}
    </div>
  )
}

export default Browse;
