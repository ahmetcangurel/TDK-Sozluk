import React, { useEffect, useRef, useState } from 'react'
import { View, SafeAreaView, Image, ScrollView, TouchableOpacity, ImageBackground, Animated } from 'react-native'
import styles from './SearchScreen.Style'
import BottomSheet from 'react-native-gesture-bottom-sheet'
import { fetchData } from '../../hooks/useFetch/useFetch'
import { useDispatch, useSelector } from 'react-redux'

import SearchBar from '../../Components/SearchBar'
import RecommetedCard from '../../Components/RecommetedCard/RecommetedCard'
import SvgMore from '../../Components/icons/More'
import Colors from '../../utils/Colors'
import AboutScreen from '../AboutScreen'


const SearchScreen = ({ navigation }) => {
    const [searchFocus, setSearchFocus] = useState(false)
    const bannerHeight = useRef(new Animated.Value(0)).current;
    const bottomSheet = useRef();
    const dispatch = useDispatch()
    const homeData = useSelector(s => s.homeData)

    useEffect(() => {
        fetchData('https://sozluk.gov.tr/icerik')
            .then(res =>
                dispatch({
                    type: 'UPDATE_HOME_ACTION',
                    payload: res.data
                })
            ).catch(error =>
                console.log(error)
            )
    }, [])

    useEffect(() => {
        if (searchFocus) {
            Animated.timing(bannerHeight, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start()
        } else {
            Animated.timing(bannerHeight, {
                toValue: 230,
                duration: 1000,
                useNativeDriver: true
            }).start()
        }
    }, [bannerHeight, searchFocus])


    return (
        <SafeAreaView style={styles.container}>
            <BottomSheet sheetBackgroundColor={Colors.white} ref={bottomSheet} height={400}>
                <AboutScreen />
            </BottomSheet>

            {!searchFocus &&
                <View style={styles.backgroundContainer}>
                    <ImageBackground style={styles.banner} source={require('../../assets/banner.png')} >
                        {/* More Button */}
                        <TouchableOpacity onPress={() => bottomSheet.current.show()} style={styles.moreIcon}>
                            <SvgMore size={24} fill={Colors.white} />
                        </TouchableOpacity>
                    </ImageBackground>
                    {/* Logo */}
                    <Image style={styles.logo} source={require('../../assets/logo-white.png')} />
                </View>
            }

            <View style={searchFocus ? { paddingTop: 8, paddingHorizontal: 8, } : { paddingHorizontal: 8, marginTop: -26, }}>
                <SearchBar onChangeFocus={s => setSearchFocus(s)} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <RecommetedCard
                    title='Bir Deyim'
                    // dataTitle={homeData.kelime[0].madde}
                    // dataSummary={homeData.kelime[0].anlam}
                    onPress={() => navigation.navigate('Detail', {
                        data: homeData.kelime[0],
                        title: 'Bir Deyim'
                    })}
                />
                <RecommetedCard
                    title='Bir Deyim - Atasözü'
                    // dataTitle={homeData.atasoz[0].madde}
                    // dataSummary={homeData.atasoz[0].anlam}
                    onPress={() => navigation.navigate('Detail', {
                        data: homeData.atasoz[0],
                        title: 'Bir Deyim - Atasözü'
                    })}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SearchScreen