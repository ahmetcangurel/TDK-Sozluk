import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import styles from './SearchBar.Style'
import Colors from '../../utils/Colors'
import SvgSearch from '../icons/Search'
import SvgX from '../icons/X'
import autoComplete from '../../utils/autoComplate.json'

const SearchBar = ({ onChangeFocus, setSearchData }) => {
    const [value, setValue] = useState('')
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => {
        onChangeFocus(isFocus)
    }, [onChangeFocus, isFocus])

    const onClear = () => {
        setValue('')
    }

    const onCancel = () => {
        setValue('')
        setIsFocus(false)
        setSearchData([])
        Keyboard.dismiss()
    }

    const onSearchFilter = (text) => {
        const filterData = autoComplete.filter(item => {
            const itemData = item.madde.toString().toUpperCase()
            const textData = text.toString().toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setSearchData(filterData)
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <SvgSearch style={styles.searchIcon} />
                <TextInput
                    placeholder="Türkçe Sözlük'te Ara!"
                    style={styles.textInput}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onChangeText={text => {
                        setValue(text)
                        onSearchFilter(text)
                    }}
                />
                {value && <SvgX onPress={onClear} style={styles.xIcon} />}
            </View>
            {isFocus &&
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.cancelButtonText}>Vazgeç</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default SearchBar