# NETFLIX GPT

- CREATE REACT APP
- Configure TailwendCSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef
- Firebase Setup
- Deploying app to production
- Create Sign Up User Account
- Implement Sign In user Api
- After User Sign In / Sign Up storing the user information to redux store and navigating to the browse page
- Creating Redux Store with userSlice
- Use the onAuthStateChange API which will just act like event listener whenever sign in/sign up/sign out ie authentication related task this api will keep the track [called automatically] 
- TestCase: If user is not logged in Redirect/browse to login page and vice-versa
- Unsubscribe to the onAuthStateChange callback
- Register TMDB API & create an app and get the access token
- Get Data from TMDB "now playing" movies list API
- Create Movie Slice 
- Update Store with movies data
- Embed the youtube video
- GPT Search Bar 
- Multi Language Features 
- Integrated RapidApi [ChatGPT]

# Features

- Login/SignUp
  - Sign In / Sign Up Form
  - redirect to browse page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar [Multi language]
  - Movie Suggestions

# Note
- Also Implemented the feature considering the case if my GPT-Api limit exceed's user can add his/her API key following the given steps so as to test the workflow
- Movie Suggestions will be based upon GPT model version

# My Learnings

- proper structuring and maintainence of files and folders
- Firebase Integration for user athentication
- custom hooks
- proper usage of react hooks [useEffect, useState, useRef]
- Redux Store [This project makes it quite easier to understand and use it well]

# Problems Faced
- Firebase hoisting not worked [google verification steps not worked] so hoisted on vercel
- Chat GPT API not worked so I used it indirectly using RapidApi Key
