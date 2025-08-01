import React from 'react'
import { IMG_PST_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img className='' src={IMG_PST_URL +posterPath} alt="" />
    </div>
  )
}

export default MovieCard