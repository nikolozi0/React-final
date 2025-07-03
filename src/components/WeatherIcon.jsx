import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react";

const WeatherIcon = ({ weatherMain, size = 64 }) => {
  const iconMap = {
    Clear: <Sun size={size} className="text-yellow-500" />,
    Clouds: <Cloud size={size} className="text-gray-500" />,
    Rain: <CloudRain size={size} className="text-blue-500" />,
    Snow: <CloudSnow size={size} className="text-blue-200" />,
  };

  return iconMap[weatherMain] || <Sun size={size} className="text-yellow-500" />;
};

export default WeatherIcon;
