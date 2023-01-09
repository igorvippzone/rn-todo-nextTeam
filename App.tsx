import { StatusBar as Bar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  LogBox,
} from "react-native";
import { useFonts } from "expo-font";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import StartUpScreen from "./screens/StartUpScreen/StartUpScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Robot-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Robot-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  LogBox.ignoreLogs(["Remote debugger"]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  let screenContent = <HomeScreen />;

  if (isLoading || !fontsLoaded) {
    screenContent = <StartUpScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Bar style="dark" />
      {screenContent}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
