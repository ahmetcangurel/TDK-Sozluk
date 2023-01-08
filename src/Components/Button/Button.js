import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Button.Style'

const Button = ({ title, bgColor, titleColor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: bgColor, }]}>
      <Text style={[styles.text, { color: titleColor }]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button