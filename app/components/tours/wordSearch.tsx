import React, { Dispatch, FormEventHandler, SetStateAction } from 'react'

function WordSearch({setWord,word}:{setWord:Dispatch<SetStateAction<string>>,word:string}) {
  return (
    <div
    className="flex justify-end items-center w-full flex-col mt-2 md:flex-row md:w-1/2"
  >
    <div className="mt-2 w-full md:w-1/2 mb-5">
      <input
        id="word"
        name="word"
        type="text"
        autoComplete="text"
        placeholder="Tour Name"
        onChange={(e)=>setWord(e.target.value)}
        defaultValue={word}
        className="px-2 se-in block w-full ease-in-out duration-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:out  focus-within:outline-amber-400 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  )
}

export default WordSearch