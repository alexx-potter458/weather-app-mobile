import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { homeStyles } from "./home.styles";
import { getWeather } from "../../services/api/weather.api";
import { getFavoriteLocation } from "../../services/local/local";
import { Image, View, Text, Pressable } from "react-native";
import { getWeatherImage } from "../../utils/constants.app";

export const Home = () => {
  const { theme, toggleThemeSchema } = useContext(ThemeContext);
  const styles = homeStyles(theme);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<any>({});

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

  function getHours(value: number) {
    let date = new Date(value * 1000);
    date.setHours(date.getHours() + 3);

    return date.toLocaleTimeString("RO-ro", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  useEffect(() => {
    initWeather();
  }, []);

  return (
    <>
      <HorizontalSpace size={3} />

      {loading ? (
        <Text style={styles.city}>Loading...</Text>
      ) : (
        <>
          <View style={styles.upButtons}>
            <Pressable style={styles.topAction} onPress={initWeather}>
              <Image
                style={styles.upButtonImage}
                source={require("../../assets/icons/refresh.png")}
              />
            </Pressable>
            <Text style={styles.city}>
              {weather.name}, {weather.sys.country}
            </Text>
            <Pressable
              style={styles.topAction}
              onPress={() => toggleThemeSchema()}
            >
              <Image
                style={styles.upButtonImage}
                source={require("../../assets/icons/theme.png")}
              />
            </Pressable>
          </View>

          <HorizontalSpace size={2} />
          <Text style={styles.weatherType}>{weather.weather[0].main}</Text>

          <Text style={styles.temp}>{Math.ceil(weather.main.temp)}°</Text>
          <Text style={styles.weatherType}>
            Feels like: {weather.main.feels_like}°
          </Text>
          <Image
            style={styles.weatherTypeImage}
            source={weather.weather[0].image}
          />
          <HorizontalSpace size={2} />

          <View style={styles.rowDetails}>
            <View style={styles.boxDetails}>
              <Image
                style={styles.boxImage}
                source={require("../../assets/icons/sunrise.png")}
              />
              <HorizontalSpace size={2} />
              <Text style={styles.boxValue}>
                {getHours(weather.sys.sunrise)}
              </Text>
              <Text style={styles.boxTitle}>Sunrise</Text>
            </View>

            <View style={styles.boxDetails}>
              <Image
                style={styles.boxImage}
                source={require("../../assets/icons/humidity.png")}
              />
              <HorizontalSpace size={2} />

              <Text style={styles.boxValue}>{weather.main.humidity}%</Text>
              <Text style={styles.boxTitle}>Humidity</Text>
            </View>

            <View style={styles.boxDetails}>
              <Image
                style={styles.boxImage}
                source={require("../../assets/icons/sunset.png")}
              />
              <HorizontalSpace size={2} />
              <Text style={styles.boxValue}>
                {getHours(weather.sys.sunset)}
              </Text>
              <Text style={styles.boxTitle}>Sunset</Text>
            </View>
          </View>

          <View style={styles.rowDetails}>
            <View style={styles.boxDetails}>
              <Image
                style={styles.boxImage}
                source={require("../../assets/icons/temperature.png")}
              />
              <HorizontalSpace size={2} />
              <Text style={styles.boxValue}>{weather.main.temp_min}°</Text>
              <Text style={styles.boxTitle}>Lowest</Text>
            </View>

            <View style={styles.boxDetails}>
              <Image
                style={styles.boxImage}
                source={require("../../assets/icons/wind.png")}
              />
              <HorizontalSpace size={2} />

              <Text style={styles.boxValue}>{weather.main.humidity}km/h</Text>
              <Text style={styles.boxTitle}>Wind</Text>
            </View>

            <View style={styles.boxDetails}>
              <Image
                style={styles.boxImage}
                source={require("../../assets/icons/temperature.png")}
              />
              <HorizontalSpace size={2} />
              <Text style={styles.boxValue}>{weather.main.temp_max}°</Text>
              <Text style={styles.boxTitle}>Highest</Text>
            </View>
          </View>
        </>
      )}
    </>
  );
};
