import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store?.movies?.nowPlayingMovies)
  const popular = useSelector((store) => store?.movies?.popularMovies)
  const topRated = useSelector((store) => store?.movies?.addTopRatedMovies)
  const upComing = useSelector((store) => store?.movies?.upcomingMovies)


  // console.log(topRated)

  return (

    <div className=' bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={'Now Playing'} movies={movies} />
      <MovieList title={'Popular'} movies={popular} />
      <MovieList title={'Top Rated'} movies={topRated} />
      <MovieList title={'UpComing'} movies={upComing} />

      </div>
    </div>
  )

}

export default SecondaryContainer