import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Button.Style'

const Button = ({ text, bgColor, textColor }) => {
  return (
    <TouchableOpacity onPress={() => alert('Pressed!')} style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button