import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity, FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './FavoriteScreen.Style'
import ListItem from '../../Components/ListItem'
import EmptyContent from '../../Components/EmptyContent/EmptyContent'
import Button from '../../Components/Button/Button'

const FavoriteScreen = ({ navigation }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const favoriteItems = useSelector(s => s.favoriteList)

    const handleOnPress = name => {
        if (selectedItems.length) {
            return selectItems(name)
        }

        navigation.navigate('SearchDetail', {
            title: name.name,
            keyword: name.name
        })
    }

    const getSelected = name => selectedItems.includes(name.name)

    const deSelectItems = () => setSelectedItems([])

    const selectItems = item => {
        if (selectedItems.includes(item.name)) {
            const newListItems = selectedItems.filter(
                listItem => listItem !== item.name,
            )
            return setSelectedItems([...newListItems])
        }
        console.log(selectedItems)
        setSelectedItems([...selectedItems, item.name])
    }

    const getSelectAll = () => {
        return favoriteItems.map(item => {
            if (!selectedItems.includes(item.name)) {
                setSelectedItems([...selectedItems, item.name])
            }
        })
    }

    const SelectedButtons = () => {
        return (
            <View style={styles.buttonContainer}>
                <View style={styles.topButtonContainer}>
                    <View style={styles.button}>
                        <Button
                            title={`Sil (${selectedItems.length})`}
                            type='secondary'
                            onPress={() => console.log('Sil çalıştı')}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Tümünü Seç'
                            onPress={() => getSelectAll()}
                        />
                    </View>
                </View>
                <Button
                    title='Vazgeç'
                    type='nonBackgorund'
                    onPress={() => deSelectItems()}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container} >
            {!favoriteItems.length ?
                <EmptyContent type='favorite' />
                :
                <>
                    <FlatList
                        keyExtractor={item => item.name}
                        data={favoriteItems}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.name}
                                onPress={() => handleOnPress(item)}
                                onLongPress={() => selectItems(item)}
                                selected={getSelected(item)}
                            />
                        )}
                    />
                    {!!selectedItems.length && (
                        <SelectedButtons />
                    )}
                </>
            }
        </SafeAreaView >
    );
};


export default FavoriteScreen