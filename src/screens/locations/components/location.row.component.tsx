import { useContext } from "react";
import { ThemeContext } from "../../../utils/theme/theme.provider";
import { locationsStyles } from "../locations.style";
import { View, Text } from "react-native";
import { Button } from "../../../components/button/button.component";

interface LocationProps {
  title: string;
  temp: string;
  type: string;
  location: string;
  dbLocation?: string;
  onAction: (dbLocation: string) => void;
}

export const LocationRow = ({
  title,
  temp,
  location,
  dbLocation = "",
  type,
  onAction,
}: LocationProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = locationsStyles(theme);
  return (
    <>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{location}</Text>
          <Text style={styles.text}>Weather: {type}</Text>
          <Text style={styles.text}>Temperature: {temp}°</Text>
        </View>
        <Button
          title={`  ${title}  `}
          onPress={() => {
            onAction(dbLocation);
          }}
        />
      </View>
    </>
  );
};
