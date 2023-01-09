import { StyleSheet } from 'react-native';
import gStyle from '../../../gStyle';

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(34, 47, 62, 1)",
    borderRadius: 8,
    width: '100%',  
  },
  disabled:{
    backgroundColor: "rgba(34, 47, 62, .5)",
  },
  pressed:{
    opacity: .3
  },
  text: {
      textAlign: 'center',
      color: '#fff'  ,
      fontSize: 24,
      fontFamily:'Robot-Regular',
      fontWeight: '400',
      paddingVertical: 8,
  }
})

export default styles;