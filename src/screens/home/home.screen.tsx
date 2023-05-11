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
      <HorizontalSpace size={3} />
      <View style={styles.upButtons}>
        <Pressable onPress={initWeather}>
          <Image
            style={styles.upButtonImage}
            source={require("../../assets/icons/refresh.png")}
          />
        </Pressable>

        <Pressable onPress={() => toggleThemeSchema()}>
          <Image
            style={styles.upButtonImage}
            source={require("../../assets/icons/theme.png")}
          />
        </Pressable>
      </View>
      <HorizontalSpace size={2} />

      {loading ? (
        <Text style={styles.city}>Loading...</Text>
      ) : (
        <>
          <Text style={styles.city}>
            {weather.name}, {weather.sys.country}
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
