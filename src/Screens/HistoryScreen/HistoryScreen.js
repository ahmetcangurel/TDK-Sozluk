import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native'
import styles from './HistoryScreen.Style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'

import ListItem from '../../Components/ListItem'
import History from '../../Components/icons/History'
import Colors from '../../utils/Colors'
import SvgTrash from '../../Components/icons/Trash'
import EmptyContent from '../../Components/EmptyContent/EmptyContent'

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
                <EmptyContent type='history' />
                :
                <>
                    <TouchableOpacity style={styles.clearData} onPress={() => clearAllHistory()}>
                        <Text style={styles.clearDataText}>Tümünü Temizle!</Text>
                    </TouchableOpacity>
                    <FlatList
                        style={styles.flatList}
                        data={history}
                        renderItem={({ item }) => <ListItem title={item.name} onPress={null} />}
                    />
                </>
            }
        </SafeAreaView>
    )
}

export default DetailScreen