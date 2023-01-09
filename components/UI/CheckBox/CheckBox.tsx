import { FC } from "react";
import { View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import s from "./CheckBox.styles";

type CheckBoxProps = {
  checked: boolean;
  onPress?: () => void;
};

const CheckBox: FC<CheckBoxProps> = ({ checked, onPress = () => {} }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[s.checkbox, checked ? s.checked : {}]}>
        {checked && <FontAwesome5 name="check" size={12} color="white" />}
      </View>
    </Pressable>
  );
};

export default CheckBox;
