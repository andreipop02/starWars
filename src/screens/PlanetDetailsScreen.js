import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../constants/index';

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
      <Button title={strings.back} onPress={() => navigator.goBack()} />
      <View style={SecondaryScreensStyles.detailsContainer}>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.name} {results.name}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.rotation} {results.rotation_period}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.orbital} {results.orbital_period}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.diameter} {results.diameter}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.climate} {results.climate}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.gravity} {results.gravity}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.terrain} {results.terrain}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.population} {results.population}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default PlanetDetails;
