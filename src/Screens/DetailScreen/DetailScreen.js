import React, { useRef } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import styles from './DetailScreen.Style'
import BottomSheet from 'react-native-gesture-bottom-sheet'
import DetailHeader from '../../Components/DetailHeader/DetailHeader'
import { FavoriteButton, VoiceButton, SignLangButton } from '../../Components/IconButtons/IconButtons'
import ListItem from '../../Components/ListItem/ListItem'
import Colors from '../../utils/Colors'

const DetailScreen = ({ route, navigation }) => {
    const signLangRef = useRef()
    const { data, title, keyword } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <DetailHeader
                background={Colors.softBrown}
                title={title}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.subContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.summary}>{data && data.madde}</Text>
                    <Text style={styles.type}>{title}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <FavoriteButton keyword={keyword} />
                    <VoiceButton onPress={() => console.log('Voice Button Pressed!')} />
                    <SignLangButton onPress={() => console.log('SignLang Button Pressed!')} />
                </View>
                <ListItem
                    title={data && data.anlam}
                />
            </View>
            <BottomSheet useRef={signLangRef} height={400} />
        </SafeAreaView>
    )
}

export default DetailScreen