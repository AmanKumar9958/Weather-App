import { IoSearch } from "react-icons/io5";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const fetchWeather = async () => {
    if(!city) return
    try{
      const API_KEY = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await response.json();
      setWeather(data)
    } catch (error){
      alert('City not found!!');
      setWeather(null)
    }
  }
  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      fetchWeather();
    }
  }
  return (
    <div 
      className="w-full min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex items-center justify-center flex-col gap-5 font-sans px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
        <h2 className="text-2xl font-bold mb-4 text-center tracking-wide text-white">🌦️ Weather App</h2>
        {/* Search */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter city name..."
            className="flex-1 bg-white/20 text-white placeholder-gray-300 px-4 py-2 rounded-2xl outline-none border border-white/30 focus:ring-2 focus:ring-blue-400 transition-all"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <IoSearch className="hover:cursor-pointer w-6 h-6 text-white hover:text-blue-400 transition" onClick={fetchWeather} />
        </div>
        {/* Weather Card */}
        <WeatherCard weatherData={weather} />
      </div>
    </div>
  )
}

export default App