import { IoSearch } from "react-icons/io5";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import ForecastCard from "./components/ForecastCard";

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if(!city) return
    try{
      const API_KEY = import.meta.env.VITE_API_KEY;

      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const weatherData = await weatherResponse.json();

      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      const forecastData = await forecastResponse.json();

      if(weatherData.cod !== 200){
        setWeather(null)
        setForecast(null)
        setError('Location not found')
      } else{
        setWeather(weatherData)
        setForecast(forecastData.list)
        setError('')
      }
    } catch (error){
      setWeather(null)
      setForecast(null)
      setError('Something went wrong');
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      fetchWeather();
    }
  }
  return (
    <div 
      className="w-full min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex items-center justify-center flex-col gap-5 font-sans px-4 py-3">
      {/* Floating Emojis */}
      <div className="absolute text-5xl float-slow top-10 left-5">☁️</div>
      <div className="absolute text-4xl float-fast top-[50%] right-6">🌧️</div>
      <div className="absolute text-6xl float-medium bottom-10 left-[40%]">☀️</div>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
        {/* <h2 className="text-2xl font-bold mb-4 text-center tracking-wide text-white">🌦️ Weather App</h2> */}
        {/* Search */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <input
            type="text"
            placeholder="e.g. Delhi 🌇"
            className="flex-1 bg-white/20 text-white placeholder-gray-300 px-4 py-2 rounded-2xl outline-none border border-white/30 focus:ring-2 focus:ring-blue-400 transition-all"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {/* X icon */}
          {
            city && (
              <span 
                onClick={() => setCity("")} 
                className="absolute left-4/5 top-11 transform -translate-y-1/2 text-white hover:text-red-400 cursor-pointer text-xl font-bold"
              >
                x
              </span>
            )
          }
          {/* search icon */}
          <IoSearch className="hover:cursor-pointer w-6 h-6 text-white hover:text-blue-400 transition" onClick={fetchWeather} />
        </div>
        {/* Error box */}
        {error && (
          <p className="text-red-400 text-center font-medium mt-2">{error}</p>
        )}
        {/* Weather Card */}
        <WeatherCard weatherData={weather} />
        {/* Forecast Card */}
        {
          forecast && (
            <h1 className="text-center font-semibold bg-white/10 backdrop-blur-md rounded-2xl py-2 px-3">5 Days Forecast</h1>
          )
        }
        <ForecastCard forecastData={forecast} />
      </div>
      {/* Footer */}
      <p className="text-center text-white/50 text-xs mt-6">
        Made with ❤️ & ☁️ by Aman Kumar | Powered by OpenWeather 🌍
      </p>
    </div>
  )
}

export default App