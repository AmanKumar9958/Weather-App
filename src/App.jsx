import React from 'react'
import { IoSearch } from "react-icons/io5";

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col gap-5'>
      <h2>🌦️ Weather App</h2>
      <div>
        <input 
          type="text"
          name="search-box" 
          id="search-box" 
          placeholder='Enter city name..' 
          className='bg-gray-500 text-black px-3 py-2 rounded-3xl'
        />
        <IoSearch />
      </div>
    </div>
  )
}

export default App