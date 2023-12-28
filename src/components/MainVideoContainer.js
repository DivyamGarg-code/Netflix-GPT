import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainVideoContainer = () => {
    const mainMovie = useSelector((store) => store.movies.mainMovie);
    if (!mainMovie) return null;
    const { original_title, overview, id } = mainMovie;
    // console.log(original_title,overview,id);
    return (
        <div >
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainVideoContainer
