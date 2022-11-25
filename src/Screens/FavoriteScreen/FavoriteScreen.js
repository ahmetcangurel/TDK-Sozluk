import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import styles from './FavoriteScreen.Style'
import Favorite from '../../Components/icons/Favorite'
import Colors from '../../utils/Colors'
import { FlatList } from 'react-native-gesture-handler';

const FavoriteScreen = () => {
    const dispatch = useDispatch()
    const favoriteItems = useSelector(s => s.favoriteList)

    return (
        <SafeAreaView style={styles.container}>
            <Favorite size={48} fill={Colors.darkGray} />
            <Text style={styles.text}>Henüz favori yok.</Text>
            {/* <FlatList
                data={favoriteItems}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            /> */}
        </SafeAreaView>
    )
}

export default FavoriteScreen