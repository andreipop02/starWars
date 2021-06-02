import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';
import {useNavigation} from '@react-navigation/native';

const PlanetDetails = ({route}) => {
  const item = route.params;
  const [results, setResults] = useState([]);
  const navigator = useNavigation();
  const search = async () => {
    const response = await fetchResults(`${item}`);
    setResults(response);
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <Button title="GO BACK" onPress={() => navigator.goBack()} />
      <View style={SecondaryScreensStyles.detailsContainer}>
        <Text style={SecondaryScreensStyles.detailsText}>
          Name: {results.name}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Rotation Period: {results.rotation_period}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Orbital Period: {results.orbital_period}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Diameter: {results.diameter}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Climate: {results.climate}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Gravity: {results.gravity}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Terrain: {results.terrain}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Population: {results.population}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default PlanetDetails;
