import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    // console.log(movies);
    return (
        <div className='px-6 bg-transparent'>
            <h1 className='text-white text-3xl py-4'>{title}</h1>
        <div className='flex  overflow-x-auto scrollbar-hide '>
            <div className='flex '>
                {
                    movies?.map((movie)=>{
                        return(
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />

                        )

                    })
                }
            </div>
        </div>
        </div>

    )
}

export default MovieList