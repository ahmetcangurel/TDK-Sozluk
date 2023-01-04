import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './SpecialLetters.Style'

const SpecialLetters = ({ onPress, letter }) => {
    return (
        <TouchableOpacity key={letter} onPress={onPress}>
            <Text style={styles.letter}>{letter}</Text>
        </TouchableOpacity>
    )
}

export default SpecialLetters