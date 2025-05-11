import React from 'react'

const ForecastCard = ({ forecastData }) => {
  if(!forecastData) return null;

  const dailyForecast = forecastData.filter((_, index) => index % 8 === 0);

  return(
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {dailyForecast.map((item, idx) => {
        const date = new Date(item.dt * 1000);
        const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

        return (
          <div key={idx} className="bg-white/10 text-white p-4 rounded-xl text-center backdrop-blur-md border border-white/10">
            <p className="font-semibold">{date.toLocaleDateString(undefined, { weekday: 'short' })}</p>
            <img src={iconUrl} alt="weather icon" className="w-12 h-12 mx-auto" />
            <p className="text-sm">{item.weather[0].main}</p>
            <p className="font-bold">{item.main.temp.toFixed(1)}°C</p>
          </div>
        );
      })}
    </div>
  )
}

export default ForecastCard