import { useContext, useState } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { buttonStyle } from "./button.style";
import { Text, Pressable } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = ({ title, onPress }: ButtonProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = buttonStyle(theme);

  return (
    <Pressable style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};
