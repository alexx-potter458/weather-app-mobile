import { useContext } from "react";
import { ThemeContext } from "../../../utils/theme/theme.provider";
import { locationsStyles } from "../locations.style";
import { View, Text, Image, Pressable } from "react-native";

interface LocationProps {
  title: string;
  weather: any;
  onAction: (dbLocation: string) => void;
  onLongAction: (dbLocation: string) => void;
}

export const LocationRow = ({
  title,
  weather,
  onAction,
  onLongAction,
}: LocationProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = locationsStyles(theme);
  return (
    <>
      <Pressable
        onPress={() => {
          onAction(weather.dbName);
        }}
        style={styles.rowParent}
        onLongPress={() => {
          onLongAction(weather.dbName);
        }}
      >
        <View style={styles.row}>
          <View>
            <Text style={styles.weatherTemp}>{weather.main.temp}°</Text>
            <Text style={styles.textSecondary}>
              Feels like: {weather.main.feels_like}°
            </Text>
            <Text style={styles.text}>
              {weather?.name}, {weather.sys.country}
            </Text>
          </View>

          <View style={styles.rowSide}>
            <Image
              style={styles.weatherTypeImage}
              source={weather.weather[0].image}
            />
            <Text style={styles.text}>{weather.weather[0].main}</Text>
          </View>
        </View>
        <Text style={styles.textSecondary}>Tap to {title} - Hold to unset</Text>
      </Pressable>
    </>
  );
};
