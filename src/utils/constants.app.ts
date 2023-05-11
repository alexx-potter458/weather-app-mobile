export const weatherBaseUrl = "http://api.openweathermap.org/data/2.5";

export const weatherUnits = "metric";

export const weatherTypes = {
  clear: require("../assets/weather/sun.png"),
  drizzle: require("../assets/weather/drizzle.png"),
  rain: require("../assets/weather/rain.png"),
  snow: require("../assets/weather/snow.png"),
  sun: require("../assets/weather/sun.png"),
  thunderstorm: require("../assets/weather/thunderstorm.png"),
  weather: require("../assets/weather/weather.png"),
  fog: require("../assets/weather/fog.png"),
};

export const getWeatherImage = (weatherType: string) => {
  switch (weatherType) {
    case "Clear":
      return weatherTypes.clear;
    case "Thunderstorm":
      return weatherTypes.thunderstorm;
    case "Drizzle":
      return weatherTypes.drizzle;
    case "Rain":
      return weatherTypes.rain;
    case "Snow":
      return weatherTypes.snow;
    case "Fog":
      return weatherTypes.fog;
    default:
      return weatherTypes.weather;
  }
};

export const hex2rgba = (hex: any, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x: string) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
