import React, { useState } from "react";
import { WeatherContext } from "./contexts/WeatherContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

import cityMap from "./utils/cityMap";
import { t } from "./utils/translations";

import Header from "./components/Header";
import MobileNav from "./components/MobileNav";

import HomePage from "./pages/HomePage";
import ForecastPage from "./pages/ForecastPage";
import FavoritesPage from "./pages/FavoritesPage";

import { useNavigation } from "./hooks/useNavigation";

const AppContent = () => {
  const { currentPage, navigateTo } = useNavigation();
  const [currentWeather, setCurrentWeather] = useState(null);

  const { theme } = useTheme();
  const { language } = useLanguage();

  const geToEnCity = (cityGe) => cityMap[cityGe] || cityGe;

  const renderPage = () => {
    const sharedProps = {
      navigateTo,
      currentWeather,
      setCurrentWeather,
      geToEnCity,
      language,
      t,
    };

    switch (currentPage) {
      case "forecast":
        return <ForecastPage {...sharedProps} />;
      case "favorites":
        return <FavoritesPage {...sharedProps} />;
      default:
        return <HomePage {...sharedProps} />;
    }
  };

  return (
    <WeatherContext.Provider value={{ currentWeather, setCurrentWeather }}>
      <div
        className={`min-h-screen pb-16 md:pb-0 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <Header
          currentPage={currentPage}
          navigateTo={navigateTo}
          t={t}
          language={language}
        />
        {renderPage()}
        <MobileNav
          currentPage={currentPage}
          navigateTo={navigateTo}
          t={t}
          language={language}
        />
      </div>
    </WeatherContext.Provider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
