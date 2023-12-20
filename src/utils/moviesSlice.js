import {createSlice} from '@reduxjs/toolkit'

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        removeNowPlayingMovies:(state,action)=>{
            return null; 
        }
    }
});

// export reducer and actions 
export const {addNowPlayingMovies,removeNowPlayingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;