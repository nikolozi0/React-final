import { useEffect, useState, useContext } from "react";
import { Droplets, Wind } from "lucide-react";
import { useWeatherAPI } from "../hooks/useWeatherAPI";
import { WeatherContext } from "../contexts/WeatherContext";
import WeatherIcon from "../components/WeatherIcon";

const ForecastPage = ({ navigateTo }) => {
  const { currentWeather } = useContext(WeatherContext);
  const { fetchForecast, loading, error } = useWeatherAPI();
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (currentWeather) {
      fetchForecast(currentWeather.name).then(setForecast);
      
    }
  }, [currentWeather]);

  if (!currentWeather) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">პროგნოზის სანახავად</h2>
          <p className="mb-4">ჯერ მოიძებნეთ ქალაქი მთავარ გვერდზე</p>
          <button
            onClick={() => navigateTo("home")}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            მთავარი გვერდი
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">5-დღიანი პროგნოზი</h1>
          <p className="text-xl text-white/90">{currentWeather.name}</p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto mb-4">
            {error}
          </div>
        )}

        {forecast && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {forecast.list.map((day, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold text-gray-800">
                    {new Date(day.dt).toLocaleDateString("ka-GE", {
                      weekday: "long",
                    })}
                  </div>
                  <WeatherIcon weatherMain={day.weather[0].main} size={40} />
                </div>

                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {day.main.temp}°C
                </div>

                <div className="text-gray-600 capitalize mb-4">
                  {day.weather[0].description}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Droplets size={16} className="text-blue-500" />
                    <span>{day.main.humidity}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind size={16} className="text-green-500" />
                    <span>{day.wind.speed} მ/წმ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForecastPage;
