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

const FilmDetails = ({route, navigation}) => {
  const item = route.params;
  const [results, setResults] = useState([]);

  const search = async () => {
    const response = await fetchResults(`${item.id}`);
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
      <View style={FilmDetailsStyles.mainContainer}>
        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigation.navigate('characters', {results})}>
          <Text style={SecondaryScreensStyles.nameText}>Go to Characters</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigation.navigate('planets', {results})}>
          <Text style={SecondaryScreensStyles.nameText}>Go to Planets</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigation.navigate('starships', {results})}>
          <Text style={SecondaryScreensStyles.nameText}>Go to Starships</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigation.navigate('vehicles', {results})}>
          <Text style={SecondaryScreensStyles.nameText}>Go to Vehicles</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SecondaryScreensStyles.touchableOpacity}
          onPress={() => navigation.navigate('species', {results})}>
          <Text style={SecondaryScreensStyles.nameText}>Go to Species</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FilmDetails;
