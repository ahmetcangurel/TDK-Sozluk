import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './RecommetedCard.Style'

const RecommetedCard = ({ title, dataTitle, dataSummary, onPress }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onPress} style={styles.subContainer}>
                <View style={styles.stick} />
                <View>
                    <Text style={styles.dataTitle}>{dataTitle}</Text>
                    <Text style={styles.dataSummary}>{dataSummary}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RecommetedCard