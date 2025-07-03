import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { useWeatherAPI } from "../hooks/useWeatherAPI";
import { useStorage } from "../hooks/useStorage";
import { useFavorites } from "../hooks/useFavorites";
import { WeatherContext } from "../contexts/WeatherContext";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../utils/translations"; 
import cityMap from "../utils/cityMap";

const HomePage = () => {
  const { currentWeather, setCurrentWeather } = useContext(WeatherContext);
  const { fetchWeather, loading, error } = useWeatherAPI();
  const { addFavorite, isFavorite } = useFavorites();
  const [recentSearches, setRecentSearches] = useStorage("recent_searches", []);
  const { theme } = useTheme();
  const { language } = useLanguage(); 

  // აქ ვაკეთებთ ქართულ სახელებს ინგლისურზე კონვერტაციას თუ cityMap-შია
  const normalizeCity = (city) => {
    return cityMap[city] || city;
  };

  const handleSearch = async (city) => {
    const cityToSearch = normalizeCity(city);
    const weather = await fetchWeather(cityToSearch);
    if (weather) {
      setCurrentWeather(weather);

      // განახლება ბოლო ძიებების სიაში - თავდაპირველად ინახავს როგორც მომხმარებელმა შეიყვანა
      const updatedSearches = [city, ...recentSearches.filter((s) => s !== city)].slice(0, 5);
      setRecentSearches(updatedSearches);
    }
  };

  const handleAddFavorite = (city) => {
    addFavorite(city);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("home_title", language)}
          </h1>
          <p className="text-xl opacity-90">
            {t("home_subtitle", language)}
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />

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

        {currentWeather && (
          <WeatherCard
            weather={currentWeather}
            onAddFavorite={handleAddFavorite}
            isFavorite={isFavorite(currentWeather.name)}
          />
        )}

        {recentSearches.length > 0 && (
          <div className="mt-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">
              {t("recent_searches", language)}:
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((city, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(city)}
                  className={`px-3 py-1 rounded-full hover:bg-opacity-30 transition-colors ${
                    theme === "dark"
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "bg-black/10 text-black hover:bg-black/20"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
