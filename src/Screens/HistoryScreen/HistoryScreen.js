import React from 'react'
import { View, Text } from 'react-native'
import styles from './HistoryScreen.Style'

import History from '../../Components/icons/History'
import Colors from '../../utils/Colors'

const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <History fill={Colors.darkGray} size={48} />
            <Text style={styles.text}>Henüz geçmiş yok.</Text>
        </View>
    )
}

export default DetailScreen