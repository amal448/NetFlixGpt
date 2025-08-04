import React from 'react'
import GptSearchInputBar from './GptSearchInputBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { PROFILE } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={PROFILE} alt="logo" />
      </div>

      <GptSearchInputBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GPTSearch