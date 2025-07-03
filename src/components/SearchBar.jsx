import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="შეიყვანეთ ქალაქის დასახელება..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <button
          onClick={handleSubmit}
          className="absolute right-2 top-2 px-4 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          ძებნა
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
