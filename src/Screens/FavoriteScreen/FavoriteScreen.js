import React from 'react'
import { View, Text } from 'react-native'

import styles from './FavoriteScreen.Style'
import Favorite from '../../Components/icons/Favorite'
import Colors from '../../utils/Colors'



const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <Favorite size={48} fill={Colors.darkGray} />
            <Text style={styles.text}>Henüz favori yok.</Text>
        </View>
    )
}

export default FavoriteScreen