import React from 'react'
import Header from './Header';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainVideoContainer from './MainVideoContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className=' w-screen min-h-screen'>
      <Header />
      <MainVideoContainer/>
      <SecondaryContainer/>
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
