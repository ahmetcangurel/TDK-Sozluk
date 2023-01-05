import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../utils/Colors'
import SvgBook from '../icons/Book'
import SvgFavorite from '../icons/Favorite'
import SvgHistory from '../icons/History'
import SvgX from '../icons/X'
import styles from './EmptyContent.Styles'

const EmptyContent = ({ type }) => {
    if (type === 'history') {
        return (
            <>
                <SvgHistory fill={Colors.darkGray} size={48} />
                <Text style={styles.text}>Henüz geçmiş yok.</Text>
            </>
        )
    } if (type === 'favorite') {
        return (
            <>
                <SvgFavorite size={48} fill={Colors.darkGray} />
                <Text style={styles.text}>Henüz favori yok.</Text>
            </>
        )
    } if (type === 'search') {
        return (
            <>
                <SvgBook size={48} fill={Colors.darkGray} />
                <Text style={styles.text}>Aradığınız sözcük bulunamadı.</Text>
            </>
        )
    } else {
        return (
            <>
                <SvgX size={48} fill={Colors.darkGray} />
                <Text style={styles.text}>Empty Type</Text>
            </>
        )
    }
}

export default EmptyContent