

const translations = {
  ka: {
    search_placeholder: "შეიყვანეთ ქალაქის დასახელება...",
    search_button: "ძებნა",
    home_title: "ამინდის პროგნოზი",
    home_subtitle: "მიიღეთ აქტუალური ინფორმაცია ამინდის შესახებ",
    recent_searches: "ბოლო ძებნები",
    forecast_title: "5-დღიანი პროგნოზი",
    forecast_subtitle: "ქალაქი:",
    favorites_title: "რჩეული ქალაქები",
    favorites_subtitle: "თქვენი საყვარელი ქალაქების სია",
    no_favorites: "რჩეული ქალაქები არ არის",
    add_from_home: "დაამატეთ ქალაქები რჩეულებში მთავარი გვერდიდან",
    main_page: "მთავარი გვერდი",
    theme_light: "ნათელი",
    theme_dark: "მუქი",
    lang_en: "English",
    lang_ka: "ქართული"
  },
  en: {
    search_placeholder: "Enter a city name...",
    search_button: "Search",
    home_title: "Weather Forecast",
    home_subtitle: "Get up-to-date weather information",
    recent_searches: "Recent Searches",
    forecast_title: "5-day Forecast",
    forecast_subtitle: "City:",
    favorites_title: "Favorite Cities",
    favorites_subtitle: "List of your favorite cities",
    no_favorites: "No favorite cities",
    add_from_home: "Add cities to favorites from the homepage",
    main_page: "Main Page",
    theme_light: "Light",
    theme_dark: "Dark",
    lang_en: "English",
    lang_ka: "Georgian"
  }
};

export const t = (key, lang = "ka") => {
  return translations[lang]?.[key] || key;
};
