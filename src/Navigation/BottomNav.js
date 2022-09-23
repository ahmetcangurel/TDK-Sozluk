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
                    >
                        {label == 'Search' && <Search style={styles.searchIcon} stroke={isFocused ? Colors.red : Colors.softRed} />}
                        {label == 'History' && <History stroke={Colors.gray} />}
                        {label == 'Favorite' && <Favorite stroke={Colors.gray} />}
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
    },
    searchIcon: {
        height: 86,
    }
})