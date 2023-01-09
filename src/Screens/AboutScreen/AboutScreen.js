import React, { useRef } from 'react'
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
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

      {/* Buttons */}
      <View style={{ marginTop: 8, width: '100%', paddingHorizontal: 8, }}>
        <Button
          title='Hakkında'
          onPress={() => InfoRef.current.show()}
        />
        <Button
          title='İletişim'
          onPress={() => ContactRef.current.show()}
        />
      </View>

      {/* Bottomsheets */}
      <BottomSheet hasDraggableIcon sheetBackgroundColor={Colors.white} ref={InfoRef} height={400} >
        <InfoScreen />
      </BottomSheet>
      <BottomSheet hasDraggableIcon sheetBackgroundColor={Colors.white} ref={ContactRef} height={600} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContactScreen />
        </ScrollView>
      </BottomSheet>
    </View>
  )
}

export default AboutScreen