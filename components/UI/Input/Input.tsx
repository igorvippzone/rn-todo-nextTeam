import { FC } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";

import s from "./Input.styles";

type InputProps = {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};
const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <View style={s.inputWrapper}>
      <TextInput
        style={s.input}
        value={value}
        onChange={onChange}
        placeholder="Наберите текст..."
      />
    </View>
  );
};

export default Input;
