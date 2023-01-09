import React,{FC} from 'react'
import {View, Image, Text} from 'react-native'

import s from './Logo.style'

type LogoProps={
  style?: {}
}
const Logo: FC<LogoProps> = ({style={}}) => {
  return (
    <View style={style}>
    <View style={s.logo}>
        <Image source={require("../../assets/image/logo.png")} style={s.logoImage} />
        <Text style={s.logoText}>AzaliaNow</Text>
      </View>
    </View>
  )
}

export default Logo