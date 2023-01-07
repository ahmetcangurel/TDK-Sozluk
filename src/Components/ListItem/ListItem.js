import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../utils/Colors'
import SvgCheck from '../icons/Check'
import SvgRight from '../icons/Right'
import styles from './ListItem.Style'

const ListItem = ({ onPress, onLongPress, title, icon = false, selected }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Text style={styles.title}>{title}</Text>
            {icon && <SvgRight size={24} fill={Colors.red} />}
            {selected && <SvgCheck size={20} fill={Colors.red} />}
        </TouchableOpacity>
    )
}

export default ListItem