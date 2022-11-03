import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';

//Tab Screens
import HistoryScreen from '../Screens/HistoryScreen';
import SearchScreen from '../Screens/SearchScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';

//Stack Screens
import InfoScreen from '../Screens/InfoScreen';
import AboutScreen from '../Screens/AboutScreen';
import ContactScreen from '../Screens/ContactScreen';
import DetailScreen from '../Screens/DetailScreen/DetailScreen';
import SearchDetailScreen from '../Screens/SearchDetailScreen';

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

function SearchStackScreen() {
    return (
        <SearchStack.Navigator
            initialRouteName='SearchScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <SearchStack.Group>
                <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
                <SearchStack.Screen name='Detail' component={DetailScreen} />
                <SearchStack.Screen name='SearchDetail' component={SearchDetailScreen} />
            </SearchStack.Group>
        </SearchStack.Navigator>
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
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="Search" component={SearchStackScreen} />
                <Tab.Screen name="Favorite" component={FavoriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}