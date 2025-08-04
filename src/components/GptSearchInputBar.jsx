import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchInputBar = () => {
  const language=useSelector(state=>state.config.lang)
  console.log("language",language);
  
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" className='p-4 m-4 bg-white col-span-9' placeholder={lang[language].gptSearchPlaceholder} />
        <button className='m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3'>
          {lang[language].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchInputBar