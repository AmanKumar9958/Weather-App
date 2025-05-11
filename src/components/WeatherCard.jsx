const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;

    const { name, main, weather, wind, sys, clouds } = weatherData;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    return (
        <div className="flex flex-col items-center text-white text-center px-6 py-4">
            {/* Location */}
            <h2 className="text-lg font-medium tracking-wide">{name}, {sys.country}</h2>

            {/* Icon */}
            <img src={iconUrl} alt="weather icon" className="w-32 h-32 drop-shadow-md" />

            {/* Temperature */}
            <div className="text-6xl font-bold mt-2">{Math.round(main.temp)}°</div>

            {/* Description */}
            <p className="text-xl font-medium capitalize text-blue-200 mt-1">
                {weather[0].description}
            </p>

            {/* Additional Info */}
            <div className="flex justify-between gap-4 mt-6 w-full text-sm text-white/80">
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl py-2 px-3">
                    💨 <span className="block mt-1 font-semibold">{wind.speed} km/h</span>
                    <p className="text-xs mt-1">Wind</p>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl py-2 px-3">
                    💧 <span className="block mt-1 font-semibold">{main.humidity}%</span>
                    <p className="text-xs mt-1">Humidity</p>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl py-2 px-3">
                    🌧️ <span className="block mt-1 font-semibold">{clouds.all}%</span>
                    <p className="text-xs mt-1">Clouds</p>
                </div>
            </div>

            {/* Sunset & Sunrise */}
            <div className="flex justify-between w-full mt-4 gap-3">
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl text-sm font-semibold w-full text-center">
                    🌅 Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}
                </div>
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl text-sm font-semibold w-full text-center">
                    🌇 Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}
                </div>
            </div>

            {/* Date */}
            <p className="text-sm text-white/60 mt-6">
                {new Date().toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                })}
            </p>
        </div>
    );
};

export default WeatherCard;