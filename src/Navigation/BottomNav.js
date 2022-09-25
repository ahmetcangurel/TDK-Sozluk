import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../utils/Colors'

import Search from '../Components/icons/Search'
import History from '../Components/icons/History'
import Favorite from '../Components/icons/Favorite'

function BottomNav({ state, descriptors, navigation }) {

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.bottomBar}
                        key={label}
                    >
                        {label == 'Search' && <View style={styles.searchContainer}><View style={styles.searchSubContainer}><Search color={Colors.white} /></View></View>}
                        {label == 'History' && <View style={styles.historyContainer}><History size={24} fill={isFocused ? Colors.red : Colors.darkGray} /><View style={{ width: 4, height: 4, borderRadius: 4, backgroundColor: isFocused ? Colors.red : Colors.white, marginTop: 2 }} /></View>}
                        {label == 'Favorite' && <View style={styles.favoriteContainer}><Favorite size={24} fill={isFocused ? Colors.red : Colors.darkGray} /><View style={{ width: 4, height: 4, borderRadius: 4, backgroundColor: isFocused ? Colors.red : Colors.white, marginTop: 2 }} /></View>}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNav

const styles = StyleSheet.create({
    bottomBar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        height: 56,
        backgroundColor: Colors.white,
        paddingBottom: 8,
    },
    searchContainer: {
        backgroundColor: Colors.white,
        width: 86,
        height: 86,
        borderRadius: 86,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchSubContainer: {
        backgroundColor: Colors.red,
        width: 56,
        height: 56,
        borderRadius: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    historyContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    favoriteContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})