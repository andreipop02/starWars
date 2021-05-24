import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import roots from './roots';
import home from '../screens/HomeScreen';
import films from '../screens/FilmsListScreen';

const Stack = createStackNavigator();
const defaultNavigationOptions = () => ({
    gestureEnabled: false,
    headerShown: false
});
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions} initialRouteName={roots.homeScreen}>
      <Stack.Screen name={roots.homeScreen} component={home}/>
      <Stack.Screen name={roots.filmListScreen} component={films}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
