import {StyleSheet} from 'react-native'
import gStyle from '../../../gStyle';

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    borderRadius: 8,
    backgroundColor: gStyle.BG_COLOR,
    width: "100%",
  },
  input: {
    paddingHorizontal: 13,
    paddingVertical: 8,
    fontSize: 24,
  },
})

export default styles;