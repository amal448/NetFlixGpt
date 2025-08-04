import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'

import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { useUpComingMovies } from '../hooks/useUpComingMovies'
import { useSelector } from 'react-redux'

const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  const showgptSearch = useSelector(state => state.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {
        showgptSearch ?
          <GptSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />

          </>
      }
    </div>
  )
}

export default Browse