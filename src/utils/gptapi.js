import React from 'react'
import { Gpt_Api_Key } from '../utils/constants';
import { API_options } from '../utils/constants';

export const gptapi = async (searchQuery) => {
    // Search API......................................
    // This function will return a promise
    const getSearchedMovies = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_options);
        const json = await data.json();
        return json.results;
    }
    //................................................................

    function extractMovieNames(inputString) {
        const regex = /"([^"]*)"/g;
        const matches = inputString.match(regex);

        if (matches) {
            // Extracted movie names will be in the matches array
            return matches.map(match => match.replace(/"/g, ''));
        } else {
            return [];
        }
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': Gpt_Api_Key,
            'X-RapidAPI-Host': 'open-ai-chatgpt.p.rapidapi.com'
        },
        body: JSON.stringify({
            "query": `Act as a Movie Recommendation system and suggest some movies for the query" + ${searchQuery} + "only give me at maximum 5 movie names seperated by comma in this format only. Example Format : ["batman", "spider man", "king kong", "godzilla", "hera pheri"]`
        })
    };
    const getMovieResults = async () => {
        const data = await fetch("https://open-ai-chatgpt.p.rapidapi.com/ask", requestOptions);
        const json = await data.json();
        console.log("Movie Results", json.response);
        const movieNames = extractMovieNames(json.response);
        const promiseArray = movieNames.map((movie) => getSearchedMovies(movie));
        // // [promise,promise,promise,promise,promise] Return the List of 5 promises
        const tmdbResults = await Promise.all(promiseArray);
        return { movieNames: movieNames, movieResults: tmdbResults };
    }
    return getMovieResults();

    // const movieNames = ["batman","spiderman"];
    // const promiseArray = movieNames.map((movie) => getSearchedMovies(movie));
    // // // [promise,promise,promise,promise,promise] Return the List of 5 promises
    // const tmdbResults = await Promise.all(promiseArray);
    // return { movieNames: movieNames, movieResults: tmdbResults };
}









// const requestOptions = {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '58fe2d8db0msh1a998da6c9c5d62p1cb689jsn55c99c701e6f',
//     'X-RapidAPI-Host': 'open-ai-chatgpt.p.rapidapi.com'
//   },
//   body: JSON.stringify({
//     "query": "give me 5 funny movie names seperated by comma in this format only. Example : 'batman', 'spider man', 'king kong', 'godzilla', 'hera pheri'"
//   })
// };

// const getMovieResults=async ()=>{
//     const data=await fetch("https://open-ai-chatgpt.p.rapidapi.com/ask", requestOptions);
//     const json=await data.json();
//     console.log(json);
// }