import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, FlatList, VirtualizedList } from 'react-native'
import styles from './SearchDetailScreen.Style'
import axios from 'axios'

import DetailHeader from '../../Components/DetailHeader/DetailHeader'
import { FavoriteButton, SignLangButton, VoiceButton } from '../../Components/IconButtons/IconButtons'

const SearchDetailScreen = ({ navigation, route }) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const { keyword } = route.params

    useEffect(() => {
        axios.get(`https://sozluk.gov.tr/gts?ara=${keyword}`)
            .then(res => setData(res.data))
            .catch(err => setError(err))
    }, [keyword])

    const RenderItem = ({ item }) => {
        const num = item.anlam_sira
        const prop = item.ozelliklerListe[0]?.tam_adi.toUpperCase()
        const title = item.anlam
        const sample = item.orneklerListe ? item.orneklerListe[0]?.ornek : 'Örnek bulunamadı.'
        return (
            <>
                <Text style={styles.propName}><Text style={styles.propNum}>{num}</Text> {prop}</Text>
                <Text style={styles.propTitle}>{title}</Text>
                <Text style={styles.propSample}>{sample}</Text>
            </>
        )
    }

    const ItemSeparator = () => {
        return (
            <View style={styles.separator} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <DetailHeader
                title={'Tükrçe Sözlük'}
                onPress={() => navigation.goBack()}
            />

            <View style={styles.subContainer}>
                {/* Head Main */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{data && data[0].madde}</Text>
                        <Text style={styles.type}>{data && data[0].lisan}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonContainerLeft}>
                            <VoiceButton onPress={() => console.log('Voice Button Pressed!')} />
                            <FavoriteButton keyword={keyword} />
                        </View>
                        <SignLangButton onPress={() => console.log('SignLang Button Pressed!')} />
                    </View>
                </View>

                {/* Section */}
                <View style={styles.summaryContainer}>
                    <FlatList
                        data={data && data[0].anlamlarListe}
                        ItemSeparatorComponent={ItemSeparator}
                        renderItem={({ item }) => (
                            <RenderItem item={item}
                            //sample={item.orneklerListe[0].ornek == undefined ? 'Örnek bulunamadı.' : item.orneklerListe[0].ornek}
                            />)}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SearchDetailScreen