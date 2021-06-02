import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';
import {useNavigation} from '@react-navigation/native';

const SpeciesDetails = ({route}) => {
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
          Classification: {results.classification}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Designation: {results.designation}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Average height: {results.average_height}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Skin Colors: {results.skin_colors}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Hair Colors: {results.hair_colors}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Average Lifespan: {results.average_lifespan}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Language: {results.language}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SpeciesDetails;
