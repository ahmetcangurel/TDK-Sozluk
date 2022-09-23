import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNav from './BottomNav';

import HistoryScreen from '../Screens/HistoryScreen';
import SearchScreen from '../Screens/SearchScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Search' tabBar={props => <BottomNav {...props} />}>
                <Tab.Screen options={null} name="History" component={HistoryScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Favorite" component={FavoriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}