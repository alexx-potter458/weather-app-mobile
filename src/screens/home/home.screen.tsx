import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { homeStyles } from "./home.styles";
import { getWeather } from "../../services/api/weather.api";
import { getFavoriteLocation } from "../../services/local/local";
import { Image, View } from "react-native";

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const styles = homeStyles(theme);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<any>({});
  const weatherTypes = {
    clear: require("../../assets/weather/sun.png"),
    drizzle: require("../../assets/weather/drizzle.png"),
    rain: require("../../assets/weather/rain.png"),
    snow: require("../../assets/weather/snow.png"),
    sun: require("../../assets/weather/sun.png"),
    thunderstorm: require("../../assets/weather/thunderstorm.png"),
    weather: require("../../assets/weather/weather.png"),
    fog: require("../../assets/weather/fog.png"),
  };

  const initWeather = async () => {
    setLoading(true);
    try {
      const data = await getWeather(await getFavoriteLocation());
      data.weather[0].image = getWeatherImage(data.weather[0].main);

      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getWeatherImage = (weatherType: string) => {
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

  function getHours(value: number) {
    let date = new Date(value * 1000);
    date.setHours(date.getHours() + 3);

    return date.toLocaleTimeString("RO-ro");
  }

  useEffect(() => {
    initWeather();
  }, []);

  return (
    <>
      <Image
        style={styles.background}
        source={require(`../../assets/images/background.jpg`)}
      />
      <HorizontalSpace size={5} />

      {loading ? (
        <Text style={styles.city}>Loading...</Text>
      ) : (
        <>
          <Text style={styles.city}>
            {weather?.name}, {weather.sys.country}
          </Text>
          <Text style={styles.temp}>{weather.main.temp}°</Text>
          <Text style={styles.weatherType}>
            Feels like: {weather.main.feels_like}°
          </Text>
          <HorizontalSpace size={2} />
          <Image
            style={styles.weatherTypeImage}
            source={weather.weather[0].image}
          />
          <Text style={styles.weatherType}>{weather.weather[0].main}</Text>
          <HorizontalSpace size={2} />

          <View style={styles.rowDetails}>
            <View style={styles.boxDetails}>
              <Text style={styles.boxTitle}>SUNRISE</Text>
              <Text style={styles.boxValue}>
                {getHours(weather.sys.sunrise)}
              </Text>
              <HorizontalSpace size={3} />
              <Text style={styles.boxTitle}>SUNSET</Text>
              <Text style={styles.boxValue}>
                {getHours(weather.sys.sunset)}
              </Text>
            </View>
            <View style={styles.boxDetails}>
              <Text style={styles.boxTitle}>HIGHEST TEMP</Text>
              <Text style={styles.boxValue}>{weather.main.temp_max}</Text>
              <HorizontalSpace size={3} />
              <Text style={styles.boxTitle}>LOWEST TEMP</Text>
              <Text style={styles.boxValue}>{weather.main.temp_min}°</Text>
            </View>
          </View>
          <View style={styles.rowDetails}>
            <View style={styles.boxDetails}>
              <Text style={styles.boxTitle}>PRESSURE</Text>
              <Text style={styles.boxValue}>{weather.main.pressure}kPa</Text>
              <HorizontalSpace size={3} />
              <Text style={styles.boxTitle}>HUMIDITY</Text>
              <Text style={styles.boxValue}>{weather.main.humidity}%</Text>
            </View>

            <View style={styles.boxDetails}>
              <Text style={styles.boxTitle}>WIND SPEED</Text>
              <Text style={styles.boxValue}>{weather.wind.speed} km/h</Text>
              <HorizontalSpace size={3} />
              <Text style={styles.boxTitle}>CLOUDS DENSITY</Text>
              <Text style={styles.boxValue}>{weather.clouds.all}%</Text>
            </View>
          </View>
        </>
      )}
    </>
  );
};
