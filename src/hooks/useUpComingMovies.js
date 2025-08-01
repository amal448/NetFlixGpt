import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpComingMovies } from '../utils/movieSlice'
import React from 'react'
import { useEffect } from 'react'

export const useUpComingMovies=()=>{

    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',
      API_OPTIONS);
    const json = await data.json()
    dispatch(addUpComingMovies(json.results))
    
    }
    useEffect(() => {
    getNowPlayingMovies()
    }, [])
    
}










