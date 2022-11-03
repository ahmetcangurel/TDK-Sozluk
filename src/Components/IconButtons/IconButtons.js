import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import Colors from '../../utils/Colors'
import styles from './IconButtons.Style'

//icons
import SvgFavorite from '../icons/Favorite'
import SvgFavoriteSolid from '../icons/FavoriteSolid'
import SvgHand from '../icons/Hand'
import SvgVoice from '../icons/Voice'

const FavoriteButton = ({ onPress, keyword, favList, setFavList }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const dispatch = useDispatch()
    const favoriteStore = useSelector(s => s.favoriteList)


    const setItem = async (value) => {
        const newList = [...favoriteStore, { name: value }]
        await AsyncStorage.setItem('@favorites', JSON.stringify(newList))
        dispatch({
            type: 'UPDATE_FAVORITE_LIST',
            payload: newList
        })
        setIsFavorite(true)
    }

    const deleteItem = async (value) => {
        const newList = favoriteStore.filter(item => {
            return item.name != value
        })
        dispatch({
            type: 'UPDATE_FAVORITE_LIST',
            payload: newList
        })
        await AsyncStorage.setItem('@favorites', JSON.stringify(newList))
        setIsFavorite(false)
    }

    useEffect(() => {
        const filterItem = favoriteStore.filter(item => item.name.toLowerCase() === keyword.toLowerCase())
        console.log(filterItem)
        if (filterItem.length > 0) { // ..change! 
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
        console.log(favoriteStore)
    }, [isFavorite])


    return (
        <TouchableOpacity onPress={() => isFavorite ? deleteItem(keyword) : setItem(keyword)} style={styles.container}>
            {isFavorite ? <SvgFavoriteSolid size={24} fill={Colors.red} /> : <SvgFavorite size={24} fill={Colors.darkGray} />}
        </TouchableOpacity>
    )
}

const VoiceButton = ({ onPress }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {isActive ? <SvgVoice size={24} fill={Colors.red} /> : <SvgVoice size={24} fill={Colors.darkGray} />}
        </TouchableOpacity>
    )
}

const SignLangButton = ({ onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <SvgHand size={24} fill={Colors.darkGray} />
            <Text style={styles.title}>Türk İşaret Dili</Text>
        </TouchableOpacity>
    )
}

export { FavoriteButton, VoiceButton, SignLangButton }
