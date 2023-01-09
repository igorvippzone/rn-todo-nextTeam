import { StyleSheet } from "react-native";
import gStyle from "../../gStyle";

const styles = StyleSheet.create({
  todo: {
    borderRadius: 8,
    backgroundColor: gStyle.BG_COLOR,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingHorizontal: 9,
    paddingVertical: 12,
  },
  todoText: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    marginLeft: 16,
    color: "#222f3e",
    fontSize: 24,
    fontFamily: "Robot-Regular",
  },
  todoTextComplete: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
});

export default styles;
