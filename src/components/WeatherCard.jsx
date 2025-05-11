import React from 'react'

const WeatherCard = ({weatherData}) => {
    if(!weatherData){
        return null;
    }
    const { name, main, weather, wind, sys } = weatherData;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 text-white">
  <h1 className="text-xl text-center">
    📍 <span className="font-bold">{name},</span> {sys.country}
  </h1>

  <img src={iconUrl} alt="Weather Icon" className="w-24 h-24" />

  <h1 className="text-3xl font-semibold">🌡 {main.temp}°C</h1>
  <p className="text-xl font-medium text-blue-300">{weather[0].description.toUpperCase()}</p>

  <div className="flex justify-between w-full mt-6 gap-3">
    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-sm font-semibold w-full text-center">
      💨 Wind: {wind.speed} m/s
    </div>
    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-sm font-semibold w-full text-center">
      💧 Humidity: {main.humidity}%
    </div>
  </div>

  <div className="flex justify-between w-full mt-4 gap-3">
    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-sm font-semibold w-full text-center">
      🌅 Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}
    </div>
    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-sm font-semibold w-full text-center">
      🌇 Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}
    </div>
  </div>
</div>

    )
}

export default WeatherCard