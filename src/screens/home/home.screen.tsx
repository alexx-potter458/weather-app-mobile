import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { homeStyles } from "./home.styles";
import { getWeather } from "../../services/api/weather.api";
import { getFavoriteLocation } from "../../services/local/local";

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const styles = homeStyles(theme);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<any>({});

  const initWeather = async () => {
    setLoading(true);
    try {
      const data = await getWeather(await getFavoriteLocation());
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initWeather();
  }, []);

  if (loading) return <HorizontalSpace size={5} />;

  return (
    <>
      <HorizontalSpace size={5} />
      <Text style={styles.city}>
        {weather?.name}, {weather.sys.country}
      </Text>
      <Text style={styles.temp}>{weather.main.temp}°</Text>
      <Text style={styles.weatherType}>{weather.weather[0].main}</Text>
      <HorizontalSpace size={2} />

      <Text style={styles.weatherType}>
        H: {weather.main.temp_max}° - L: {weather.main.temp_min}°
      </Text>
    </>
  );
};
