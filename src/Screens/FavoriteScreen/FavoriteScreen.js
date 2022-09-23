import { View, Text } from 'react-native'
import React from 'react'
import styles from './FavoriteScreen.Style'
import Favorite from '../../Components/icons/Favorite'


const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <Favorite />
            <Text style={styles.text}>Henüz favori yok.</Text>
        </View>
    )
}

export default FavoriteScreen