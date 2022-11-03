import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import styles from './FavoriteScreen.Style'
import Favorite from '../../Components/icons/Favorite'
import Colors from '../../utils/Colors'

const FavoriteScreen = () => {
    const dispatch = useDispatch()

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favorites')
            console.log(jsonValue)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e)
        }
    }

    const clearData = () => {
        AsyncStorage.clear()
        dispatch({
            type: 'UPDATE_FAVORITE_LIST',
            payload: null
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Favorite size={48} fill={Colors.darkGray} />
            <Text style={styles.text}>Henüz favori yok.</Text>
            <Text style={{ fontSize: 20 }} onPress={() => getData()} >Get Data</Text>
            <Text style={{ fontSize: 20 }} onPress={() => clearData()} >Clear Data</Text>
        </SafeAreaView>
    )
}

export default FavoriteScreen