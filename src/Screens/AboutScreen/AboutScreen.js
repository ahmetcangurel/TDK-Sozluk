import React, { useRef } from 'react'
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import styles from './AboutScreen.Style'

import Button from '../../Components/Button'
import Colors from '../../utils/Colors'

import ContactScreen from '../ContactScreen'
import InfoScreen from '../InfoScreen'
import BottomSheet from 'react-native-gesture-bottom-sheet'
import { ScrollView } from 'react-native-gesture-handler'

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
      <BottomSheet hasDraggableIcon sheetBackgroundColor={Colors.white} ref={InfoRef} height={400} >
        <InfoScreen />
      </BottomSheet>
      <Button
        text='İletişim'
        bgColor={Colors.gray}
        textColor={Colors.dark}
        onPress={() => ContactRef.current.show()}
      />
        <BottomSheet hasDraggableIcon sheetBackgroundColor={Colors.white} ref={ContactRef} height={600} >
          <ContactScreen />
        </BottomSheet>
    </View>
  )
}

export default AboutScreen