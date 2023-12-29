import {createSlice} from '@reduxjs/toolkit'

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null,
        searchLoader:false,
        userApiKey:null,
        errorMessage:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        setSearchLoader:(state,action)=>{
            state.searchLoader=!state.searchLoader;
        },
        setUserApiKey:(state,action)=>{
            state.userApiKey=action.payload;
        },
        setErrorMessage:(state,action)=>{
            state.errorMessage=action.payload;
        },
        addGptMovieResults:(state,action)=>{
            const {movieNames,movieResults,errorMessage}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
            state.errorMessage=errorMessage;
        }
    }
})

export const {toggleGptSearchView,addGptMovieResults,setSearchLoader,setUserApiKey}=gptSlice.actions;
export default gptSlice.reducer;