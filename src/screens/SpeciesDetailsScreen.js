import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../constants/index';

const SpeciesDetails = ({route}) => {
  const item = route.params;
  const [results, setResults] = useState([]);
  const navigator = useNavigation();
  const search = async () => {
    const response = await fetchResults(`${item}`);
    setResults(response);
  };
  const navigateToPrevScreen = () => {
    navigator.goBack();
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <Button title={strings.back} onPress={() => navigateToPrevScreen()} />
      <View style={SecondaryScreensStyles.detailsContainer}>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.name} {results.name}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.classification} {results.classification}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.designation} {results.designation}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.averageHeight} {results.average_height}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.skinColors} {results.skin_colors}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.hairColors} {results.hair_colors}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.averageLifespan} {results.average_lifespan}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.language} {results.language}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SpeciesDetails;
