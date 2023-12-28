import React, { useEffect } from 'react'
import { API_options } from '../utils/constants';
import { useDispatch} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice'

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_options);
        const json = await data.json();
        // console.log("Trailer Results",json.results);
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        // console.log(trailer);
    }
    useEffect(() => {
        getMovieVideos();
    }, [movieId]);
}