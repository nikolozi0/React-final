import { MapPin, Star, Droplets, Wind, Gauge, Eye } from "lucide-react";
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({ weather, onAddFavorite, isFavorite }) => {
  if (!weather) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <MapPin size={24} className="text-red-500" />
            {weather.name}
          </h2>
          <p className="text-gray-600 capitalize">
            {weather.weather[0].description}
          </p>
        </div>
        <button
          onClick={() => onAddFavorite(weather.name)}
          className={`p-2 rounded-full transition-colors ${
            isFavorite
              ? "bg-red-100 text-red-500"
              : "bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500"
          }`}
        >
          <Star size={20} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Weather Icon and Temperature */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-2">
          <WeatherIcon weatherMain={weather.weather[0].main} size={80} />
        </div>
        <div className="text-5xl font-bold text-gray-800">
          {weather.main.temp}°C
        </div>
        <div className="text-gray-600">
          გრძნობს როგორც {weather.main.feels_like}°C
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Droplets size={16} className="text-blue-500" />
            <span className="text-sm text-gray-600">ტენიანობა</span>
          </div>
          <div className="text-lg font-semibold text-gray-800">
            {weather.main.humidity}%
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Wind size={16} className="text-green-500" />
            <span className="text-sm text-gray-600">ქარი</span>
          </div>
          <div className="text-lg font-semibold text-gray-800">
            {weather.wind.speed} მ/წმ
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Gauge size={16} className="text-purple-500" />
            <span className="text-sm text-gray-600">წნევა</span>
          </div>
          <div className="text-lg font-semibold text-gray-800">
            {weather.main.pressure} hPa
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Eye size={16} className="text-yellow-500" />
            <span className="text-sm text-gray-600">ხილვადობა</span>
          </div>
          <div className="text-lg font-semibold text-gray-800">
            {(weather.visibility / 1000).toFixed(1)} კმ
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
