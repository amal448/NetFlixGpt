import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice'
import React from 'react'
import { useEffect } from 'react'

export const useTopRatedMovies=()=>{

    const dispatch = useDispatch()

    const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated',
      API_OPTIONS);
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
    
    }
    useEffect(() => {
    getPopularMovies()
    }, [])
    
}










