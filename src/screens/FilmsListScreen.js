import React, {useState, useEffect} from 'react';
import {View, Button, ImageBackground} from 'react-native';
import ShowResults from '../components/ShowResults';
import background from '../styles/BackgroundStyle';
import {fetchResults} from '../api/index';
import {BASE_URL} from '../constants/url';
import {useNavigation} from '@react-navigation/native';
import FilmsStyles from '../styles/FilmsListStyles';

const FilmsList = () => {
  const [results, setResults] = useState([]);
  const navigator = useNavigation();
  const search = async () => {
    const response = await fetchResults(`${BASE_URL}/films/`);
    setResults(response.results);
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <Button title="Go back" onPress={() => navigator.goBack()} />
      <View style={FilmsStyles.resultsContainer}>
        <ShowResults result={results} />
      </View>
    </ImageBackground>
  );
};

export default FilmsList;
