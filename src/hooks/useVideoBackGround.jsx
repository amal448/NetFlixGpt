import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/movieSlice'
import { useDispatch, useSelector } from 'react-redux'

const useVideoBackGround = (movieId) => {

    const dispatch = useDispatch()

    const getMovieVideos = async ({movieId}) => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId +'/videos?language=en-US', API_OPTIONS)
        const json = await data.json()

        const filterData = json.results.filter((item) => {
            return item.type == "Trailer"
        })

        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer.key))
    }
 
    useEffect(() => {
        getMovieVideos({movieId})
    }, [])
    // return trailerkey
}

export default useVideoBackGround