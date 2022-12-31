import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import styles from './FavoriteScreen.Style'
import Favorite from '../../Components/icons/Favorite'
import Colors from '../../utils/Colors'
import { FlatList } from 'react-native-gesture-handler';
import SearchItem from '../../Components/SearchItem/SearchItem';

const FavoriteScreen = () => {
    const dispatch = useDispatch()
    const favoriteItems = useSelector(s => s.favoriteList)

    return (
        <SafeAreaView style={styles.container}>
            {favoriteItems.length < 0 || null ?
                <>
                    <Favorite size={48} fill={Colors.darkGray} />
                    <Text style={styles.text}>Henüz favori yok.</Text>
                </>
                :
                <FlatList
                    style={{ flex: 1, width: '100%', paddingHorizontal: 8, }}
                    data={favoriteItems}
                    renderItem={({ item }) => <SearchItem title={item.name} icon onPress={null} />}
                />
            }
        </SafeAreaView>
    )
}

export default FavoriteScreen