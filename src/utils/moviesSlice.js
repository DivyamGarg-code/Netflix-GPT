import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
        mainMovie: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMainMovie: (state, action) => {
            state.mainMovie = action.payload;
        },
    }
});

// export reducer and actions 
export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo, addMainMovie } = moviesSlice.actions;
export default moviesSlice.reducer;