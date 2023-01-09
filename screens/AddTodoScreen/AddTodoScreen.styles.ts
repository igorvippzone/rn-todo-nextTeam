import { StyleSheet } from "react-native";
import gStyle from "../../gStyle";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: gStyle.BG_COLOR,
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "500",
    fontFamily:'Robot-Medium',
    color: "#999",
    marginLeft: 30,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

 
});

export default styles;
