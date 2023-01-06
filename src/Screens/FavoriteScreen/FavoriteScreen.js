import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import styles from './FavoriteScreen.Style'
import Favorite from '../../Components/icons/Favorite'
import Colors from '../../utils/Colors'
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../Components/ListItem';
import EmptyContent from '../../Components/EmptyContent/EmptyContent';

const FavoriteScreen = () => {
    const dispatch = useDispatch()
    const favoriteItems = useSelector(s => s.favoriteList)

    const clearAllFavorites = () => {
        AsyncStorage.removeItem('@favorites')
        dispatch({
            type: 'UPDATE_FAVORITE_LIST',
            payload: []
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            {!favoriteItems.length ?
                <EmptyContent type='favorite' />
                :
                <>
                    <TouchableOpacity style={styles.clearData} onPress={() => clearAllFavorites()}>
                        <Text style={styles.clearDataText}>Tümünü Temizle!</Text>
                    </TouchableOpacity>
                    <FlatList
                        style={styles.flatList}
                        data={favoriteItems}
                        renderItem={({ item }) => <ListItem title={item.name} onPress={null} />}
                    />
                </>
            }
        </SafeAreaView>
    )
}

export default FavoriteScreen