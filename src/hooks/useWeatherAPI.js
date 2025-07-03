import { useState } from "react";
import axios from "axios";

const API_KEY = "5037bbd78aa7a6be991145c6cca77720"; 
export const useWeatherAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ამინდის წამოღება კონკრეტული ქალაქისთვის
  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=ka`
      );
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError("ასეთი ქალაქი ვერ მოიძებნა 😔");
      return null;
    }
  };

  // 5 დღიანი პროგნოზის წამოღება
  const fetchForecast = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=ka`
      );
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError("პროგნოზის ჩატვირთვა ვერ მოხერხდა");
      return null;
    }
  };

  return { fetchWeather, fetchForecast, loading, error };
};
