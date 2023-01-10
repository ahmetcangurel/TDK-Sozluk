import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNav from './BottomNav'

//Tab Screens
import HistoryScreen from '../Screens/HistoryScreen'
import SearchScreen from '../Screens/SearchScreen'
import FavoriteScreen from '../Screens/FavoriteScreen'

//Stack Screens
import DetailScreen from '../Screens/DetailScreen/DetailScreen'
import SearchDetailScreen from '../Screens/SearchDetailScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const SearchStackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName='SearchScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Group>
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name='Detail' component={DetailScreen} />
                <Stack.Screen name='SearchDetail' component={SearchDetailScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

const FavoriteStackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName='SearchScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} />
            <Stack.Screen name='SearchDetail' component={SearchDetailScreen} />
        </Stack.Navigator>
    )
}

const HistoryStackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName='SearchScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='HistoryScreen' component={HistoryScreen} />
            <Stack.Screen name='SearchDetail' component={SearchDetailScreen} />
        </Stack.Navigator>
    )
}


export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    gestureEnabled: false,
                }}
                initialRouteName='Search'
                tabBar={props => <BottomNav {...props} />}
            >
                <Tab.Screen name="History" component={HistoryStackScreen} />
                <Tab.Screen name="Search" component={SearchStackScreen} />
                <Tab.Screen name="Favorite" component={FavoriteStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}