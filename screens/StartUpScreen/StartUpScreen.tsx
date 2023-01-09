import { FC } from "react";
import { View, ActivityIndicator } from "react-native";
import Logo from "../../components/Logo/Logo";

import s from "./StartUpScreen.styles";

const StartUpScreen: FC = () => {
  return (
    <View style={s.screen}>
      <Logo />
      <ActivityIndicator size='large' color='red' style={{marginTop: 50}}/>
    </View>
  );
};

export default StartUpScreen;
