import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../constants/index';

const VehiclesDetails = ({route}) => {
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
          {strings.model} {results.model}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.manufacturer} {results.manufacturer}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.cost} {results.cost_in_credits}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.length} {results.length}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.crew} {results.crew}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.passengers} {results.passengers}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.cargo} {results.cargo_capacity}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.consumables} {results.consumables}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default VehiclesDetails;
