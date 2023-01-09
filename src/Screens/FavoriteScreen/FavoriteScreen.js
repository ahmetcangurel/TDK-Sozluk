import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity, FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './FavoriteScreen.Style'
import Colors from '../../utils/Colors';
import ListItem from '../../Components/ListItem'
import EmptyContent from '../../Components/EmptyContent/EmptyContent'
import Button from '../../Components/Button/Button'

const FavoriteScreen = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const favoriteItems = useSelector(s => s.favoriteList)

    const handleOnPress = name => {
        if (selectedItems.length) {
            return selectItems(name)
        }

        // here you can add you code what do you want if user just do single tap
        console.log('pressed')
    };

    const getSelected = name => selectedItems.includes(name.name)

    const deSelectItems = () => setSelectedItems([])

    const selectItems = item => {
        if (selectedItems.includes(item.name)) {
            const newListItems = selectedItems.filter(
                listItem => listItem !== item.name,
            )
            return setSelectedItems([...newListItems])
        }
        setSelectedItems([...selectedItems, item.name])
    }

    const SelectedButtons = () => {
        return (
            <View style={styles.buttonContainer}>
                <View style={styles.topButtonContainer}>
                    <View style={styles.button}>
                        <Button
                            title={`Sil (${selectItems.length})`}
                            type='secondary'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Tümünü Seç'
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