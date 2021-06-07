import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../constants/index';

const CharacterDetails = ({route}) => {
  const item = route.params;
  const navigator = useNavigation();
  const [results, setResults] = useState([]);
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
          {strings.height} {results.height}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.mass} {results.mass}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.hairColor} {results.hair_color}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.skinColor} {results.skin_color}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.eyeColor} {results.eye_color}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.birthYear} {results.birth_year}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          {strings.gender} {results.gender}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default CharacterDetails;
