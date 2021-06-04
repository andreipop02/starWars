import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FilmDetailsStyles from '../styles/FilmDetailsStyles';
import background from '../styles/BackgroundStyle';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import {useNavigation} from '@react-navigation/native';
import roots from '../navigation/roots';
import {strings} from '../constants/index';

const FilmDetails = ({route}) => {
  const item = route.params;
  const [results, setResults] = useState([]);
  const navigator = useNavigation();
  const search = async () => {
    const response = await fetchResults(`${item.id}`);
    setResults(response);
  };
  useEffect(() => {
    search();
  }, []);
  const navigateToCharactersScreen = () => {
    navigator.navigate(roots.charactersScreen, {results});
  };
  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <Button title={strings.back} onPress={() => navigator.goBack()} />
      <View style={FilmDetailsStyles.mainContainer}>
        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigateToCharactersScreen()}>
          <Text style={SecondaryScreensStyles.nameText}>
            {strings.gotoCharacters}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigator.navigate(roots.planetsScreen, {results})}>
          <Text style={SecondaryScreensStyles.nameText}>
            {strings.gotoPlanets}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigator.navigate(roots.starshipsScreen, {results})}>
          <Text style={SecondaryScreensStyles.nameText}>
            {strings.gotoStarships}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigator.navigate(roots.vehiclesScreen, {results})}>
          <Text style={SecondaryScreensStyles.nameText}>
            {strings.gotoVehicles}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigator.navigate(roots.speciesScreen, {results})}>
          <Text style={SecondaryScreensStyles.nameText}>
            {strings.gotoSpecies}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FilmDetails;
