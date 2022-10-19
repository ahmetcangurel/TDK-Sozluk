import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './ContactScreen.Style'

import SvgLeft from '../../Components/icons/Left'
import Colors from '../../utils/Colors'
import SvgFax from '../../Components/icons/Fax'
import SvgPhone from '../../Components/icons/Phone'
import Button from '../../Components/Button'

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <SvgLeft style={styles.icon} size={24} fill={Colors.darkGray} />
                </TouchableOpacity>
                <Text style={styles.title}>İletişim Bilgileri</Text>
            </View>

            {/* Contact Info */}
            <View style={styles.contactContainer}>
                <Text style={styles.contactTitle}>Türk Dil Kurumu Başkanlığı</Text>
                <View style={styles.contactAdressContainer}>
                    <Text style={styles.contactAdress}>Atatürk Bulvarı No: 217 06680 Kavaklıdere/ANKARA</Text>
                    <Text style={styles.contactAdress}>Kavaklıdere/ANKARA</Text>
                </View>
                <View style={styles.contactItem}>
                    <SvgPhone size={24} fill={Colors.red} />
                    <Text style={styles.contactNumber}>+90 231 457 52 00</Text>
                </View>
                <View style={styles.contactItem}>
                    <SvgFax size={24} fill={Colors.red} />
                    <Text style={styles.contactNumber}>+90 231 457 52 00</Text>
                </View>
                <Button text='E-Posta Yaz' textColor={Colors.dark} bgColor={Colors.gray} />
            </View>

            {/* Store Info */}
            <View>
            </View>
        </View>
    )
}

export default ContactScreen