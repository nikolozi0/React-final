import { useStorage } from "./useStorage";

export const useFavorites = () => {
  const [favorites, setFavorites] = useStorage('weather_favorites', []);

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (city) => {
    setFavorites(favorites.filter((fav) => fav !== city));
  };

  const isFavorite = (city) => favorites.includes(city);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
