import React from 'react'
import { View, Text, Linking } from 'react-native'
import styles from './ContactScreen.Style'

import SvgLeft from '../../Components/icons/Left'
import Colors from '../../utils/Colors'
import SvgFax from '../../Components/icons/Fax'
import SvgPhone from '../../Components/icons/Phone'
import Button from '../../Components/Button'

const ContactScreen = () => {

    const handleSendMail = () => {
        Linking.openURL('mailto:mail@mail.com')
    }

    const handleOpenUrl = () => {
        Linking.openURL('https://emagaza-tdk.ayk.gov.tr')
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
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
                <Button
                    title='E-Posta Yaz'
                    onPress={() => handleSendMail()}
                />

                {/* Store Info */}
                <Text style={styles.contactTitle}>Kızılay Kitap Satış Mağazası</Text>
                <View style={styles.contactAdressContainer}>
                    <Text style={styles.contactAdress}>Cumhuriyet Mahallesi, Bayındır 1 Sokak, No:24/6 Kızılay/ANKARA</Text>
                </View>
                <View style={styles.contactItem}>
                    <SvgPhone size={24} fill={Colors.red} />
                    <Text style={styles.contactNumber}>+90 312 457 52 00</Text>
                </View>
                <Button
                    title='E-Mağazaya Git'
                    onPress={() => handleOpenUrl()}
                />
            </View>
        </View>
    )
}

export default ContactScreen