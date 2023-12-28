import {createSlice} from '@reduxjs/toolkit'

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null,
        searchLoader:false,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        setSearchLoader:(state,action)=>{
            state.searchLoader=!state.searchLoader;
        },
        addGptMovieResults:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
})

export const {toggleGptSearchView,addGptMovieResults,setSearchLoader}=gptSlice.actions;
export default gptSlice.reducer;