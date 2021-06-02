import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';
import {useNavigation} from '@react-navigation/native';

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
      <Button title="GO BACK" onPress={() => navigator.goBack()} />
      <View style={SecondaryScreensStyles.detailsContainer}>
        <Text style={SecondaryScreensStyles.detailsText}>
          Name: {results.name}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Model: {results.model}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Manufacturer: {results.manufacturer}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Cost (in credits): {results.cost_in_credits}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Length: {results.length}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Crew: {results.crew}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Passengers: {results.passengers}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Cargo Capacity: {results.cargo_capacity}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Consumables: {results.consumables}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default VehiclesDetails;
