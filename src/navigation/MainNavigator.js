import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import roots from './roots';
import Home from '../screens/HomeScreen';
import Films from '../screens/FilmsListScreen';
import FilmDetails from '../screens/FilmDetailsScreen';
import Characters from '../screens/CharactersScreen';
import Planets from '../screens/PlanetsScreen';
import Starships from '../screens/StarshipsScreen';
import Vehicles from '../screens/VehiclesScreen';
import Species from '../screens/SpeciesScreen';
import CharacterDetails from '../screens/CharacterDetailsScreen';
import PlanetDetails from '../screens/PlanetDetailsScreen';
import VehiclesDetails from '../screens/VehiclesDetailsScreen';
import SpeciesDetails from '../screens/SpeciesDetailsScreen';

const Stack = createStackNavigator();
const defaultNavigationOptions = () => ({
    gestureEnabled: false,
    headerShown: false
});
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions} initialRouteName={roots.homeScreen}>
      <Stack.Screen name={roots.homeScreen} component={Home}/>
      <Stack.Screen name={roots.filmListScreen} component={Films}/>
      <Stack.Screen name={roots.filmDetailsScreen} component={FilmDetails}/>
      <Stack.Screen name={roots.charactersScreen} component={Characters}/>
      <Stack.Screen name={roots.planetsScreen} component={Planets}/>
      <Stack.Screen name={roots.starshipsScreen} component={Starships}/>
      <Stack.Screen name={roots.vehiclesScreen} component={Vehicles}/>
      <Stack.Screen name={roots.speciesScreen} component={Species}/>
      <Stack.Screen name={roots.characterDetails} component={CharacterDetails}/>
      <Stack.Screen name={roots.planetDetails} component={PlanetDetails}/>
      <Stack.Screen name={roots.vehiclesDetails} component={VehiclesDetails}/>
      <Stack.Screen name={roots.speciesDetails} component={SpeciesDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
