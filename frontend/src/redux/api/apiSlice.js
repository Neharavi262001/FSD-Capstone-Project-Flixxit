import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseQuery=fetchBaseQuery({
    //baseUrl:'http://localhost:8000',
    baseUrl:'https://fsd-capstone-project-flixxit.onrender.com',
    credentials:'include',
   
})

export const apiSlice=createApi({
    baseQuery,
    tagTypes:['User','Rate','Watchlist','WatchHistory'],
    endpoints:(builder)=>({
        
    })
})