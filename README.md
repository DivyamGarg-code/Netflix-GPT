# NETFLIX GPT

A Netflix clone along with GPT integration including multiple features

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
