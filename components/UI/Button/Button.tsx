import { FC } from "react";
import { Text, Pressable } from "react-native";

import s from "./Button.styles";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled: boolean;
};
const Button: FC<ButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        s.button,
        disabled ? s.disabled : {},
        pressed && !disabled ? s.pressed : {},
      ]}
    >
      <Text style={s.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
