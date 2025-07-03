import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Sun, Moon } from "lucide-react";

const Header = ({ currentPage, navigateTo, t, language }) => {
  const { theme, setTheme } = useTheme();
  const { setLanguage } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg p-4 flex justify-between items-center">
      <div onClick={() => navigateTo("home")} className="cursor-pointer font-bold text-xl">
        WeatherApp
      </div>

      <nav className="space-x-4">
        <button onClick={() => navigateTo("home")}>{t("main_page", language)}</button>
        <button onClick={() => navigateTo("forecast")}>{t("forecast_title", language)}</button>
        <button onClick={() => navigateTo("favorites")}>{t("favorites_title", language)}</button>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full hover:bg-white/30"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </button>

        {/* Language toggle */}
        <button
          onClick={() => setLanguage(language === "ka" ? "en" : "ka")}
          className="px-3 py-1 rounded bg-white text-blue-600 font-semibold"
        >
          {language === "ka" ? "EN" : "KA"}
        </button>
      </div>
    </header>
  );
};

export default Header;
