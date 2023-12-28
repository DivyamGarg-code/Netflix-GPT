import React, { useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch,useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { addMainMovie } from '../utils/moviesSlice';

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
        dispatch(addMainMovie(json.results[0]));
    }
    useEffect(() => {
        // Call the API if nowPlaying Movies is not present
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])
}