import React from 'react'
import { useSelector } from 'react-redux';
import { useMovieTrailer } from '../hooks/useMovieTrailer';

function VideoBackground({ movieId }){
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId); // This will add the trailerVideo object in the redux store
  const videoSrc = trailerVideo?.key
    ? `https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1&rel=0&controls=0&loop=1`
    : '';
  return (
    // fetch the trailer video and updating the store with trailer video data
    <div className='w-screen h-screen opacity-75'>
      {videoSrc && (
        <iframe
          className='w-full aspect-video'
          src={videoSrc}
          title="Killers of the Flower Moon — Final Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}

export default VideoBackground;