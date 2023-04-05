import { useContext, useState } from "react";
import { TextInput } from "react-native";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { textFieldStyle } from "./textfield.style";

interface TextFieldProps {
  placeholder: string;
  onChangeText: (value: string) => void;
  hidden?: boolean;
}

export const TextField = ({
  placeholder,
  hidden = false,
  onChangeText,
}: TextFieldProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = textFieldStyle(theme);
  const [value, setValue] = useState("");

  const onChange = (text: string) => {
    setValue(text);
    onChangeText(text);
  };

  return (
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.secondary}
      secureTextEntry={hidden}
      onChangeText={(e) => onChange(e)}
      value={value}
    />
  );
};
