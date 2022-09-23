import React from 'react'
import { View, Text } from 'react-native'
import styles from './HistoryScreen.Style'

import History from '../../Components/icons/History'

const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <History style={styles.icon} />
            <Text style={styles.text}>Henüz geçmiş yok.</Text>
        </View>
    )
}

export default DetailScreen