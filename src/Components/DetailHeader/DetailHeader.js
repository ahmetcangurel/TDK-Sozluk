import React from 'react'
import { View, Text } from 'react-native'
import styles from './DetailHeader.Style'
import Colors from '../../utils/Colors'
import SvgLeft from '../icons/Left'

const DetailHeader = ({ title, onPress, background }) => {
    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <SvgLeft size={24} fill={Colors.dark} onPress={onPress} />
            <Text style={styles.title}>{title}</Text>
            <View />
        </View>
    )
}

export default DetailHeader