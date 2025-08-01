import React from 'react'
import { useSelector } from 'react-redux';
import useVideoBackGround from '../hooks/useVideoBackGround'

const VideoBackground = ({ movieId }) => {

  const trailerkey = useSelector((state) => state?.movies?.trailerVideo)
  useVideoBackGround(movieId)

  return (
    <div className='w-full '>
      <iframe
        className='w-full aspect-video'
        src={`https://www.youtube.com/embed/${trailerkey}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow='autoplay; encrypted-media'
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

    </div>
  )
}

export default VideoBackground