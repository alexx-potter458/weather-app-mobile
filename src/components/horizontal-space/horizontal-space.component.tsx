import { useContext } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { View } from "react-native";
import { horizontalSpaceStyle } from "./horizontal-space.style";

interface HorizontalSpaceProps {
  size?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export const HorizontalSpace = ({ size = 2 }: HorizontalSpaceProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = horizontalSpaceStyle(theme, size);

  return <View style={styles.space} />;
};
