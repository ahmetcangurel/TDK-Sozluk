import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './InfoScreen.Style'

import SvgLeft from '../../Components/icons/Left'
import Colors from '../../utils/Colors'

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Hakkında</Text>
            </View>

            <Image source={require('../../assets/logo-red.png')} style={styles.logo} />

            <View style={styles.summaryContainer}>

                <Text style={styles.summary}>
                    <Text style={styles.summaryTitle}>Türk Dil Kurumu</Text>
                    ’nun 1945’ten beri yayımlanan Türkçe Sözlük’ünün
                    2011 yılında yapılan 11. baskısının gözden geçirilip güncellenerek
                    taşınabilir cihazlar için hazırlanan sürümüdür.
                </Text>
            </View>
        </View>
    )
}

export default InfoScreen