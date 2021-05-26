import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {fetchResults} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';

const CharacterDetails = ({route, navigation}) => {
  const item = route.params;
  const [results, setResults] = useState([]);

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
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <View style={SecondaryScreensStyles.detailsContainer}>
        <Text style={SecondaryScreensStyles.detailsText}>
          Name: {results.name}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Height: {results.height}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Mass: {results.mass}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Hair Color: {results.hair_color}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Skin Color: {results.skin_color}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Eye Color: {results.eye_color}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Birth Year: {results.birth_year}
        </Text>
        <Text style={SecondaryScreensStyles.detailsText}>
          Gender: {results.gender}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default CharacterDetails;
