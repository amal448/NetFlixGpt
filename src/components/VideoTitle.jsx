import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-full aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg line-clamp-3 w-1/4'>{overview}</p>

      <div className='my-5'>
        <button className='bg-white text-black hover:bg-gray-400 hover:text-white transition duration-300 p-4 px-12 text-xl rounded-lg'>
          Play
        </button>

        <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 mx-2 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle