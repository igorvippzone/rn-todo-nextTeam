import { StyleSheet } from "react-native";
import gStyle from "../../../gStyle";

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderColor: gStyle.PRIMARY_COLOR,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  checked: {
    backgroundColor: gStyle.PRIMARY_COLOR,
  },
  image: {
    width: 12,
    height: 10,
  },
});

export default styles;
