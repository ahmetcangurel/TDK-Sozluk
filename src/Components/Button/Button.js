import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Button.Style'

const Button = ({ title, onPress, type = 'primary' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[type].container}>
      <Text style={styles[type].title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button