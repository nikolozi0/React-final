import { Home, TrendingUp, Heart } from "lucide-react";

const MobileNav = ({ currentPage, navigateTo }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50">
      <div className="grid grid-cols-3 gap-1">
        <button
          onClick={() => navigateTo("home")}
          className={`flex flex-col items-center py-3 transition-colors ${
            currentPage === "home"
              ? "text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          <Home size={20} />
          <span className="text-xs mt-1">მთავარი</span>
        </button>

        <button
          onClick={() => navigateTo("forecast")}
          className={`flex flex-col items-center py-3 transition-colors ${
            currentPage === "forecast"
              ? "text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          <TrendingUp size={20} />
          <span className="text-xs mt-1">პროგნოზი</span>
        </button>

        <button
          onClick={() => navigateTo("favorites")}
          className={`flex flex-col items-center py-3 transition-colors ${
            currentPage === "favorites"
              ? "text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          <Heart size={20} />
          <span className="text-xs mt-1">რჩეულები</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
