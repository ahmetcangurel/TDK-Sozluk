import React, { useEffect, useRef, useState } from 'react'
import { View, SafeAreaView, Image, ScrollView, TouchableOpacity, ImageBackground, Animated, FlatList, Text } from 'react-native'
import styles from './SearchScreen.Style'
import BottomSheet from 'react-native-gesture-bottom-sheet'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'

import SearchBar from '../../Components/SearchBar'
import RecommetedCard from '../../Components/RecommetedCard/RecommetedCard'
import SvgMore from '../../Components/icons/More'
import Colors from '../../utils/Colors'
import AboutScreen from '../AboutScreen'
import SearchItem from '../../Components/SearchItem'

const SearchScreen = ({ navigation }) => {
    const bannerHeight = useRef(new Animated.Value(230)).current;
    const searchBarHeight = useRef(new Animated.Value(-26)).current;
    const bottomSheet = useRef();
    const [searchFocus, setSearchFocus] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [data, setData] = useState({
        kelime: {
            anlam: '',
            madde: ''
        },
        atasoz: {
            anlam: '',
            madde: ''
        }
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://sozluk.gov.tr/icerik')
            .then((res) => { setData(res.data), setLoading(false) })
            .catch((err) => (setError(err.message), setLoading(false)))
    }, [])


    //Animation
    useEffect(() => {
        if (searchFocus) {
            Animated.timing(bannerHeight, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }).start()
            Animated.timing(searchBarHeight, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }).start()
        } else {
            Animated.timing(bannerHeight, {
                toValue: 230,
                duration: 1000,
                useNativeDriver: false
            }).start()
            Animated.timing(searchBarHeight, {
                toValue: -28,
                duration: 1000,
                useNativeDriver: false
            }).start()
        }
    }, [bannerHeight, searchBarHeight, searchFocus])

    const dispatch = useDispatch()

    //Get Favorite/History Data
    const getFavoriteData = async () => {
        let data = await AsyncStorage.getItem('@favorites')
        let resData = data !== null ? JSON.parse(data) : []
        dispatch({
            type: 'UPDATE_FAVORITE_LIST',
            payload: resData
        })
    }

    //Get History Data
    const getHistoryData = async () => {
        let data = await AsyncStorage.getItem('@history')
        let resData = data !== null ? JSON.parse(data) : []
        dispatch({
            type: 'UPDATE_HISTORY_LIST',
            payload: resData
        })

    }

    useEffect(() => {
        getFavoriteData()
        getHistoryData()
    }, [])

    // Set history data
    const setSearchHistoryList = async (value) => {
        const data = await AsyncStorage.getItem('@history')
        const resData = data !== null ? JSON.parse(data) : []
        let control = resData.filter((item) => {
            return item.name === value
        })
        if (control.name == value || control.length > 0) {
            console.log('not set', value)
        } else {
            const newList = [...resData, { name: value }]
            await AsyncStorage.setItem('@history', JSON.stringify(newList))
            dispatch({
                type: 'UPDATE_HISTORY_LIST',
                payload: newList
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <BottomSheet sheetBackgroundColor={Colors.white} ref={bottomSheet} height={400}>
                <AboutScreen />
            </BottomSheet>


            <View>
                <Animated.Image
                    style={[styles.banner, { height: bannerHeight }]}
                    source={require('../../assets/banner.png')}
                />
                <Animated.View style={[styles.backgroundContainer, { height: bannerHeight }]}>
                    {/* Logo */}
                    {!searchFocus ?
                        (<>
                            <Image style={styles.logo} source={require('../../assets/logo-white.png')} />
                            <TouchableOpacity onPress={() => bottomSheet.current.show()} style={styles.moreIcon}>
                                <SvgMore size={24} fill={Colors.white} />
                            </TouchableOpacity>
                        </>) : null
                    }
                </Animated.View>
            </View>

            <Animated.View style={[styles.searchBar, { marginTop: searchBarHeight }]}>
                <SearchBar onChangeFocus={s => setSearchFocus(s)} setSearchData={d => setSearchData(d)} />
            </Animated.View>

            {!searchFocus ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <RecommetedCard
                        title='Bir Kelime'
                        dataTitle={data?.kelime[0]?.madde}
                        dataSummary={data?.kelime[0]?.anlam}
                        onPress={() => navigation.navigate('Detail', {
                            data: data?.kelime[0],
                            title: 'Bir Kelime',
                            keyword: data?.kelime[0].madde
                        })}
                    />
                    <RecommetedCard
                        title='Bir Deyim - Atasözü'
                        dataTitle={data?.atasoz[0]?.madde}
                        dataSummary={data?.atasoz[0]?.anlam}
                        onPress={() => navigation.navigate('Detail', {
                            data: data?.atasoz[0],
                            title: 'Bir Deyim - Atasözü',
                            keyword: data?.atasoz[0].madde
                        })}
                    />
                </ScrollView>
            ) : (
                <View>
                    <FlatList
                        data={searchData}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        renderItem={({ item }) =>
                            <SearchItem
                                title={item.madde}
                                onPress={() => {
                                    navigation.navigate('SearchDetail', {
                                        keyword: item.madde,
                                        title: item.madde
                                    }), setSearchHistoryList(item.madde)
                                }}
                                icon
                            />}
                    />
                </View>
            )}
        </SafeAreaView>
    )
}

export default SearchScreen