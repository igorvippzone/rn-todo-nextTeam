import { StyleSheet } from "react-native";
import gStyle from "../../gStyle";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: gStyle.BG_COLOR,
    // paddingHorizontal:20
  },
  logo: {
    marginBottom: 20,
    marginHorizontal: 20,
    flex: 1,
    // backgroundColor: gStyle.RED_COLOR,
    justifyContent: "flex-end",
  },
  list: { flex: 1 },
  addTodo: {
    position: "absolute",
    bottom: 31,
    right: 36,
  },
});

export default styles;
