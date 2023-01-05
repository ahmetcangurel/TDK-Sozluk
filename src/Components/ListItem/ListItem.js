import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../utils/Colors'
import SvgRight from '../icons/Right'
import styles from './ListItem.Style'

const ListItem = ({ onPress, title, icon = false }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {icon && <SvgRight size={24} fill={Colors.red} />}
        </TouchableOpacity>
    )
}

export default ListItem