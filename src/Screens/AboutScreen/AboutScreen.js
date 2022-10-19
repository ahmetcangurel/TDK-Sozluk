import React, { useRef } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import styles from './AboutScreen.Style'

import Button from '../../Components/Button'
import Colors from '../../utils/Colors'

import ContactScreen from '../ContactScreen'
import InfoScreen from '../InfoScreen'
import BottomSheet from 'react-native-gesture-bottom-sheet'

const AboutScreen = () => {
  const ContactRef = useRef()
  const InfoRef = useRef()

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/banner.png')} style={styles.banner} >
        <Image style={styles.logo} source={require('../../assets/logo-white.png')} />
        <Text style={styles.appName}>Türk Dil Kurumu Başkanlığı</Text>
        <Text style={styles.version}>v.1.0</Text>
      </ImageBackground>
      <Button
        text='Hakkında'
        bgColor={Colors.gray}
        textColor={Colors.dark}
        onPress={() => InfoRef.current.show()}
      />
      <BottomSheet sheetBackgroundColor={Colors.white} ref={InfoRef} height={400} >
        <InfoScreen />
      </BottomSheet>
      <Button
        text='İletişim'
        bgColor={Colors.gray}
        textColor={Colors.dark}
        onPress={() => ContactRef.current.show()}
      />
      <BottomSheet sheetBackgroundColor={Colors.white} ref={ContactRef} height={400} >
        <ContactScreen />
      </BottomSheet>
    </View>
  )
}

export default AboutScreen