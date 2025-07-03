import { useContext } from "react";
import { MapPin, Star, Heart } from "lucide-react";
import { useFavorites } from "../hooks/useFavorites";
import { useWeatherAPI } from "../hooks/useWeatherAPI";
import { WeatherContext } from "../contexts/WeatherContext";

const FavoritesPage = ({ navigateTo }) => {
  const { favorites, removeFavorite } = useFavorites();
  const { fetchWeather } = useWeatherAPI();
  const { setCurrentWeather } = useContext(WeatherContext);

  const handleFavoriteClick = async (city) => {
    const weather = await fetchWeather(city);
    if (weather) {
      setCurrentWeather(weather);
      navigateTo("home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            რჩეული ქალაქები
          </h1>
          <p className="text-xl text-white/90">
            თქვენი საყვარელი ქალაქების სია
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center text-white">
            <Heart size={64} className="mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-bold mb-4">რჩეული ქალაქები არ არის</h2>
            <p className="mb-6">დაამატეთ ქალაქები რჩეულებში მთავარი გვერდიდან</p>
            <button
              onClick={() => navigateTo("home")}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              მთავარი გვერდი
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {favorites.map((city, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <MapPin size={20} className="text-red-500" />
                    {city}
                  </h3>
                  <button
                    onClick={() => removeFavorite(city)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="წაშალე რჩეულებიდან"
                  >
                    <Star size={20} fill="currentColor" />
                  </button>
                </div>

                <button
                  onClick={() => handleFavoriteClick(city)}
                  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  ამინდის ნახვა
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
