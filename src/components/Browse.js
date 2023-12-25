import React from 'react'
import Header from './Header';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import MainVideoContainer from './MainVideoContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div className=' w-screen min-h-screen bg-black'>
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
