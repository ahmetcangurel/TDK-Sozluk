import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native'
import styles from './HistoryScreen.Style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'

import SearchItem from '../../Components/SearchItem/SearchItem'
import History from '../../Components/icons/History'
import Colors from '../../utils/Colors'
import SvgTrash from '../../Components/icons/Trash'

const DetailScreen = () => {
    const history = useSelector(s => s.historyList)
    const dispatch = useDispatch()

    const clearAllHistory = () => {
        AsyncStorage.removeItem('@history')
        dispatch({
            type: 'UPDATE_HISTORY_LIST',
            payload: []
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            {!history.length ?
                <>
                    <History fill={Colors.darkGray} size={48} />
                    <Text style={styles.text}>Henüz geçmiş yok.</Text>
                </>
                :
                <>
                    <TouchableOpacity style={styles.clearData} onPress={() => clearAllHistory()}>
                        <Text style={styles.clearDataText}>Tümünü Temizle!</Text>
                    </TouchableOpacity>
                    <FlatList
                        style={styles.flatList}
                        data={history}
                        renderItem={({ item }) => <SearchItem title={item.name} onPress={null} />}
                    />
                </>
            }
        </SafeAreaView>
    )
}

export default DetailScreen