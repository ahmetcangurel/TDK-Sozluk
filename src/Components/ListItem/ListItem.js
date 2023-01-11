import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../utils/Colors'
import SvgCheck from '../icons/Check'
import SvgRight from '../icons/Right'
import styles from './ListItem.Style'

const ListItem = ({ onPress, onLongPress, title, selected }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.container, selected && styles.selected]}
        >
            <Text style={styles.title}>{title}</Text>
            {selected ? <SvgCheck size={20} fill={Colors.red} /> : <SvgRight size={24} fill={Colors.red} />}
        </TouchableOpacity>
    )
}

export default ListItem